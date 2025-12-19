"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const animationFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const nodeCount = Math.floor((canvas.width * canvas.height) / 12000)
    nodesRef.current = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 3 + 2,
    }))

    const animate = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const safeZoneRadius = Math.min(canvas.width, canvas.height) * 0.35

      // Update and draw nodes
      nodesRef.current.forEach((node) => {
        // Update position
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1

        // Keep in bounds
        node.x = Math.max(0, Math.min(canvas.width, node.x))
        node.y = Math.max(0, Math.min(canvas.height, node.y))

        const distanceFromCenter = Math.sqrt(Math.pow(node.x - centerX, 2) + Math.pow(node.y - centerY, 2))
        const opacityMultiplier =
          distanceFromCenter < safeZoneRadius ? Math.max(0.1, (distanceFromCenter / safeZoneRadius) * 0.9) : 0.9

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(228, 41, 49, ${opacityMultiplier})`
        ctx.fill()
      })

      // Draw connections
      const maxDistance = 150
      nodesRef.current.forEach((node1, i) => {
        nodesRef.current.slice(i + 1).forEach((node2) => {
          const dx = node2.x - node1.x
          const dy = node2.y - node1.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const midX = (node1.x + node2.x) / 2
            const midY = (node1.y + node2.y) / 2
            const midDistanceFromCenter = Math.sqrt(Math.pow(midX - centerX, 2) + Math.pow(midY - centerY, 2))
            const lineOpacityMultiplier =
              midDistanceFromCenter < safeZoneRadius
                ? Math.max(0.05, (midDistanceFromCenter / safeZoneRadius) * 0.5)
                : 0.5

            const opacity = (1 - distance / maxDistance) * lineOpacityMultiplier
            ctx.beginPath()
            ctx.moveTo(node1.x, node1.y)
            ctx.lineTo(node2.x, node2.y)
            ctx.strokeStyle = `rgba(228, 41, 49, ${opacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ opacity: 0.7 }} />
}
