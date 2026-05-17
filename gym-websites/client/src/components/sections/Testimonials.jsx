import { motion } from "framer-motion"
import { useScrollReveal } from "../../hooks/useScrollReveal"

const testimonials = [
  { name: "Rahul Sharma", role: "Member since 2021", review: "IronX completely transformed my lifestyle. The trainers are incredibly supportive and the equipment is world class.", rating: 5, initials: "RS" },
  { name: "Priya Patel", role: "Member since 2022", review: "Best gym I have ever been to. The atmosphere is motivating and the staff genuinely cares about your progress.", rating: 5, initials: "PP" },
  { name: "Arjun Mehta", role: "Member since 2020", review: "I have tried many gyms but nothing comes close to IronX. Flexible timings and amazing community.", rating: 5, initials: "AM" },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.15,
    },
  }),
}
export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-zinc-950 testimonials-bg py-20 px-5">
      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeader />
        <TestimonialsGrid />
      </div>
    </section>
  )
}

function GridOverlay() {
  return (
    <div className="absolute inset-0 [background-image:repeating-linear-gradient(90deg,transparent,transparent_80px,rgba(255,255,255,0.018)_80px,rgba(255,255,255,0.018)_81px),repeating-linear-gradient(0deg,transparent,transparent_80px,rgba(255,255,255,0.018)_80px,rgba(255,255,255,0.018)_81px)]" />
  )
}

function SectionHeader() {
  const { ref, inView } = useScrollReveal({ margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="text-center mb-14"
    >
      <p className="text-red-700 text-xs tracking-[4px] uppercase font-bold mb-3">Members Say</p>
      <h2 className="font-black text-4xl md:text-5xl uppercase text-white leading-tight">
        Happy <span className="text-red-700">Members</span>
      </h2>
    </motion.div>
  )
}

function TestimonialsGrid() {
  const { ref, inView } = useScrollReveal({ margin: "-60px" })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map(({ name, role, review, rating, initials }, i) => (
        <TestimonialCard
          key={name}
          name={name}
          role={role}
          review={review}
          rating={rating}
          initials={initials}
          index={i}
          inView={inView}
        />
      ))}
    </div>
  )
}

function TestimonialCard({ name, role, review, rating, initials, index, inView }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="border border-zinc-800 p-8 hover:border-red-700 transition-all duration-300 flex flex-col gap-4"
    >
      <Stars rating={rating} />
      <p className="text-zinc-400 text-sm leading-relaxed flex-1">
        "{review}"
      </p>
      <div className="flex items-center gap-4 pt-4 border-t border-zinc-800">
        <Avatar initials={initials} />
        <div>
          <p className="text-white font-bold text-sm uppercase tracking-wide">{name}</p>
          <p className="text-red-700 text-xs tracking-widest uppercase mt-1">{role}</p>
        </div>
      </div>
    </motion.div>
  )
}

function Avatar({ initials }) {
  return (
    <div className="w-11 h-11 rounded-full bg-red-700/20 border border-red-700/40 flex items-center justify-center shrink-0">
      <span className="text-red-500 font-black text-sm tracking-wider">{initials}</span>
    </div>
  )
}

function Stars({ rating }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} className="text-red-700 text-lg">★</span>
      ))}
    </div>
  )
}