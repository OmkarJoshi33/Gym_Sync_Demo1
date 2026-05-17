import { motion } from "framer-motion"
import { Dumbbell, UserCheck, Clock, TrendingUp } from "lucide-react"
import { useScrollReveal } from "/workspaces/Gym_Sync_Demo1/gym-websites/client/src/hooks/useScrollReveal.js"

const reasons = [
  {
    number: "01",
    icon: Dumbbell,
    title: "State of Art Equipment",
    desc: "Top-tier machines and free weights from the world's leading brands, maintained and updated regularly.",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Expert Trainers",
    desc: "Certified professionals who design personalized programs to match your exact fitness goals.",
  },
  {
    number: "03",
    icon: Clock,
    title: "Flexible Timings",
    desc: "Open 7 days a week with early morning and late night slots to fit your busy schedule.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Proven Results",
    desc: "Over 3000 members have transformed their bodies and lives training with us.",
  },
]

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative py-20 px-5"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-zinc-950/80" />
      <div className="relative z-10 max-w-5xl mx-auto">
        <SectionHeader />
        <CardsGrid />
      </div>
    </section>
  )
}

function SectionHeader() {
  const { ref, inView } = useScrollReveal({ margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      className="text-center mb-14"
    >
      <p className="text-red-700 text-xs tracking-[4px] uppercase font-bold mb-3">Why Us</p>
      <h2 className="font-black text-4xl md:text-5xl uppercase text-white leading-tight">
        Why Choose <span className="text-red-700">IronX</span>
      </h2>
    </motion.div>
  )
}

function CardsGrid() {
  const { ref, inView } = useScrollReveal({ margin: "-60px" })

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {reasons.map((reason, i) => (
        <ReasonCard key={reason.title} {...reason} index={i} inView={inView} />
      ))}
    </div>
  )
}

function ReasonCard({ number, icon: Icon, title, desc, index, inView }) {
  const isRight = index % 2 !== 0

  // on mobile (single column) slide up, on desktop slide from sides
  const initial = {
    opacity: 0,
    x: typeof window !== "undefined" && window.innerWidth < 768 ? 0 : isRight ? 80 : -80,
    y: typeof window !== "undefined" && window.innerWidth < 768 ? 40 : 0,
  }

  return (
    <motion.div
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
        delay: index * 0.12,
      }}
      className="group relative border border-zinc-800 border-l-4 border-l-zinc-800 hover:border-zinc-700 hover:border-l-red-700 bg-zinc-950/60 hover:bg-zinc-900/80 p-8 transition-all duration-300 cursor-default overflow-hidden"
    >
      {/* Background number — styled via index.css .card-number */}
      <span
        className="card-number text-zinc-800 group-hover:text-zinc-700 transition-colors duration-300"
        aria-hidden="true"
      >
        {number}
      </span>

      {/* Icon container */}
      <div className="relative z-10 mb-5 inline-flex items-center justify-center w-12 h-12 border border-zinc-700 group-hover:border-red-700 group-hover:bg-red-700/10 transition-all duration-300">
        <Icon
          size={22}
          className="text-zinc-400 group-hover:text-red-500 transition-colors duration-300"
          strokeWidth={1.5}
        />
      </div>

      {/* Text */}
      <h3 className="relative z-10 font-black text-lg uppercase text-white tracking-wide mb-3 group-hover:text-red-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="relative z-10 text-zinc-400 text-sm leading-relaxed">
        {desc}
      </p>
    </motion.div>
  )
}