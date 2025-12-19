import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, BarChart3, Layers } from "lucide-react"

export function ServicesSection() {
  return (
    <section id="servizi" className="py-24 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground">SERVIZI</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Siamo un'agile società di consulenza con valori forti e ventennale esperienza. Gestiamo il dato partendo
            dalle fonte, passando per tutte le attività di integrazione, estrazione, trasformazione sino alla
            visualizzazione finale sotto forma di KPI, dashboard e reportistica. Attività che ci piace riassumere nella
            frase "l'ottimizzazione e l'analisi dei dati per business e imprese più intelligenti".
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl mb-4 text-foreground">Data Integration</CardTitle>
              <CardDescription className="text-foreground/70 leading-relaxed text-sm">
                Integrazione dati da multiple fonti per creare un ecosistema informativo unificato e accessibile
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl mb-4 text-foreground">Dashboard & KPI</CardTitle>
              <CardDescription className="text-foreground/70 leading-relaxed text-sm">
                Visualizzazione efficace dei dati attraverso dashboard interattive e indicatori di performance
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl mb-4 text-foreground">ETL & Data Quality</CardTitle>
              <CardDescription className="text-foreground/70 leading-relaxed text-sm">
                Processi di estrazione, trasformazione e caricamento dati con focus sulla qualità e governance
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
