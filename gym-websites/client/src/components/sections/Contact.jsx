export default function Contact() {
  return (
    <section id="Contact" className="bg-zinc-900 py-20 px-5">
      <div className="max-w-2xl mx-auto">
        <SectionHeader />
        <ContactForm />
      </div>
    </section>
  )
}

function SectionHeader() {
  return (
    <div className="text-center mb-14">
      <p className="text-red-700 text-xs tracking-[4px] uppercase font-bold mb-3">Get In Touch</p>
      <h2 className="font-black text-4xl md:text-5xl uppercase text-white leading-tight">
        Contact <span className="text-red-700">Us</span>
      </h2>
    </div>
  )
}

function ContactForm() {
  return (
    <form className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Your Name"
        className="bg-zinc-950 border border-zinc-800 text-white text-sm px-5 py-4 placeholder:text-zinc-600 focus:outline-none focus:border-red-700 transition-colors duration-300"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="bg-zinc-950 border border-zinc-800 text-white text-sm px-5 py-4 placeholder:text-zinc-600 focus:outline-none focus:border-red-700 transition-colors duration-300"
      />
      <input
        type="tel"
        placeholder="Your Phone"
        className="bg-zinc-950 border border-zinc-800 text-white text-sm px-5 py-4 placeholder:text-zinc-600 focus:outline-none focus:border-red-700 transition-colors duration-300"
      />
      <textarea
        rows={4}
        placeholder="Your Message"
        className="bg-zinc-950 border border-zinc-800 text-white text-sm px-5 py-4 placeholder:text-zinc-600 focus:outline-none focus:border-red-700 transition-colors duration-300 resize-none"
      />
      <button className="bg-red-700 text-white font-bold text-sm tracking-widest uppercase py-4 rounded-md transition-all duration-300 hover:bg-zinc-950 hover:text-white mt-2">
        Send Message
      </button>
    </form>
  )
}