import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'
import { gsap } from 'gsap'

function sectionFromHash(stage: HTMLElement, fallback: number) {
  const id = window.location.hash.slice(1)
  if (!id) return fallback
  const sections = Array.from(stage.children)
  const index = sections.findIndex((section) => section.id === id)
  return index < 0 ? fallback : index
}

export function useSectionNavigation(stageRef: RefObject<HTMLElement | null>, sectionCount: number) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeIndexRef = useRef(0)
  const transitionRef = useRef(false)
  const pendingIndexRef = useRef<number | null>(null)
  const navigateRef = useRef<(requestedIndex: number) => void>(() => {})

  const navigateTo = useCallback((requestedIndex: number) => {
    const stage = stageRef.current
    if (!stage) return
    const sections = Array.from(stage.children) as HTMLElement[]
    const index = Math.max(0, Math.min(requestedIndex, sections.length - 1))
    if (transitionRef.current) {
      pendingIndexRef.current = index === activeIndexRef.current ? null : index
      return
    }
    const current = activeIndexRef.current
    if (current === index) return

    const outgoing = sections[current]
    const incoming = sections[index]
    if (!outgoing || !incoming) return

    const direction = index > current ? 1 : -1
    const transitions = [
      { x: 0, y: 34, scale: 0.985 },
      { x: 34, y: 0, scale: 1.015 },
      { x: -30, y: 14, scale: 0.99 },
      { x: 0, y: -32, scale: 1.02 },
      { x: 42, y: -12, scale: 1.01 },
      { x: -40, y: 0, scale: 0.985 },
      { x: 16, y: 28, scale: 1.02 },
      { x: -18, y: -26, scale: 0.99 },
    ]
    const transition = transitions[index % transitions.length]
    const offset = { x: transition.x * direction, y: transition.y * direction }
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    transitionRef.current = true
    activeIndexRef.current = index
    gsap.killTweensOf([outgoing, incoming])
    gsap.set(incoming, { display: 'block', visibility: 'visible', pointerEvents: 'auto' })
    incoming.scrollTop = 0
    setActiveIndex(index)

    const id = incoming.id
    if (window.location.hash !== `#${id}`) {
      window.history.pushState(null, '', `#${id}`)
    }

    if (reducedMotion) {
      gsap.set(outgoing, { display: 'none', visibility: 'hidden', pointerEvents: 'none' })
      gsap.set(incoming, { x: 0, y: 0, autoAlpha: 1, scale: 1 })
      transitionRef.current = false
      const pendingIndex = pendingIndexRef.current
      pendingIndexRef.current = null
      if (pendingIndex !== null) navigateRef.current(pendingIndex)
      return
    }

    const finishTransition = () => {
      transitionRef.current = false
      const pendingIndex = pendingIndexRef.current
      pendingIndexRef.current = null
      if (pendingIndex !== null) navigateRef.current(pendingIndex)
    }
    const timeline = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      onComplete: () => {
        gsap.set(outgoing, { display: 'none', visibility: 'hidden', pointerEvents: 'none' })
        finishTransition()
      },
    })

    timeline
      .fromTo(
        incoming,
        { ...offset, autoAlpha: 0, scale: transition.scale },
        { x: 0, y: 0, autoAlpha: 1, scale: 1, duration: 0.76, clearProps: 'transform' },
        0,
      )
      .fromTo(
        incoming.querySelectorAll('.heading-word'),
        { y: 22, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.55, stagger: 0.045, ease: 'power2.out', clearProps: 'transform,opacity' },
        0.12,
      )
      .to(
        outgoing,
        {
          x: -offset.x * 0.6,
          y: -offset.y * 0.6,
          autoAlpha: 0,
          scale: transition.scale > 1 ? 0.99 : 1.01,
          duration: 0.5,
        },
        0,
      )
  }, [stageRef])

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    navigateRef.current = navigateTo
    const sections = Array.from(stage.children) as HTMLElement[]
    const initialIndex = Math.min(sectionFromHash(stage, 0), sections.length - 1)
    activeIndexRef.current = initialIndex
    transitionRef.current = false
    pendingIndexRef.current = null
    sections.forEach((section, index) => {
      gsap.set(section, {
        display: index === initialIndex ? 'block' : 'none',
        visibility: index === initialIndex ? 'visible' : 'hidden',
        autoAlpha: index === initialIndex ? 1 : 0,
        pointerEvents: index === initialIndex ? 'auto' : 'none',
      })
    })
    setActiveIndex(initialIndex)

    let touchStartY = 0
    let touchSection: HTMLElement | null = null

    const canScroll = (section: HTMLElement, direction: number) => {
      if (section.scrollHeight <= section.clientHeight + 2) return false
      return direction > 0
        ? section.scrollTop + section.clientHeight < section.scrollHeight - 2
        : section.scrollTop > 2
    }

    const onWheel = (event: WheelEvent) => {
      const section = (event.target as HTMLElement | null)?.closest<HTMLElement>('.section-panel')
      if (!section || Math.abs(event.deltaY) < 12) return
      const direction = Math.sign(event.deltaY)
      if (canScroll(section, direction)) return
      event.preventDefault()
      const current = sections.indexOf(section)
      navigateTo(current + direction)
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey) return
      const target = event.target
      if (
        target instanceof HTMLElement &&
        (target.isContentEditable || target.matches('input, textarea, select, summary'))
      ) return

      const focusedSection = target instanceof HTMLElement
        ? target.closest<HTMLElement>('.section-panel')
        : null
      const section = focusedSection ?? sections[activeIndexRef.current]
      if (!section) return

      let direction = 0
      if (event.key === 'ArrowDown' || event.key === 'PageDown' || event.key === ' ') direction = 1
      if (event.key === 'ArrowUp' || event.key === 'PageUp') direction = -1
      if (!direction) return

      event.preventDefault()
      if ((event.key === 'ArrowDown' || event.key === 'ArrowUp') && canScroll(section, direction)) {
        section.scrollBy({ top: direction * 72, behavior: 'smooth' })
        return
      }
      navigateTo(sections.indexOf(section) + direction)
    }

    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.changedTouches[0]?.clientY ?? 0
      touchSection = (event.target as HTMLElement | null)?.closest<HTMLElement>('.section-panel') ?? null
    }

    const onTouchEnd = (event: TouchEvent) => {
      if (!touchSection) return
      const delta = touchStartY - (event.changedTouches[0]?.clientY ?? touchStartY)
      if (Math.abs(delta) < 55 || canScroll(touchSection, Math.sign(delta))) return
      navigateTo(sections.indexOf(touchSection) + Math.sign(delta))
    }

    const onHashChange = () => navigateTo(sectionFromHash(stage, 0))
    const onPopState = () => navigateTo(sectionFromHash(stage, 0))

    stage.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('keydown', onKeyDown)
    stage.addEventListener('touchstart', onTouchStart, { passive: true })
    stage.addEventListener('touchend', onTouchEnd, { passive: true })
    window.addEventListener('hashchange', onHashChange)
    window.addEventListener('popstate', onPopState)

    return () => {
      stage.removeEventListener('wheel', onWheel)
      window.removeEventListener('keydown', onKeyDown)
      stage.removeEventListener('touchstart', onTouchStart)
      stage.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('hashchange', onHashChange)
      window.removeEventListener('popstate', onPopState)
      gsap.killTweensOf(sections)
    }
  }, [navigateTo, sectionCount, stageRef])

  return { activeIndex, navigateTo }
}
