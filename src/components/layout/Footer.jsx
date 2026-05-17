const links = ["Home", "Stats", "Why Us", "Gallery", "Testimonials", "Contact"]

export default function Footer() {
  return (
    <footer  className="bg-zinc-950 border-t border-zinc-800 py-12 px-5">
      <div className="max-w-5xl mx-auto">
        <TopRow />
        <Divider />
        <BottomRow />
      </div>
    </footer>
  )
}

function TopRow() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
      <Logo />
      <FooterLinks />
    </div>
  )
}

function Logo() {
  return (
    <div>
      <span className="font-black text-2xl tracking-widest uppercase text-white">
        IRON<span className="text-red-700">X</span>
      </span>
      <p className="text-zinc-500 text-xs mt-2 max-w-xs leading-relaxed">
        Pushing limits since 2012. Your transformation starts here.
      </p>
    </div>
  )
}

function FooterLinks() {
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-3 list-none">
      {links.map((l) => (
        <li key={l}>
          <a href="/" className="text-xs tracking-widest uppercase text-zinc-500 hover:text-red-700 transition-colors duration-300">
            {l}
          </a>
        </li>
      ))}
    </ul>
  )
}

function Divider() {
  return <div className="border-t border-zinc-800 mb-8" />
}

function BottomRow() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-zinc-600 text-xs tracking-wide">
        © 2024 IronX. All rights reserved.
      </p>
      <p className="text-zinc-600 text-xs tracking-wide">
        Built with ❤️ for fitness lovers
      </p>
    </div>
  )
}