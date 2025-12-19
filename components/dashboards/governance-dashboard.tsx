"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { Database, Shield, CheckCircle2, AlertTriangle } from "lucide-react"
import { useEffect, useState } from "react"

const qualityData = [
  { name: "Excellent", value: 45 },
  { name: "Good", value: 30 },
  { name: "Fair", value: 18 },
  { name: "Poor", value: 7 },
]

const pieColors = ["var(--chart-3)", "var(--chart-2)", "var(--chart-4)", "var(--chart-1)"]

const complianceData = [
  { category: "GDPR", score: 98, status: "compliant" },
  { category: "Security", score: 95, status: "compliant" },
  { category: "Quality", score: 88, status: "warning" },
  { category: "Backup", score: 100, status: "compliant" },
]

export function GovernanceDashboard() {
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
            <span className="text-slate-400 text-sm">Data Quality</span>
            <Database className="h-4 w-4 text-blue-400" />
          </div>
          <div className="text-2xl font-bold text-white">{animate && <AnimatedValue end={94.2} suffix="%" />}</div>
          <div className="text-xs text-green-400 mt-1">↑ 3.1%</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur p-4 rounded-lg border border-slate-700 hover:border-primary transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">Compliance</span>
            <Shield className="h-4 w-4 text-green-400" />
          </div>
          <div className="text-2xl font-bold text-white">{animate && <AnimatedValue end={97.5} suffix="%" />}</div>
          <div className="text-xs text-green-400 mt-1">↑ 1.5%</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur p-4 rounded-lg border border-slate-700 hover:border-primary transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">Verified</span>
            <CheckCircle2 className="h-4 w-4 text-green-400" />
          </div>
          <div className="text-2xl font-bold text-white">{animate && <AnimatedValue end={8542} />}</div>
          <div className="text-xs text-slate-400 mt-1">Records</div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur p-4 rounded-lg border border-slate-700 hover:border-primary transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="text-slate-400 text-sm">Issues</span>
            <AlertTriangle className="h-4 w-4 text-yellow-400" />
          </div>
          <div className="text-2xl font-bold text-white">{animate && <AnimatedValue end={23} />}</div>
          <div className="text-xs text-yellow-400 mt-1">Needs review</div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-slate-800/50 backdrop-blur p-4 rounded-lg border border-slate-700">
          <h3 className="text-white font-semibold mb-4 text-sm">Data Quality Distribution</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={qualityData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {qualityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                }}
              />
              <Legend
                verticalAlign="bottom"
                height={36}
                iconType="circle"
                wrapperStyle={{ fontSize: "12px", color: "var(--muted-foreground)" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-800/50 backdrop-blur p-4 rounded-lg border border-slate-700">
          <h3 className="text-white font-semibold mb-4 text-sm">Compliance Status</h3>
          <div className="space-y-4">
            {complianceData.map((item) => (
              <div key={item.category}>
                <div className="flex justify-between items-.center mb-2">
                  <span className="text-slate-300 text-sm">{item.category}</span>
                  <span className="text-white font-semibold text-sm">{item.score}%</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ${
                      item.status === "compliant" ? "bg-green-500" : "bg-yellow-500"
                    }`}
                    style={{ width: animate ? `${item.score}%` : "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
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
