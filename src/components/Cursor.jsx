import { useEffect, useRef, useState } from 'react'

const lerp = (a, b, t) => a + (b - a) * t

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnabled(fine && !reduced)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const root = document.documentElement
    const dot = dotRef.current
    const ring = ringRef.current
    document.body.classList.add('custom-cursor')

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let magnet = null
    let frame

    const releaseMagnet = () => {
      if (magnet) magnet.style.translate = ''
      magnet = null
    }

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
      document.body.classList.remove('cursor-hidden')

      const target = e.target instanceof Element ? e.target : null
      ring.classList.toggle('is-hover', !!target?.closest('a, button'))
      ring.classList.toggle('is-text', !!target?.closest('input, textarea'))

      const card = target?.closest('.glass, .project-media')
      if (card) {
        const r = card.getBoundingClientRect()
        card.style.setProperty('--x', `${mouseX - r.left}px`)
        card.style.setProperty('--y', `${mouseY - r.top}px`)
      }

      const btn = target?.closest('.btn')
      if (magnet && magnet !== btn) releaseMagnet()
      if (btn) {
        const r = btn.getBoundingClientRect()
        const dx = (mouseX - r.left - r.width / 2) * 0.3
        const dy = (mouseY - r.top - r.height / 2) * 0.4
        btn.style.translate = `${dx}px ${dy}px`
        magnet = btn
      }
    }

    const onLeave = () => {
      document.body.classList.add('cursor-hidden')
      releaseMagnet()
    }
    const onDown = () => ring.classList.add('is-down')
    const onUp = () => ring.classList.remove('is-down')

    const tick = () => {
      ringX = lerp(ringX, mouseX, 0.18)
      ringY = lerp(ringY, mouseY, 0.18)
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`

      root.style.setProperty('--mx', `${ringX.toFixed(1)}px`)
      root.style.setProperty('--my', `${ringY.toFixed(1)}px`)
      root.style.setProperty('--px', ((ringX / window.innerWidth) * 2 - 1).toFixed(3))
      root.style.setProperty('--py', ((ringY / window.innerHeight) * 2 - 1).toFixed(3))
      frame = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    document.documentElement.addEventListener('mouseleave', onLeave)
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      releaseMagnet()
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.body.classList.remove('custom-cursor', 'cursor-hidden')
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div className="cursor-spotlight" aria-hidden="true" />
      <div className="cursor-grid" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
