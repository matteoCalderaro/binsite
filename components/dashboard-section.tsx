"use client"

import { useEffect, useState, useRef } from "react"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { TrendingUp, Users, Briefcase, Award } from "lucide-react"

function AnimatedCounter({
  end,
  duration = 2000,
  suffix = "",
  trigger = false,
}: { end: number; duration?: number; suffix?: string; trigger?: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!trigger) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration, trigger])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

const projectGrowthData = [
  { anno: "2019", progetti: 65 },
  { anno: "2020", progetti: 78 },
  { anno: "2021", progetti: 95 },
  { anno: "2022", progetti: 120 },
  { anno: "2023", progetti: 145 },
  { anno: "2024", progetti: 160 },
]

const projectsByAreaData = [
  { area: "Data Governance", progetti: 180 },
  { area: "BI & Analytics", progetti: 210 },
  { area: "Advanced Analytics", progetti: 110 },
]

const clientsBySectorData = [
  { name: "Retail", value: 45, color: "#ef4444" },
  { name: "Finance", value: 38, color: "#f97316" },
  { name: "Manufacturing", value: 42, color: "#eab308" },
  { name: "Healthcare", value: 28, color: "#22c55e" },
  { name: "Energy", value: 25, color: "#3b82f6" },
  { name: "Altri", value: 22, color: "#8b5cf6" },
]

export function DashboardSection() {
  const [animateKpis, setAnimateKpis] = useState(false)
  const [animateChart1, setAnimateChart1] = useState(false)
  const [animateChart2, setAnimateChart2] = useState(false)
  const [animateChart3, setAnimateChart3] = useState(false)

  const kpisRef = useRef<HTMLDivElement>(null)
  const chart1Ref = useRef<HTMLDivElement>(null)
  const chart2Ref = useRef<HTMLDivElement>(null)
  const chart3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    if (kpisRef.current) {
      const kpisObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setAnimateKpis(true)
          }
        },
        { threshold: 0.2 },
      )
      kpisObserver.observe(kpisRef.current)
      observers.push(kpisObserver)
    }

    if (chart1Ref.current) {
      const chart1Observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setAnimateChart1(true), 200)
          }
        },
        { threshold: 0.2 },
      )
      chart1Observer.observe(chart1Ref.current)
      observers.push(chart1Observer)
    }

    if (chart2Ref.current) {
      const chart2Observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setAnimateChart2(true), 400)
          }
        },
        { threshold: 0.2 },
      )
      chart2Observer.observe(chart2Ref.current)
      observers.push(chart2Observer)
    }

    if (chart3Ref.current) {
      const chart3Observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => setAnimateChart3(true), 600)
          }
        },
        { threshold: 0.2 },
      )
      chart3Observer.observe(chart3Ref.current)
      observers.push(chart3Observer)
    }

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section className="py-20 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">I Nostri Numeri</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Visualizziamo il nostro successo attraverso i dati, dimostrando concretamente la nostra esperienza nel
              campo della Business Intelligence
            </p>
          </div>

          {/* KPIs */}
          <div
            ref={kpisRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-700 ${
              animateKpis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div
              className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20"
              style={{ transitionDelay: "0ms" }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-muted-foreground text-sm font-medium">Anni Esperienza</span>
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                <AnimatedCounter end={20} suffix="+" trigger={animateKpis} />
              </div>
              <div className="text-xs text-muted-foreground mt-2">Dal 2004</div>
            </div>

            <div
              className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20"
              style={{ transitionDelay: "100ms" }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-muted-foreground text-sm font-medium">Clienti</span>
                <Users className="h-5 w-5 text-blue-500" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                <AnimatedCounter end={200} suffix="+" trigger={animateKpis} />
              </div>
              <div className="text-xs text-green-500 mt-2">↑ 15% YoY</div>
            </div>

            <div
              className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20"
              style={{ transitionDelay: "200ms" }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-muted-foreground text-sm font-medium">Progetti</span>
                <Briefcase className="h-5 w-5 text-purple-500" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                <AnimatedCounter end={500} suffix="+" trigger={animateKpis} />
              </div>
              <div className="text-xs text-muted-foreground mt-2">Completati</div>
            </div>

            <div
              className="bg-card/50 backdrop-blur p-6 rounded-lg border border-border hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20"
              style={{ transitionDelay: "300ms" }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-muted-foreground text-sm font-medium">Retention</span>
                <TrendingUp className="h-5 w-5 text-green-500" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                <AnimatedCounter end={95} suffix="%" trigger={animateKpis} />
              </div>
              <div className="text-xs text-green-500 mt-2">Clienti fidelizzati</div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div
              ref={chart1Ref}
              className={`bg-card/50 backdrop-blur p-6 rounded-lg border border-border hover:border-primary transition-all duration-700 ${
                animateChart1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="text-foreground font-semibold mb-6 text-base">Crescita Progetti (2019-2024)</h3>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={projectGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="anno" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "hsl(var(--foreground))" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="progetti"
                    stroke="#e42931"
                    strokeWidth={3}
                    dot={{ fill: "#e42931", r: 5 }}
                    activeDot={{ r: 7 }}
                    animationBegin={0}
                    animationDuration={1500}
                    isAnimationActive={animateChart1}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div
              ref={chart2Ref}
              className={`bg-card/50 backdrop-blur p-6 rounded-lg border border-border hover:border-primary transition-all duration-700 ${
                animateChart2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h3 className="text-foreground font-semibold mb-6 text-base">Progetti per Area di Competenza</h3>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={projectsByAreaData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="area" stroke="hsl(var(--muted-foreground))" fontSize={11} />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                    labelStyle={{ color: "hsl(var(--foreground))" }}
                  />
                  <Bar
                    dataKey="progetti"
                    fill="#e42931"
                    radius={[8, 8, 0, 0]}
                    animationBegin={0}
                    animationDuration={1500}
                    isAnimationActive={animateChart2}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div
            ref={chart3Ref}
            className={`bg-card/50 backdrop-blur p-6 rounded-lg border border-border hover:border-primary transition-all max-w-4xl mx-auto duration-700 ${
              animateChart3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-foreground font-semibold mb-6 text-base text-center">
              Distribuzione Clienti per Settore
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={clientsBySectorData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  animationBegin={0}
                  animationDuration={1500}
                  isAnimationActive={animateChart3}
                >
                  {clientsBySectorData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                  labelStyle={{ color: "hsl(var(--foreground))" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  )
}
