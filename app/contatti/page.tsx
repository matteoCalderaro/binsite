import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail } from "lucide-react"

export const metadata = {
  title: "Contatti | BI Network",
  description: "Contatta BI Network per informazioni su servizi, prodotti e soluzioni di Business Intelligence",
}

export default function ContattiPage() {
  const offices = [
    {
      type: "Sede Operativa",
      address: "Piazza Maestri del Lavoro 4",
      city: "20063 Cernusco sul Naviglio (MI)",
    },
    {
      type: "Regional Office",
      address: "Via San Cristoforo 6",
      city: "38062 Arco (TN)",
    },
    {
      type: "Regional Office",
      address: "Via Isaac Newton",
      city: "50018 Scandicci (FI)",
    },
    {
      type: "Sede Legale",
      address: "Via Monache 6",
      city: "38062 Arco (TN)",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-foreground">Contattaci</h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto text-pretty leading-relaxed">
              Hai una domanda o desideri maggiori informazioni sui nostri servizi? Compila il form o contattaci
              direttamente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Invia un Messaggio</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nome e Cognome</Label>
                    <Input id="name" placeholder="Mario Rossi" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="mario.rossi@example.com" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefono</Label>
                    <Input id="phone" type="tel" placeholder="+39 123 456 7890" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="message">Messaggio</Label>
                    <Textarea id="message" placeholder="Descrivi la tua richiesta..." className="mt-1 min-h-32" />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Invia Richiesta
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Telefono</h3>
                      <p className="text-foreground/70">+39 02 92100118</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-foreground/70">info@binetwork.it</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Le Nostre Sedi
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {offices.map((office, index) => (
                    <div key={index} className="pb-4 border-b border-border last:border-0 last:pb-0">
                      <p className="font-semibold text-foreground text-sm mb-1">{office.type}</p>
                      <p className="text-foreground/70 text-sm">{office.address}</p>
                      <p className="text-foreground/70 text-sm">{office.city}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
