const stats = [
  { num: "3000+", label: "Active Members" },
  { num: "50+", label: "Expert Trainers" },
  { num: "12+", label: "Years of Excellence" },
  { num: "20+", label: "Equipment Brands" },
]

export default function StatsBanner() {
  return (
    <section id="stats" className="bg-red-700 py-12 px-5">
      <div className="max-w-5xl mx-auto">
        <StatsGrid />
      </div>
    </section>
  )
}

function StatsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {stats.map(({ num, label }) => (
        <StatItem key={label} num={num} label={label} />
      ))}
    </div>
  )
}

function StatItem({ num, label }) {
  return (
    <div className="flex flex-col items-center text-center group cursor-default">
      <span className="font-black text-4xl md:text-5xl tracking-tight text-white transition-all duration-300 group-hover:text-zinc-950 group-hover:scale-110">
        {num}
      </span>
      <span className="text-xs tracking-widest uppercase text-white/70 mt-2 transition-colors duration-300 group-hover:text-zinc-950/70">
        {label}
      </span>
    </div>
  )
}