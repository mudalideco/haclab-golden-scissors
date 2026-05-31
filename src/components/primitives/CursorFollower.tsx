'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function CursorFollower() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      gsap.to(dot.current, { x: e.clientX, y: e.clientY, duration: 0 })
      gsap.to(ring.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.18,
        ease: 'power2.out',
      })
    }

    const onEnter = () => {
      gsap.to(ring.current, { scale: 2.5, duration: 0.3 })
    }

    const onLeave = () => {
      gsap.to(ring.current, { scale: 1, duration: 0.3 })
    }

    // Activate cursor follower
    document.documentElement.classList.add('cursor-follower-active')

    window.addEventListener('mousemove', onMove)

    const interactives = document.querySelectorAll('a, button, [role="button"]')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    // Observe new elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.documentElement.classList.remove('cursor-follower-active')
      window.removeEventListener('mousemove', onMove)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div
        ref={dot}
        className="pointer-events-none fixed z-[9999]"
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: '#C9A84C',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        ref={ring}
        className="pointer-events-none fixed z-[9998]"
        style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          border: '1.5px solid #C9A84C',
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s, height 0.3s',
        }}
      />
    </>
  )
}
