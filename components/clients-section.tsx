import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, TrendingUp } from "lucide-react"

export function ClientsSection() {
  return (
    <section id="clienti" className="py-24 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground">CLIENTI</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Abbiamo esperienza in multinazionali con le tipiche logiche di queste grandi aziende ma ci sentiamo
            ugualmente a nostro agio nel dinamismo delle piccole aziende familiari, che operano in mercati e settori
            eterogenei.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl mb-4 text-foreground">Enterprise</CardTitle>
              <CardDescription className="text-foreground/70 leading-relaxed text-sm">
                Multinazionali e grandi gruppi con esigenze complesse di governance e analytics su scala globale
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl mb-4 text-foreground">PMI</CardTitle>
              <CardDescription className="text-foreground/70 leading-relaxed text-sm">
                Piccole e medie imprese familiari che necessitano di soluzioni agili e su misura per competere
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl mb-4 text-foreground">Settori Eterogenei</CardTitle>
              <CardDescription className="text-foreground/70 leading-relaxed text-sm">
                Esperienza cross-industry in retail, manufacturing, finance, healthcare e molti altri settori
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Non vediamo l'ora di fare grandi cose con te, ovunque nel mondo
          </h3>
        </div>
      </div>
    </section>
  )
}
