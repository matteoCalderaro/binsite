import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <Image src="/logo.svg" alt="BI Network - We Love Data" width={160} height={50} className="h-10 w-auto" />
            </Link>
            <p className="text-sm text-foreground/70 leading-relaxed max-w-md">
              Società di consulenza specializzata in Business Intelligence e Advanced Analytics. Aiutiamo le aziende a
              trasformare i dati in valore.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Servizi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#servizi" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Data Governance
                </Link>
              </li>
              <li>
                <Link href="#servizi" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  BI & Analytics
                </Link>
              </li>
              <li>
                <Link href="#servizi" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Advanced Analytics
                </Link>
              </li>
              <li>
                <Link href="#prodotti" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Prodotti
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Azienda</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="#clienti" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Clienti
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Carriere
                </Link>
              </li>
              <li>
                <Link href="#contatti" className="text-sm text-foreground/70 hover:text-primary transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60">© 2025 BI Network. Tutti i diritti riservati.</p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">
              Termini di Servizio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
