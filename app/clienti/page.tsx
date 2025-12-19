import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Factory, ShoppingCart, Landmark, Activity, Briefcase } from "lucide-react"

export const metadata = {
  title: "Clienti | BI Network",
  description:
    "I nostri clienti: aziende manifatturiere, retail, banking, pharma e PA che hanno scelto BI Network per le loro soluzioni di Business Intelligence",
}

export default function ClientiPage() {
  const clientTypes = [
    {
      icon: Factory,
      title: "Manifatturiero",
      description: "Ottimizzazione della supply chain, controllo qualità e analisi della produzione in tempo reale",
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description: "Analisi del comportamento clienti, inventory management e ottimizzazione delle vendite",
    },
    {
      icon: Landmark,
      title: "Banking & Finance",
      description: "Risk management, fraud detection e reportistica regolamentare avanzata",
    },
    {
      icon: Activity,
      title: "Pharma & Healthcare",
      description: "Analisi dei dati clinici, supply chain farmaceutica e compliance normativa",
    },
    {
      icon: Building2,
      title: "Pubblica Amministrazione",
      description: "Digitalizzazione, trasparenza amministrativa e supporto decisionale per enti pubblici",
    },
    {
      icon: Briefcase,
      title: "Servizi & Consulenza",
      description: "Business intelligence per società di servizi, studi professionali e consulenza",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-foreground">I Nostri Clienti</h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto text-pretty leading-relaxed">
              Lavoriamo con aziende di diverse dimensioni e settori, offrendo soluzioni personalizzate di Business
              Intelligence e Data Analytics per ogni esigenza.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {clientTypes.map((clientType) => (
              <Card
                key={clientType.title}
                className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <clientType.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-3 text-foreground">{clientType.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 leading-relaxed">{clientType.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted/50 border border-border rounded-xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Perché ci scelgono</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">20+</div>
                  <p className="text-foreground/80">Anni di esperienza</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">150+</div>
                  <p className="text-foreground/80">Progetti completati</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <p className="text-foreground/80">Clienti soddisfatti</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
