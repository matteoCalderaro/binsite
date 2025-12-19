import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section id="contatti" className="py-24 px-4 lg:px-8 bg-primary/5">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-foreground">
            Pronto a trasformare il tuo business con i dati?
          </h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Contattaci per scoprire come possiamo aiutarti a ottimizzare l'analisi dei dati e prendere decisioni più
            intelligenti.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
              Contattaci
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Scopri i nostri servizi
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
