import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"

export const metadata = {
  title: "News | BI Network",
  description: "Ultime novità, aggiornamenti e articoli dal mondo della Business Intelligence e Data Analytics",
}

export default function NewsPage() {
  const newsItems = [
    {
      date: "15 Gennaio 2024",
      title: "BI Network annuncia nuove partnership strategiche",
      excerpt:
        "Siamo orgogliosi di annunciare l'espansione delle nostre partnership con i principali vendor di soluzioni BI e Analytics...",
    },
    {
      date: "10 Dicembre 2023",
      title: "Nuova release di BIMAIL 3.0",
      excerpt: "Disponibile la nuova versione di BIMAIL con funzionalità avanzate di scheduling e personalizzazione...",
    },
    {
      date: "5 Novembre 2023",
      title: "Evento: Data Innovation Summit 2024",
      excerpt:
        "BI Network sarà presente al Data Innovation Summit come sponsor e relatore sul tema dell'AI applicata alla Business Intelligence...",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-foreground">News & Aggiornamenti</h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto text-pretty leading-relaxed">
              Rimani aggiornato sulle ultime novità di BI Network e sul mondo della Business Intelligence
            </p>
          </div>

          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-foreground/60 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{item.date}</span>
                  </div>
                  <CardTitle className="text-2xl text-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70 leading-relaxed">{item.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-foreground/60">Più articoli in arrivo...</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
