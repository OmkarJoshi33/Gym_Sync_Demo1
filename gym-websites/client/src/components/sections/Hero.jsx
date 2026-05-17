import { useTypingEffect } from "../../hooks/useTypingEffect"

const BG_IMAGE = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"

export default function Hero() {
  const line1 = useTypingEffect("PUSH YOUR", 80, true, 9000)
  const line2 = useTypingEffect("LIMITS", 80, true, 9000)

  return (
    <section id="home" className="relative min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-5 overflow-hidden text-center">

      <HeroBg />
      <GridOverlay />
      <AccentBar />

      <div className="relative z-10 h-6 flex items-center justify-center mb-2">
        <p className="flex items-center gap-2 text-red-700 text-xs tracking-[4px] uppercase font-bold">
          <span className="block w-7 h-0.5 bg-red-700" />
          No. 1 Gym in the city
          <span className="block w-7 h-0.5 bg-red-700" />
        </p>
      </div>

      <div className="relative z-10 h-[clamp(10rem,42vw,20rem)] flex flex-col items-center justify-center mb-2">
        <h1 className="font-black text-[clamp(3.2rem,14vw,6.5rem)] leading-[0.88] uppercase text-zinc-50">
          {line1}
          <em className="text-red-700 not-italic block">{line2}</em>
        </h1>
      </div>

      <div className="relative z-10 h-16 flex items-center justify-center mb-2">
        <p className="font-light text-base text-zinc-400 max-w-sm leading-relaxed">
          Train harder. Live stronger. Join a community built for{" "}
          <span className="text-zinc-200 font-normal">real results</span> — not excuses.
        </p>
      </div>

      <div className="relative z-10 h-12 flex items-center justify-center">
        <button className="bg-red-700 text-zinc-50 font-bold  rounded-md text-sm tracking-widest uppercase px-10 py-3.5 transition-all duration-300 hover:bg-red-800 hover:text-white cursor-pointer">
          Contact Us
        </button>
      </div>

    </section>
  )
}

function HeroBg() {
  return (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      />
      <div className="absolute inset-0 bg-zinc-950/80" />
    </>
  )
}

function GridOverlay() {
  return (
    <div className="absolute inset-0 [background-image:repeating-linear-gradient(90deg,transparent,transparent_80px,rgba(255,255,255,0.015)_80px,rgba(255,255,255,0.015)_81px),repeating-linear-gradient(0deg,transparent,transparent_80px,rgba(255,255,255,0.015)_80px,rgba(255,255,255,0.015)_81px)]" />
  )
}

function AccentBar() {
  return (
    <div className="absolute top-0 right-0 w-1 h-full bg-red-700 opacity-60" />
  )
}