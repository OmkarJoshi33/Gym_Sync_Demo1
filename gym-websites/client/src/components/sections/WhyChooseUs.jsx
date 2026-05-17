import { motion } from "framer-motion"
import { Dumbbell, UserCheck, Clock, TrendingUp } from "lucide-react"
import { useScrollReveal } from "../../hooks/useScrollReveal"

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

const cardVariants = {
  hiddenLeft:  { opacity: 0, x: -120 },
  hiddenRight: { opacity: 0, x:  120 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.14,
    },
  }),
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="why-us-bg relative py-20 px-5">
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
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
        <ReasonCard
          key={reason.title}
          {...reason}
          index={i}
          inView={inView}
          isRight={i % 2 !== 0}
        />
      ))}
    </div>
  )
}

function ReasonCard({ number, icon: Icon, title, desc, index, inView, isRight }) {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial={isRight ? "hiddenRight" : "hiddenLeft"}
      animate={inView ? "visible" : (isRight ? "hiddenRight" : "hiddenLeft")}
      className="group relative border border-zinc-800 border-l-4 border-l-zinc-800 hover:border-zinc-700 hover:border-l-red-700 bg-zinc-950/60 hover:bg-zinc-900/80 p-8 transition-all duration-300 cursor-default overflow-hidden"
    >
      <span
        className="card-number text-zinc-800 group-hover:text-zinc-700 transition-colors duration-300"
        aria-hidden="true"
      >
        {number}
      </span>

      <div className="relative z-10 mb-5 inline-flex items-center justify-center w-12 h-12 border border-zinc-700 group-hover:border-red-700 group-hover:bg-red-700/10 transition-all duration-300">
        <Icon
          size={22}
          className="text-zinc-400 group-hover:text-red-500 transition-colors duration-300"
          strokeWidth={1.5}
        />
      </div>

      <h3 className="relative z-10 font-black text-lg uppercase text-white tracking-wide mb-3 group-hover:text-red-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="relative z-10 text-zinc-400 text-sm leading-relaxed">
        {desc}
      </p>
    </motion.div>
  )
}