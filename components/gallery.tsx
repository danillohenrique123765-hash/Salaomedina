"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const categories = ["Todos", "Cabelo", "Rosto", "Unhas"]

const galleryImages = [
  // Cabelos
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salaomedina_659670774_18455823352106724_3216945745440224785_n-wjxxUhbmfeaEMXcqxxiJAHN9PHPfMj.jpg",
    alt: "Cabelo liso brilhante",
    category: "Cabelo",
    size: "large",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salaomedina_639503771_18448310551106724_3444825461455138872_n-DGhvpREEdZT7reVOxHHBH0QTU5o1zc.jpg",
    alt: "Coloração ruiva",
    category: "Cabelo",
    size: "small",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salaomedina_671121044_18458102473106724_532679045932744246_n-Mlv4wWmjUrMzEV6rkdMf6G8tUo38JK.jpg",
    alt: "Loiro platinado",
    category: "Cabelo",
    size: "small",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salaomedina_628933303_18446772136106724_6248786534068525133_n-tyOxcJsksjW6vF65eiW5FCbIe71HSD.jpg",
    alt: "Cabelo em camadas",
    category: "Cabelo",
    size: "large",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salaomedina_658747455_18455822032106724_88891908053919751_n-M5CWjKHPeX2tXxkpN96kCITNmxYSfX.jpg",
    alt: "Corte médio",
    category: "Cabelo",
    size: "small",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salaomedina_652742045_18452522053106724_7452502683516094531_n-eidi8q775dZ3uQvqcej1W8hfGWRTq0.jpg",
    alt: "Tranças com acessórios",
    category: "Cabelo",
    size: "small",
  },
  // Rosto
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salaomedina_611657446_18439162912106724_6551044705033383219_n-SenZZmg7zeBJoGLbNVFF0vkGIccfPr.jpg",
    alt: "Lash lifting e sobrancelhas",
    category: "Rosto",
    size: "large",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salaomedina_611900384_18439163113106724_8239498853275829041_n-nGtqm2GuMpQYgK3rPkYSSzVgBfxD7m.jpg",
    alt: "Design de sobrancelhas",
    category: "Rosto",
    size: "small",
  },
  // Unhas
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salaomedina_627621514_18445865026106724_2439064767609206178_n-Rk2o4ksdc4w1ejk14r3b0t6lyZSnjM.jpg",
    alt: "Esmaltação rosa",
    category: "Unhas",
    size: "small",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salaomedina_627666135_18444604696106724_5705692766850107959_n-omQborozce2htTIOQ93B2Q1nQCJNJr.jpg",
    alt: "Esmaltação vermelha",
    category: "Unhas",
    size: "large",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salaomedina_587955855_18436624927106724_7503635389351631865_n-7Y5TBftRcZEkuOqrITERyFrpLiwTp8.jpg",
    alt: "Nail art com detalhes",
    category: "Unhas",
    size: "small",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salaomedina_670649025_18458294950106724_5260979987386306517_n-GpFrqN53uKlO7Z2KkaZvLAoRtXry4V.jpg",
    alt: "Esmaltação vinho",
    category: "Unhas",
    size: "small",
  },
]

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredImages =
    activeCategory === "Todos"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <section id="trabalhos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm uppercase tracking-[0.3em] mb-4 block">
            Portfólio
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            Nosso Trabalho
          </h2>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm uppercase tracking-wider transition-all duration-300 border ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="break-inside-avoid group relative overflow-hidden rounded-sm cursor-pointer"
              >
                <div
                  className={`relative ${
                    image.size === "large" ? "h-[400px]" : "h-[280px]"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                    <span className="text-primary text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {image.category}
                    </span>
                    <span className="text-foreground font-serif text-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {image.alt}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
