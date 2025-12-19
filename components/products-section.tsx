import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, PlayCircle, FileText, Briefcase } from "lucide-react"

export function ProductsSection() {
  const products = [
    {
      icon: Mail,
      title: "BIMAIL",
      description: "Soluzione per l'invio automatico di report e dashboard via email, con pianificazione intelligente",
    },
    {
      icon: PlayCircle,
      title: "BIPLAY",
      description: "Piattaforma per la distribuzione e fruizione interattiva di contenuti analitici",
    },
    {
      icon: FileText,
      title: "BIREPORT",
      description: "Sistema avanzato per la generazione e gestione di reportistica aziendale personalizzata",
    },
    {
      icon: Briefcase,
      title: "Tool Partner",
      description: "Qlik, Power BI, Talend e altre soluzioni enterprise integrate nei nostri progetti",
    },
  ]

  return (
    <section id="prodotti" className="py-24 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground">PRODOTTI</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Utilizziamo nelle nostre attività principalmente tool di terze parti, tuttavia la nostra esperienza sul
            campo ci ha permesso di sviluppare prodotti stand alone e add-on utilizzati con reciproca soddisfazione da
            numerosi clienti.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon
            return (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-3 text-foreground">{product.title}</CardTitle>
                  <CardDescription className="text-foreground/70 leading-relaxed text-sm">
                    {product.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
