import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Prodotti | BI Network",
  description:
    "Prodotti e soluzioni di Business Intelligence: BIMAIL, BIPLAY, BIREPORT e partnership con i migliori tool del mercato",
}

export default function ProdottiPage() {
  const proprietaryProducts = [
    {
      title: "BIMAIL",
      description:
        "Soluzione per l'invio automatico di report via email con scheduling avanzato e gestione personalizzata dei destinatari",
    },
    {
      title: "BIPLAY",
      description: "Piattaforma per la creazione e gestione di presentazioni interattive basate su dati in tempo reale",
    },
    {
      title: "BIREPORT",
      description:
        "Sistema di reportistica avanzata con funzionalità di drill-down, export multi-formato e distribuzione automatica",
    },
  ]

  const partnerProducts = [
    {
      title: "TALEND",
      description: "Leader nell'integrazione dati e data quality per architetture cloud e on-premise",
    },
    {
      title: "QLIK DATA INTEGRATION",
      description: "Piattaforma real-time per data integration, replication e streaming",
    },
    {
      title: "QLIKVIEW & QLIK SENSE",
      description: "Soluzioni di Business Intelligence associativa per analytics e visualizzazione avanzata",
    },
    {
      title: "POWER BI",
      description: "Business Analytics di Microsoft per visualizzazioni interattive e intelligence aziendale",
    },
    {
      title: "TABLEAU",
      description: "Piattaforma leader per analytics visiva e dashboarding enterprise",
    },
    {
      title: "LOOKER",
      description: "Modern business intelligence e analytics platform di Google Cloud",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-foreground">I Nostri Prodotti</h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto text-pretty leading-relaxed">
              Offriamo soluzioni proprietarie sviluppate internamente e partnership con i migliori tool di Business
              Intelligence sul mercato per garantire la massima flessibilità e performance.
            </p>
          </div>

          {/* Prodotti Proprietari */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Prodotti Proprietari</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {proprietaryProducts.map((product) => (
                <Card
                  key={product.title}
                  className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <CardHeader>
                    <CardTitle className="text-2xl mb-3 text-foreground">{product.title}</CardTitle>
                    <CardDescription className="text-foreground/70 leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Partner Tools */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-foreground">Partner & Tool</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnerProducts.map((product) => (
                <Card
                  key={product.title}
                  className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <CardTitle className="text-xl text-foreground">{product.title}</CardTitle>
                      <ExternalLink className="h-5 w-5 text-primary" />
                    </div>
                    <CardDescription className="text-foreground/70 leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="/contatti">Richiedi una Demo</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
