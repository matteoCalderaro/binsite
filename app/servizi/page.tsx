import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Layers, BarChart3, Brain, Code, Wrench, CheckCircle2, Globe } from "lucide-react"

export const metadata = {
  title: "Servizi | BI Network",
  description:
    "Servizi di Business Intelligence, Data Integration, Analytics e AI per trasformare i tuoi dati in valore",
}

export default function ServiziPage() {
  const services = [
    {
      icon: CheckCircle2,
      title: "Assessment",
      description:
        "Analisi e valutazione dello stato attuale dei sistemi informativi e identificazione delle opportunità di miglioramento",
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Integrazione dati da multiple fonti per creare un ecosistema informativo unificato e accessibile",
    },
    {
      icon: Layers,
      title: "Data Warehouse & Data Lake",
      description:
        "Progettazione e implementazione di architetture dati moderne per la gestione di grandi volumi di informazioni",
    },
    {
      icon: BarChart3,
      title: "BI & Analytics",
      description: "Soluzioni di Business Intelligence per visualizzazione, reportistica e analisi avanzata dei dati",
    },
    {
      icon: Brain,
      title: "Artificial Intelligence",
      description:
        "Implementazione di algoritmi di Machine Learning e AI per previsioni e automazione dei processi decisionali",
    },
    {
      icon: Wrench,
      title: "Application Maintenance",
      description: "Manutenzione evolutiva e correttiva delle applicazioni con supporto continuo e aggiornamenti",
    },
    {
      icon: Code,
      title: "Web Application",
      description: "Sviluppo di applicazioni web custom per esigenze specifiche di business e integrazione dati",
    },
    {
      icon: Globe,
      title: "ETL & Data Quality",
      description: "Processi di estrazione, trasformazione e caricamento dati con focus sulla qualità e governance",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-foreground">I Nostri Servizi</h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto text-pretty leading-relaxed">
              Siamo un'agile società di consulenza con valori forti e ventennale esperienza. Gestiamo il dato partendo
              dalle fonti, passando per tutte le attività di integrazione, estrazione, trasformazione sino alla
              visualizzazione finale sotto forma di KPI, dashboard e reportistica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card
                key={service.title}
                className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-3 text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-foreground/70 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
