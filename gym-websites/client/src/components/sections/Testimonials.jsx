const testimonials = [
  { name: "Rahul Sharma", role: "Member since 2021", review: "IronX completely transformed my lifestyle. The trainers are incredibly supportive and the equipment is world class.", rating: 5 },
  { name: "Priya Patel", role: "Member since 2022", review: "Best gym I have ever been to. The atmosphere is motivating and the staff genuinely cares about your progress.", rating: 5 },
  { name: "Arjun Mehta", role: "Member since 2020", review: "I have tried many gyms but nothing comes close to IronX. Flexible timings and amazing community.", rating: 5 },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-zinc-950 py-20 px-5">
      <div className="max-w-5xl mx-auto">
        <SectionHeader />
        <TestimonialsGrid />
      </div>
    </section>
  )
}

function SectionHeader() {
  return (
    <div className="text-center mb-14">
      <p className="text-red-700 text-xs tracking-[4px] uppercase font-bold mb-3">Members Say</p>
      <h2 className="font-black text-4xl md:text-5xl uppercase text-white leading-tight">
        Happy <span className="text-red-700">Members</span>
      </h2>
    </div>
  )
}

function TestimonialsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map(({ name, role, review, rating }) => (
        <TestimonialCard key={name} name={name} role={role} review={review} rating={rating} />
      ))}
    </div>
  )
}

function TestimonialCard({ name, role, review, rating }) {
  return (
    <div className="border border-zinc-800 p-8 hover:border-red-700 transition-all duration-300">
      <Stars rating={rating} />
      <p className="text-zinc-400 text-sm leading-relaxed mt-4 mb-6">"{review}"</p>
      <div>
        <p className="text-white font-bold text-sm uppercase tracking-wide">{name}</p>
        <p className="text-red-700 text-xs tracking-widest uppercase mt-1">{role}</p>
      </div>
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