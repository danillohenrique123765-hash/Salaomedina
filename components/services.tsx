"use client"

import { motion } from "framer-motion"
import { Scissors, Sparkles, Hand } from "lucide-react"

const serviceCategories = [
  {
    title: "Cabelo",
    icon: Scissors,
    services: [
      "Luzes",
      "Hidratação",
      "Botox Capilar",
      "Selagem",
      "Coloração",
      "Escova",
      "Tranças Comum",
      "Tranças Nagô",
      "Soltura de Cachos",
      "Morena Iluminada",
      "Finalização",
    ],
  },
  {
    title: "Rosto",
    icon: Sparkles,
    services: [
      "Limpeza de Pele",
      "Dermaplaning",
      "Extensão de Cílios",
      "Designer de Sobrancelha",
      "Spa Labial",
    ],
  },
  {
    title: "Unhas",
    icon: Hand,
    services: [
      "Banho de Luz",
      "Spa dos Pés",
      "Esmaltação Comum",
      "Esmaltação em Gel",
      "Unhas Postiças",
      "Manicure Completa",
      "Pedicure Completa",
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-[0.3em] mb-4 block">
            O Que Oferecemos
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            Nossos Serviços
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {serviceCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-card p-8 rounded-sm border border-border hover:border-primary/50 transition-colors duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-sm group-hover:bg-primary/20 transition-colors duration-300">
                  <category.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.services.map((service) => (
                  <li
                    key={service}
                    className="text-muted-foreground flex items-center gap-3 group/item"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    <span className="group-hover/item:text-primary transition-colors duration-300">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
