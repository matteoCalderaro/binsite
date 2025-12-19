import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="BI Network - We Love Data" width={180} height={60} className="h-12 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/chi-siamo"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Chi Siamo
            </Link>
            <Link
              href="/servizi"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Servizi
            </Link>
            <Link
              href="/prodotti"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Prodotti
            </Link>
            <Link
              href="/clienti"
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Clienti
            </Link>
            <Link href="/news" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              News
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button size="sm" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contatti">Contattaci</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
