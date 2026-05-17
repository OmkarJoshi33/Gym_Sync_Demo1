import { motion } from "framer-motion"
import { Mail, User, MessageSquare } from "lucide-react"
import { useScrollReveal } from "../../hooks/useScrollReveal"

const fields = [
  { name: "name",    label: "Your Name",    type: "text",  icon: User,          placeholder: "John Doe" },
  { name: "email",   label: "Your Email",   type: "email", icon: Mail,          placeholder: "john@example.com" },
  { name: "message", label: "Your Message", type: "area",  icon: MessageSquare, placeholder: "Tell us about your fitness goals..." },
]

export default function Contact() {
  return (
    <section id="contact" className="relative bg-zinc-900 testimonials-bg1 py-20 px-5">
      <div className="relative z-10 max-w-2xl mx-auto">
        <SectionHeader />
        <ContactForm />
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
      <p className="text-red-700 text-xs tracking-[4px] uppercase font-bold mb-3">Get In Touch</p>
      <h2 className="font-black text-4xl md:text-5xl uppercase text-white leading-tight">
        Contact <span className="text-red-700">Us</span>
      </h2>
      <p className="text-zinc-400 text-sm mt-4 leading-relaxed">
        Ready to start your fitness journey? We'd love to hear from you.
      </p>
    </motion.div>
  )
}

function ContactForm() {
  const { ref, inView } = useScrollReveal({ margin: "-60px" })

  return (
    <motion.form
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className="flex flex-col gap-5"
      onSubmit={(e) => e.preventDefault()}
    >
      {fields.map(({ name, label, type, icon: Icon, placeholder }) =>
        type === "area" ? (
          <FormTextarea key={name} label={label} icon={Icon} placeholder={placeholder} />
        ) : (
          <FormInput key={name} label={label} type={type} icon={Icon} placeholder={placeholder} />
        )
      )}
      <SubmitButton />
    </motion.form>
  )
}

function FormInput({ label, type, icon: Icon, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs tracking-widest uppercase text-zinc-500 font-bold">{label}</label>
      <div className="relative">
        <Icon size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" strokeWidth={1.5} />
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm pl-11 pr-5 py-4 placeholder:text-zinc-600 focus:outline-none focus:border-red-700 transition-colors duration-300"
        />
      </div>
    </div>
  )
}

function FormTextarea({ label, icon: Icon, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs tracking-widest uppercase text-zinc-500 font-bold">{label}</label>
      <div className="relative">
        <Icon size={16} className="absolute left-4 top-5 text-zinc-600" strokeWidth={1.5} />
        <textarea
          rows={5}
          placeholder={placeholder}
          className="w-full bg-zinc-950 border border-zinc-800 text-white text-sm pl-11 pr-5 py-4 placeholder:text-zinc-600 focus:outline-none focus:border-red-700 transition-colors duration-300 resize-none"
        />
      </div>
    </div>
  )
}

function SubmitButton() {
  return (
    <button
      type="submit"
      className="bg-red-700 text-zinc-50 font-bold text-sm tracking-widest uppercase py-4 rounded-md transition-all duration-300 hover:bg-zinc-950 hover:text-white mt-2 border border-transparent hover:border-red-700"
    >
      Send Message
    </button>
  )
}