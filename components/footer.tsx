  import Link from "next/link"
import { Instagram, Facebook, MapPin, Clock, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="font-serif text-3xl font-bold text-primary">
              Salão Medina
            </Link>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Transformando beleza em arte desde 2014. Seu destino de luxo para 
              cuidados com cabelo, rosto e unhas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-foreground mb-4">
              Links Rápidos
            </h4>
            <nav className="space-y-3">
              <Link
                href="#servicos"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Serviços
              </Link>
              <Link
                href="#trabalhos"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Nosso Trabalho
              </Link>
              <Link
                href="#depoimentos"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Depoimentos
              </Link>
              <Link
                href="#contato"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Contato
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold text-foreground mb-4">
              Informações
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  R. Frei Salvador, 273<br />
                  Cristo Rei - Várzea Grande - MT
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Seg - Sex: 9h às 19h<br />
                  Sábado: 9h às 17h
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">
                  (65) 98136-4775
                </span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-lg font-bold text-foreground mb-4">
              Siga-nos
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/salaomedina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-sm text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/salaomedina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-sm text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Salão Medina. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
