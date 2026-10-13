import { useEffect, useRef } from 'react'

type ParticleFieldProps = {
  active: boolean
}

type Particle = {
  x: number
  y: number
  originX: number
  originY: number
  phase: number
}

export function ParticleField({ active }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context || !active) return

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const touchQuery = window.matchMedia('(pointer: coarse)')
    const pointer = { x: -1000, y: -1000 }
    let width = 0
    let height = 0
    let animationFrame = 0
    let isVisible = !document.hidden
    let particles: Particle[] = []

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)
      width = bounds.width
      height = bounds.height
      canvas.width = Math.round(width * pixelRatio)
      canvas.height = Math.round(height * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

      const count = touchQuery.matches ? 28 : Math.min(72, Math.round(width / 17))
      particles = Array.from({ length: count }, (_, index) => {
        const x = Math.random() * width
        const y = Math.random() * height
        return { x, y, originX: x, originY: y, phase: index * 0.9 }
      })
    }

    const onPointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect()
      pointer.x = event.clientX - bounds.left
      pointer.y = event.clientY - bounds.top
    }
    const refresh = () => {
      window.cancelAnimationFrame(animationFrame)
      resize()
      if (isVisible) draw()
    }
    const updateVisibility = () => {
      isVisible = !document.hidden
      window.cancelAnimationFrame(animationFrame)
      if (isVisible) draw()
      else context.clearRect(0, 0, width, height)
    }

    const draw = () => {
      context.clearRect(0, 0, width, height)
      const interactive = !touchQuery.matches && !motionQuery.matches
      const maxDistance = 118

      particles.forEach((particle, index) => {
        if (interactive) {
          const dx = particle.x - pointer.x
          const dy = particle.y - pointer.y
          const distance = Math.hypot(dx, dy)
          if (distance < 145 && distance > 0) {
            const force = (145 - distance) / 145
            particle.x += (dx / distance) * force * 1.4
            particle.y += (dy / distance) * force * 1.4
          }
          particle.x += (particle.originX - particle.x) * 0.018
          particle.y += (particle.originY - particle.y) * 0.018
        }

        context.beginPath()
        context.arc(particle.x, particle.y, 1.2, 0, Math.PI * 2)
        context.fillStyle = `rgba(164, 145, 255, ${0.2 + Math.sin(particle.phase) * 0.08})`
        context.fill()

        for (let otherIndex = index + 1; otherIndex < particles.length; otherIndex += 1) {
          const other = particles[otherIndex]
          const distance = Math.hypot(particle.x - other.x, particle.y - other.y)
          if (distance >= maxDistance) continue
          context.beginPath()
          context.moveTo(particle.x, particle.y)
          context.lineTo(other.x, other.y)
          context.strokeStyle = `rgba(90, 115, 210, ${0.11 * (1 - distance / maxDistance)})`
          context.stroke()
        }
        particle.phase += 0.008
      })

      if (!motionQuery.matches && isVisible) animationFrame = window.requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', refresh, { passive: true })
    canvas.addEventListener('pointermove', onPointerMove, { passive: true })
    motionQuery.addEventListener('change', refresh)
    touchQuery.addEventListener('change', refresh)
    document.addEventListener('visibilitychange', updateVisibility)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', refresh)
      canvas.removeEventListener('pointermove', onPointerMove)
      motionQuery.removeEventListener('change', refresh)
      touchQuery.removeEventListener('change', refresh)
      document.removeEventListener('visibilitychange', updateVisibility)
    }
  }, [active])

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />
}
