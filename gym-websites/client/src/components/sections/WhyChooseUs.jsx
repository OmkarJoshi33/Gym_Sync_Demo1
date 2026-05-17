const reasons = [
  { icon: "🏋️", title: "State of Art Equipment", desc: "Top-tier machines and free weights from the world's leading brands, maintained and updated regularly." },
  { icon: "👊", title: "Expert Trainers", desc: "Certified professionals who design personalized programs to match your exact fitness goals." },
  { icon: "⏰", title: "Flexible Timings", desc: "Open 7 days a week with early morning and late night slots to fit your busy schedule." },
  { icon: "📈", title: "Proven Results", desc: "Over 3000 members have transformed their bodies and lives training with us." },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-zinc-950 py-20 px-5">
      <div className="max-w-5xl mx-auto">
        <SectionHeader />
        <CardsGrid />
      </div>
    </section>
  )
}

function SectionHeader() {
  return (
    <div className="text-center mb-14">
      <p className="text-red-700 text-xs tracking-[4px] uppercase font-bold mb-3">Why Us</p>
      <h2 className="font-black text-4xl md:text-5xl uppercase text-white leading-tight">
        Why Choose <span className="text-red-700">IronX</span>
      </h2>
    </div>
  )
}

function CardsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {reasons.map(({ icon, title, desc }) => (
        <ReasonCard key={title} icon={icon} title={title} desc={desc} />
      ))}
    </div>
  )
}

function ReasonCard({ icon, title, desc }) {
  return (
    <div className="group border border-zinc-800 p-8 hover:border-red-700 transition-all duration-300 cursor-default">
      <span className="text-3xl mb-4 block">{icon}</span>
      <h3 className="font-black text-lg uppercase text-white tracking-wide mb-3 group-hover:text-red-700 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
    </div>
  )
}