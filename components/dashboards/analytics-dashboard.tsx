"use client"

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
import { useEffect, useState } from "react"

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
  { name: "Retail", value: 45 },
  { name: "Finance", value: 38 },
  { name: "Manufacturing", value: 42 },
  { name: "Healthcare", value: 28 },
  { name: "Energy", value: 25 },
  { name: "Altri", value: 22 },
]

const pieColors = [
  "var(--chart-1)",
  "var(--chart-2)",
  "var(--chart-3)",
  "var(--chart-4)",
  "var(--chart-5)",
  "var(--secondary)",
]

export function AnalyticsDashboard() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <div className="p-6 space-y-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl">
      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-800/50 backdrop-blur p-4 rounded-lg border border-slate-700 hover:border-primary transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">Anni Esperienza</span>
            <Award className="h-4 w-4 text-primary" />
          </div>
          <div className="text-2xl font-bold text-white">{animate && <AnimatedValue end={20} suffix="+" />}</div>
          <div className="text-xs text-slate-400 mt-1">Dal 2004</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur p-4 rounded-lg border border-slate-700 hover:border-primary transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">Clienti</span>
            <Users className="h-4 w-4 text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-white">{animate && <AnimatedValue end={200} suffix="+" />}</div>
          <div className="text-xs text-green-400 mt-1">↑ 15% YoY</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur p-4 rounded-lg border border-slate-700 hover:border-primary transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">Progetti</span>
            <Briefcase className="h-4 w-4 text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-white">{animate && <AnimatedValue end={500} suffix="+" />}</div>
          <div className="text-xs text-green-400 mt-1">Completati</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur p-4 rounded-lg border border-slate-700 hover:border-primary transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">Retention</span>
            <TrendingUp className="h-4 w-4 text-green-400" />
          </div>
          <div className="text-2xl font-bold text-white">{animate && <AnimatedValue end={95} suffix="%" />}</div>
          <div className="text-xs text-green-400 mt-1">Clienti fidelizzati</div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Crescita progetti nel tempo */}
        <div className="bg-slate-800/50 backdrop-blur p-4 rounded-lg border border-slate-700">
          <h3 className="text-white font-semibold mb-4 text-sm">Crescita Progetti (2019-2024)</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={projectGrowthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="anno" stroke="var(--muted-foreground)" fontSize={12} />
              <YAxis stroke="var(--muted-foreground)" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "var(--foreground)" }}
              />
              <Line
                type="monotone"
                dataKey="progetti"
                stroke="var(--chart-1)"
                strokeWidth={3}
                dot={{ fill: "var(--chart-1)", r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Distribuzione progetti per area */}
        <div className="bg-slate-800/50 backdrop-blur p-4 rounded-lg border border-slate-700">
          <h3 className="text-white font-semibold mb-4 text-sm">Progetti per Area di Competenza</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={projectsByAreaData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="area" stroke="var(--muted-foreground)" fontSize={11} />
              <YAxis stroke="var(--muted-foreground)" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "var(--foreground)" }}
              />
              <Bar dataKey="progetti" fill="var(--chart-2)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Distribuzione clienti per settore */}
      <div className="bg-slate-800/50 backdrop-blur p-4 rounded-lg border border-slate-700">
        <h3 className="text-white font-semibold mb-4 text-sm">Distribuzione Clienti per Settore</h3>
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={clientsBySectorData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={90}
              fill="var(--chart-1)"
              dataKey="value"
            >
              {clientsBySectorData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--background)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "var(--foreground)" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

function AnimatedValue({
  end,
  prefix = "",
  suffix = "",
  duration = 2000,
}: {
  end: number
  prefix?: string
  suffix?: string
  duration?: number
}) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setValue(progress * end)
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration])

  const formatted = end % 1 === 0 ? Math.floor(value) : value.toFixed(1)
  return (
    <>
      {prefix}
      {formatted}
      {suffix}
    </>
  )
}
