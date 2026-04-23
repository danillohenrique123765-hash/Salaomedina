"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react"

const services = [
  "Luzes",
  "Hidratação",
  "Botox Capilar",
  "Selagem",
  "Coloração",
  "Escova",
  "Tranças",
  "Soltura de Cachos",
  "Morena Iluminada",
  "Finalização",
  "Limpeza de Pele",
  "Dermaplaning",
  "Extensão de Cílios",
  "Designer de Sobrancelha",
  "Spa Labial",
  "Banho de Luz",
  "Spa dos Pés",
  "Esmaltação",
  "Unhas Postiças",
  "Manicure/Pedicure",
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    time: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappMessage = `Olá, gostaria de agendar um horário:

Nome: ${formData.name}
Telefone: ${formData.phone}
Serviço: ${formData.service}
Horário: ${formData.time}`

    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/5565981364775?text=${encodedMessage}`, "_blank")
  }

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.3em] mb-4 block">
            Fale Conosco
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            Agende Seu Horário
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-foreground text-sm uppercase tracking-wider mb-2"
                >
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-card border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                  placeholder="Seu nome completo"
                />
              </div>

              {/* Telefone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-foreground text-sm uppercase tracking-wider mb-2"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-card border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                  placeholder="(00) 00000-0000"
                />
              </div>

              {/* Tipo de Serviço */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-foreground text-sm uppercase tracking-wider mb-2"
                >
                  Tipo de Serviço
                </label>
                <select
                  id="service"
                  required
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full bg-card border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                >
                  <option value="">Selecione um serviço</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Horário Desejado */}
              <div>
                <label
                  htmlFor="time"
                  className="block text-foreground text-sm uppercase tracking-wider mb-2"
                >
                  Horário que Deseja Agendar
                </label>
                <input
                  type="time"
                  id="time"
                  required
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                  className="w-full bg-card border border-border rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors duration-300"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 text-sm uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Enviar via WhatsApp
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-card p-8 rounded-sm border border-border">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    Endereço
                  </h3>
                  <p className="text-muted-foreground">
                    R. Frei Salvador, 273<br />
                    Cristo Rei - Várzea Grande - MT
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    Horário de Funcionamento
                  </h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 9h às 19h<br />
                    Sábado: 9h às 17h
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    Telefone
                  </h3>
                  <p className="text-muted-foreground">
                    (65) 98136-4775
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-sm border border-border">
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                Redes Sociais
              </h3>
              <div className="flex gap-4">
  <a
    href="https://instagram.com/salaomedina"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
    aria-label="Instagram"
  >
    <Instagram className="w-6 h-6" />
  </a>
  <a
    href="https://facebook.com/salaomedina"
    target="_blank"
    rel="noopener noreferrer"
    className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
    aria-label="Facebook"
  >
    <Facebook className="w-6 h-6" />
  </a>
</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
      }
