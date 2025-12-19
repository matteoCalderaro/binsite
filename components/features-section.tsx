import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
  const areas = [
    {
      title: "Data Governance",
      subtitle: "Cos'è?",
      description:
        "È tutto quanto riguarda la organizzazione e la gestione dei tuoi dati a fini analitici per prendere decisioni. Può riguardare l'integrazione di dati da varie fonti, la costruzione o l'utilizzo di un DataWarehouse, la messa a punto di un Data Lake.",
      benefit: "Cosa ottieni?",
      benefitText:
        "Una migliore organizzazione dei tuoi dati, la mappatura delle fonti, l'uso di nomenclature di business, la documentazione del processo, il dizionario dati.",
    },
    {
      title: "BI & Analytics",
      subtitle: "Cos'è?",
      description:
        "Sono tutte le attività di analisi e di studio dei propri dati al fine di identificare relazioni non evidenti e non note. Sono propedeutiche allo sviluppo di dashboard ed alla condivisione delle informazioni.",
      benefit: "Cosa ottieni?",
      benefitText:
        "Indicazione sui migliori tool da utilizzare in base alla tua realtà aziendale, condivisione di altre esperienze da cui prendere spunto, introduzione di strumenti di self service dei dati.",
    },
    {
      title: "Advanced Analytics",
      subtitle: "Cos'è?",
      description:
        "Gli Analytics classici permettono di analizzare e monitorare il business a consuntivo. Percorsi di Predictive e ML supportano le aziende nell'anticipare l'esigenza di domani.",
      benefit: "Cosa ottieni?",
      benefitText:
        "Un percorso stile laboratorio in cui co-investire e sperimentare, è infatti un percorso di crescita che porta l'azienda ad una nuova consapevolezza analitica.",
    },
  ]

  const reasons = [
    "Sviluppare Dashboard efficaci orientate al tipo di utenti",
    "Accelerare il time to value",
    "Garantire controllo al centro e flessibilità in periferia",
    "Imparare a leggere quello che i dati ti possono dire",
    "Condividere e distribuire informazioni essenziali e mirate",
  ]

  return (
    <>
      <section className="py-24 px-4 lg:px-8 bg-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-foreground">Perché sceglierci?</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Rendere comprensibili i principi legati all'<strong>analisi dei tuoi dati aziendali</strong>, collegarli
              con le informazioni provenienti da IoT e da Internet, per condividerli con colleghi, clienti, fornitori e{" "}
              <strong>tradurli in maggiori profitti o minori costi</strong>.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Affiancarti passo dopo passo,{" "}
              <strong>aumentando efficacia e consapevolezza nell'utilizzo del grande patrimonio informativo</strong> che
              oggi abbiamo a disposizione nell'ecosistema globale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold mt-0.5">
                  {index + 1}
                </div>
                <span className="text-sm text-foreground/90 leading-relaxed">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="aree" className="py-24 px-4 lg:px-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance text-foreground">Le nostre aree</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <Card
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="text-2xl mb-4 text-primary">{area.title}</CardTitle>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-foreground mb-2">{area.subtitle}</p>
                      <CardDescription className="text-foreground/70 leading-relaxed text-sm">
                        {area.description}
                      </CardDescription>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">{area.benefit}</p>
                      <CardDescription className="text-foreground/70 leading-relaxed text-sm">
                        {area.benefitText}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
