import { useState } from "react"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Home", href: "#" },
  { label: "Stats", href: "#stats" },
  { label: "Why Us", href: "#why-us" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
]
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950 border-b border-red-700/25">

      <div className="flex items-center justify-between px-5 h-16">

        <Logo />

        <DesktopLinks />

        <button className="hidden md:block bg-red-700 text-white text-sm font-bold rounded-md tracking-widest uppercase px-5 py-2  transition-all duration-300 hover:bg-red-800 hover:text-white">
          Contact Now
        </button>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {isOpen && <MobileMenu />}

    </nav>
  )
}

function Logo() {
  return (
    <span className="font-black text-2xl tracking-widest uppercase text-white">
      IRON<span className="text-red-700">X</span>
    </span>
  )
}

function DesktopLinks() {
  return (
    <ul className="hidden md:flex items-center gap-7 list-none">
      {links.map((l) => (
        <li key={l}>
          <a href="/" className="text-xs tracking-widest uppercase text-white/50 hover:text-red-700 transition-colors">
            {l}
          </a>
        </li>
      ))}
    </ul>
  )
}

function MobileMenu() {
  return (
    <div className="md:hidden bg-zinc-900 border-t border-red-700/20 flex flex-col gap-4 px-5 py-5">
      {links.map((l) => (
        <a key={l} href="/" className="font-bold text-base tracking-widest uppercase text-white/70">
          {l}
        </a>
      ))}
      <button className="bg-red-700 text-white font-bold tracking-widest uppercase py-3 mt-1">
        Join Now
      </button>
    </div>
  )
}