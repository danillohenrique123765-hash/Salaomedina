"use client"

import { motion } from "framer-motion"
import { Scissors, Sparkles, Heart } from "lucide-react"

export function About() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative element instead of photo */}
            <div className="relative h-[500px] rounded-sm overflow-hidden bg-card flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20" />
              <div className="relative z-10 text-center p-8">
                <div className="w-32 h-32 mx-auto mb-8 rounded-full border-2 border-primary/30 flex items-center justify-center">
                  <Sparkles className="w-16 h-16 text-primary" />
                </div>
                <h3 className="font-serif text-3xl text-foreground mb-4">Beleza & Estilo</h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  Transformando a autoestima de cada cliente com dedicação e profissionalismo
                </p>
              </div>
              {/* Decorative icons */}
              <Scissors className="absolute top-8 right-8 w-8 h-8 text-primary/20" />
              <Heart className="absolute bottom-8 left-8 w-8 h-8 text-primary/20" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-sm -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/30 rounded-sm -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-sm uppercase tracking-[0.3em] mb-4 block">
              Sobre Nós
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6">
              O Salão Medina
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              O Salão Medina é sinônimo de excelência em beleza e estética. Com uma 
              equipe qualificada e comprometida, nos dedicamos a realçar a beleza 
              única de cada cliente.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Nosso espaço foi pensado para proporcionar uma experiência agradável 
              e relaxante. Utilizamos produtos de qualidade e técnicas atualizadas 
              para garantir os melhores resultados em cabelos, unhas e estética facial.
            </p>
            
            {/* Features instead of stats */}
            <div className="grid gap-4">
              <div className="flex items-center gap-4 p-4 bg-card rounded-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Scissors className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Profissionais Qualificados</h4>
                  <p className="text-sm text-muted-foreground">Equipe especializada em beleza</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-card rounded-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Produtos de Qualidade</h4>
                  <p className="text-sm text-muted-foreground">Materiais premium para melhores resultados</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-card rounded-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Atendimento Personalizado</h4>
                  <p className="text-sm text-muted-foreground">Cuidado especial com cada cliente</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
