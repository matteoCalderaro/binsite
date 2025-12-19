import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Award, TrendingUp } from "lucide-react"

export const metadata = {
  title: "Chi Siamo | BI Network",
  description:
    "BI Network: 20 anni di esperienza in Business Intelligence, Data Analytics e soluzioni innovative per il successo delle imprese",
}

export default function ChiSiamoPage() {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "Trasformare i dati in valore attraverso soluzioni innovative di Business Intelligence",
    },
    {
      icon: Users,
      title: "Team",
      description: "Un team agile di professionisti con competenze tecniche avanzate e forte orientamento al cliente",
    },
    {
      icon: Award,
      title: "Esperienza",
      description: "Oltre 20 anni di esperienza nel settore della Business Intelligence e Data Analytics",
    },
    {
      icon: TrendingUp,
      title: "Crescita",
      description: "Costante innovazione e aggiornamento sulle ultime tecnologie e best practice del settore",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-foreground">Chi Siamo</h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto text-pretty leading-relaxed">
              Siamo un'agile società di consulenza con valori forti e ventennale esperienza nel campo della Business
              Intelligence e Data Analytics.
            </p>
          </div>

          <div className="prose prose-lg max-w-4xl mx-auto mb-16">
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4 text-foreground">La Nostra Storia</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                BI Network nasce dalla passione per i dati e dalla convinzione che ogni organizzazione possa trarre
                valore strategico dalle proprie informazioni. Con oltre 20 anni di esperienza, abbiamo accompagnato
                decine di aziende nel loro percorso di trasformazione digitale.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Il nostro approccio si basa su metodologie agili, competenze tecniche avanzate e una profonda
                comprensione delle esigenze di business. Gestiamo il dato partendo dalle fonti, passando per tutte le
                attività di integrazione, estrazione, trasformazione sino alla visualizzazione finale.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {values.map((value) => (
              <Card key={value.title} className="bg-card border-border">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-foreground">{value.title}</h3>
                      <p className="text-foreground/70 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted/50 border border-border rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">We Love Data!</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Questa è più di una frase: è il nostro DNA. Amiamo i dati perché sappiamo che contengono le risposte alle
              domande più importanti del business. La nostra missione è rendere queste risposte accessibili,
              comprensibili e utilizzabili per prendere decisioni migliori.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
