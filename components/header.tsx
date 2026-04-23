"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const LOGO_URL = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/472275748_1635798993715407_1745080535341430746_n-M910ESJWuuWIVT2BJnaM8Cu85wMmGh.jpg"

const navItems = [
  { href: "#servicos", label: "Serviços" },
  { href: "#trabalhos", label: "Trabalhos" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden">
              <Image
                src={LOGO_URL}
                alt="Salão Medina"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-serif text-xl lg:text-2xl font-bold text-primary hidden sm:block">
              Salão Medina
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm uppercase tracking-wider"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contato"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-sm text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors duration-300"
            >
              Agendar
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm uppercase tracking-wider py-2"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contato"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-sm text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors duration-300 text-center mt-2"
              >
                Agendar Horário
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
