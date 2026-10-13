import { useEffect, useRef } from 'react'

export function CursorEffects() {
  const dotRef = useRef<HTMLSpanElement>(null)
  const ringRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let pointerX = window.innerWidth / 2
    let pointerY = window.innerHeight / 2
    let ringX = pointerX
    let ringY = pointerY
    let hoverFrame = 0
    let hoveredElement: HTMLElement | null = null
    let hoveredBounds: DOMRect | null = null
    let queuedPointer: PointerEvent | null = null
    let isVisible = !document.hidden

    const updateAvailability = () => {
      document.documentElement.classList.toggle(
        'custom-cursor-enabled',
        finePointer.matches && !reducedMotion.matches,
      )
      window.cancelAnimationFrame(frame)
      if (finePointer.matches && !reducedMotion.matches && isVisible) {
        frame = window.requestAnimationFrame(animate)
      }
    }
    const updateVisibility = () => {
      isVisible = !document.hidden
      updateAvailability()
    }
    const move = (event: PointerEvent) => {
      pointerX = event.clientX
      pointerY = event.clientY
      queuedPointer = event
      if (hoveredElement && !hoverFrame) {
        hoverFrame = window.requestAnimationFrame(updateHover)
      }
    }
    const markHover = (event: PointerEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return
      document.documentElement.classList.toggle(
        'cursor-hovering',
        Boolean(target.closest('a, button, summary, [role="button"]')),
      )
    }
    const clearHover = () => {
      if (hoveredElement) {
        hoveredElement.style.removeProperty('--mag-x')
        hoveredElement.style.removeProperty('--mag-y')
        hoveredElement.style.removeProperty('--tilt-x')
        hoveredElement.style.removeProperty('--tilt-y')
      }
      hoveredElement = null
      hoveredBounds = null
      window.cancelAnimationFrame(hoverFrame)
      hoverFrame = 0
    }
    const setHoverTarget = (event: PointerEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return
      const next = target.closest<HTMLElement>('.project-card')
        ?? target.closest<HTMLElement>('a, button, summary')
      if (next === hoveredElement) return
      clearHover()
      if (!next) return
      hoveredElement = next
      hoveredBounds = next.getBoundingClientRect()
    }
    const leaveHoverTarget = (event: PointerEvent) => {
      const nextTarget = event.relatedTarget
      const next = nextTarget instanceof Element
        ? nextTarget.closest<HTMLElement>('.project-card')
          ?? nextTarget.closest<HTMLElement>('a, button, summary')
        : null
      if (next === hoveredElement) return
      clearHover()
      if (next) {
        hoveredElement = next
        hoveredBounds = next.getBoundingClientRect()
      }
    }
    const updateHover = () => {
      hoverFrame = 0
      const event = queuedPointer
      if (!event || !hoveredElement || !hoveredBounds) return
      const x = (event.clientX - hoveredBounds.left) / hoveredBounds.width
      const y = (event.clientY - hoveredBounds.top) / hoveredBounds.height
      if (hoveredElement.matches('.project-card')) {
        hoveredElement.style.setProperty('--card-x', `${x * 100}%`)
        hoveredElement.style.setProperty('--card-y', `${y * 100}%`)
        hoveredElement.style.setProperty('--tilt-x', `${(0.5 - y) * 4}deg`)
        hoveredElement.style.setProperty('--tilt-y', `${(x - 0.5) * 4}deg`)
      } else {
        hoveredElement.style.setProperty('--mag-x', `${(x - 0.5) * 7}px`)
        hoveredElement.style.setProperty('--mag-y', `${(y - 0.5) * 7}px`)
      }
    }
    const animate = () => {
      if (!finePointer.matches || reducedMotion.matches || !isVisible) return
      ringX += (pointerX - ringX) * 0.16
      ringY += (pointerY - ringY) * 0.16
      dotRef.current?.style.setProperty('transform', `translate3d(${pointerX}px, ${pointerY}px, 0)`)
      ringRef.current?.style.setProperty('transform', `translate3d(${ringX}px, ${ringY}px, 0)`)
      document.documentElement.style.setProperty('--pointer-x', `${pointerX}px`)
      document.documentElement.style.setProperty('--pointer-y', `${pointerY}px`)
      frame = window.requestAnimationFrame(animate)
    }
    const resize = () => {
      if (hoveredElement) hoveredBounds = hoveredElement.getBoundingClientRect()
    }

    updateAvailability()
    finePointer.addEventListener('change', updateAvailability)
    reducedMotion.addEventListener('change', updateAvailability)
    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerover', markHover, { passive: true })
    window.addEventListener('pointerover', setHoverTarget, { passive: true })
    window.addEventListener('pointerout', leaveHoverTarget, { passive: true })
    window.addEventListener('resize', resize, { passive: true })
    document.addEventListener('visibilitychange', updateVisibility)

    return () => {
      window.cancelAnimationFrame(frame)
      window.cancelAnimationFrame(hoverFrame)
      finePointer.removeEventListener('change', updateAvailability)
      reducedMotion.removeEventListener('change', updateAvailability)
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', markHover)
      window.removeEventListener('pointerover', setHoverTarget)
      window.removeEventListener('pointerout', leaveHoverTarget)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', updateVisibility)
      document.documentElement.classList.remove('custom-cursor-enabled', 'cursor-hovering')
      document.documentElement.style.removeProperty('--pointer-x')
      document.documentElement.style.removeProperty('--pointer-y')
    }
  }, [])

  return (
    <>
      <span ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <span ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
