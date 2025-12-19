"use client"

import {
  AreaChart,
  Area,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import { Brain, Zap, Target, TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"

const predictionData = [
  { month: "Gen", actual: 42, predicted: 40, confidence: 95 },
  { month: "Feb", actual: 45, predicted: 44, confidence: 93 },
  { month: "Mar", actual: 51, predicted: 49, confidence: 91 },
  { month: "Apr", actual: 48, predicted: 52, confidence: 89 },
  { month: "Mag", actual: 54, predicted: 55, confidence: 92 },
  { month: "Giu", actual: null, predicted: 58, confidence: 88 },
  { month: "Lug", actual: null, predicted: 62, confidence: 85 },
]

const clusterData = [
  { x: 30, y: 40, cluster: 1 },
  { x: 35, y: 45, cluster: 1 },
  { x: 32, y: 42, cluster: 1 },
  { x: 60, y: 70, cluster: 2 },
  { x: 65, y: 75, cluster: 2 },
  { x: 62, y: 72, cluster: 2 },
  { x: 85, y: 30, cluster: 3 },
  { x: 90, y: 35, cluster: 3 },
  { x: 88, y: 32, cluster: 3 },
]

const COLORS = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)"]

export function AdvancedAnalyticsDashboard() {
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
            <span className="text-slate-400 text-sm">AI Accuracy</span>
            <Brain className="h-4 w-4 text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-white">{animate && <AnimatedValue end={96.7} suffix="%" />}</div>
          <div className="text-xs text-green-400 mt-1">↑ 2.3%</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur p-4 rounded-lg border border-slate-700 hover:border-primary transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">Predictions</span>
            <Zap className="h-4 w-4 text-yellow-400" />
          </div>
          <div className="text-2xl font-bold text-white">{animate && <AnimatedValue end={1247} />}</div>
          <div className="text-xs text-slate-400 mt-1">Today</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur p-4 rounded-lg border border-slate-700 hover:border-primary transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">Confidence</span>
            <Target className="h-4 w-4 text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-white">{animate && <AnimatedValue end={91.3} suffix="%" />}</div>
          <div className="text-xs text-green-400 mt-1">↑ 1.8%</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur p-4 rounded-lg border border-slate-700 hover:border-primary transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">Trend</span>
            <TrendingUp className="h-4 w-4 text-green-400" />
          </div>
          <div className="text-2xl font-bold text-white">{animate && <AnimatedValue end={15.4} suffix="%" />}</div>
          <div className="text-xs text-green-400 mt-1">Growth</div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-slate-800/50 backdrop-blur p-4 rounded-lg border border-slate-700">
          <h3 className="text-white font-semibold mb-4 text-sm">Predictive Analytics</h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={predictionData}>
              <defs>
                <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--chart-1)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="var(--chart-1)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--chart-2)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="var(--chart-2)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={12} />
              <YAxis stroke="var(--muted-foreground)" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
                labelStyle={{ color: "var(--foreground)" }}
              />
              <Legend
                verticalAlign="top"
                height={36}
                iconType="line"
                wrapperStyle={{ fontSize: "12px", color: "var(--muted-foreground)" }}
              />
              <Area
                type="monotone"
                dataKey="actual"
                stroke="var(--chart-1)"
                fillOpacity={1}
                fill="url(#colorActual)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="predicted"
                stroke="var(--chart-2)"
                fillOpacity={1}
                fill="url(#colorPredicted)"
                strokeWidth={2}
                strokeDasharray="5 5"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-800/50 backdrop-blur p-4 rounded-lg border border-slate-700">
          <h3 className="text-white font-semibold mb-4 text-sm">Customer Segmentation</h3>
          <ResponsiveContainer width="100%" height={200}>
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis type="number" dataKey="x" name="value" stroke="var(--muted-foreground)" fontSize={12} />
              <YAxis type="number" dataKey="y" name="engagement" stroke="var(--muted-foreground)" fontSize={12} />
              <Tooltip
                cursor={{ strokeDasharray: "3 3" }}
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
              />
              {[1, 2, 3].map((cluster) => (
                <Scatter
                  key={cluster}
                  name={`Cluster ${cluster}`}
                  data={clusterData.filter((d) => d.cluster === cluster)}
                  fill={COLORS[cluster - 1]}
                />
              ))}
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

function AnimatedValue({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number
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
      {formatted}
      {suffix}
    </>
  )
}
