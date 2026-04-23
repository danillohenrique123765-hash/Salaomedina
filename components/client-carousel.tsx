"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const clientImages = [
  // Cabelos
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salaomedina_659670774_18455823352106724_3216945745440224785_n-wjxxUhbmfeaEMXcqxxiJAHN9PHPfMj.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salaomedina_639503771_18448310551106724_3444825461455138872_n-DGhvpREEdZT7reVOxHHBH0QTU5o1zc.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salaomedina_671121044_18458102473106724_532679045932744246_n-Mlv4wWmjUrMzEV6rkdMf6G8tUo38JK.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salaomedina_628933303_18446772136106724_6248786534068525133_n-tyOxcJsksjW6vF65eiW5FCbIe71HSD.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salaomedina_652742045_18452522053106724_7452502683516094531_n-eidi8q775dZ3uQvqcej1W8hfGWRTq0.jpg",
  // Rosto
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salaomedina_611657446_18439162912106724_6551044705033383219_n-SenZZmg7zeBJoGLbNVFF0vkGIccfPr.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salaomedina_611900384_18439163113106724_8239498853275829041_n-nGtqm2GuMpQYgK3rPkYSSzVgBfxD7m.jpg",
  // Unhas
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salaomedina_627621514_18445865026106724_2439064767609206178_n-Rk2o4ksdc4w1ejk14r3b0t6lyZSnjM.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salaomedina_627666135_18444604696106724_5705692766850107959_n-omQborozce2htTIOQ93B2Q1nQCJNJr.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salaomedina_587955855_18436624927106724_7503635389351631865_n-7Y5TBftRcZEkuOqrITERyFrpLiwTp8.jpg",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/salaomedina_670649025_18458294950106724_5260979987386306517_n-GpFrqN53uKlO7Z2KkaZvLAoRtXry4V.jpg",
]

export function ClientCarousel() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-primary text-sm uppercase tracking-[0.3em] mb-4 block">
            Nossas Clientes
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground">
            Catálogo de Clientes
          </h2>
        </motion.div>
      </div>

      {/* Infinite Scroll Carousel */}
      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -1200],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...clientImages, ...clientImages, ...clientImages].map((src, index) => (
            <div
              key={index}
              className="relative w-72 h-96 flex-shrink-0 rounded-sm overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Cliente ${(index % clientImages.length) + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
