"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"
import { NetworkBackground } from "@/components/network-background"

function TypingEffect() {
  const phrases = ["Trasforma i dati in decisioni", "We Love Data", "Business Intelligence Excellence"]
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[currentPhrase]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < phrase.length) {
            setDisplayText(phrase.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentPhrase((prev) => (prev + 1) % phrases.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentPhrase, phrases])

  return (
    <span className="text-primary">
      {displayText}
      <span className="opacity-30 animate-[pulse_2s_ease-in-out_infinite] font-light">│</span>
    </span>
  )
}

function FloatingParticles() {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hasMounted &&
        [...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
    </div>
  )
}

export function HeroSection() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 lg:px-8 overflow-hidden bg-background">
      <NetworkBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/50 to-transparent animate-gradient" />

      <FloatingParticles />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center backdrop-blur-sm rounded-3xl p-8 md:p-12">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-primary px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm">
              Advanced Analytics, BI & Analytics
            </span>
          </div>

          <div className="min-h-[140px] md:min-h-[180px] lg:min-h-[200px] flex items-center justify-center mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight text-foreground line-clamp-2">
              <TypingEffect />
            </h1>
          </div>

          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-3xl mx-auto text-pretty leading-relaxed">
            Siamo un'agile società di consulenza con valori forti e ventennale esperienza. Gestiamo il dato partendo
            dalle fonti, passando per tutte le attività di integrazione, estrazione, trasformazione sino alla
            visualizzazione finale.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/servizi">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                Scopri i nostri servizi
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/contatti">
              <Button size="lg" variant="outline">
                Contattaci
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
