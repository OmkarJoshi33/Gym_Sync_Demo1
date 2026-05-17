import { useEffect, useRef } from "react"
import { useSwipeGallery } from "/workspaces/Gym_Sync_Demo1/gym-websites/client/src/hooks/useSwipeGallery.js"

const images = [
  { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", alt: "Gym floor"       },
  { url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80", alt: "Weight area"     },
  { url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80", alt: "Cardio zone"     },
  { url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80", alt: "Training area"   },
  { url: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80", alt: "Dumbbells"       },
  { url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80", alt: "Workout session" },
]

// position each card relative to active index
// slot: -2  -1   0   1   2
// slot 0 = active (front, zoomed)
// negative = left side, positive = right side
const SLOT_CONFIG = {
  "-2": { x: "-200%", scale: 0.65, opacity: 0.3,  rotateY:  35, z: 0  },
  "-1": { x: "-110%", scale: 0.80, opacity: 0.65, rotateY:  25, z: 5  },
   "0": { x: "0%",    scale: 1.08, opacity: 1,    rotateY:  0,  z: 10 },
   "1": { x: "110%",  scale: 0.80, opacity: 0.65, rotateY: -25, z: 5  },
   "2": { x: "200%",  scale: 0.65, opacity: 0.3,  rotateY: -35, z: 0  },
}

function getSlot(index, current, total) {
  let slot = index - current
  // wrap around for circular effect
  if (slot > total / 2)  slot -= total
  if (slot < -total / 2) slot += total
  return slot
}

export default function Gallery() {
  return (
    <section id="gallery" className="bg-zinc-900 py-20 px-5 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <SectionHeader />
        <CoverflowGallery />
      </div>
    </section>
  )
}

function SectionHeader() {
  return (
    <div className="text-center mb-14">
      <p className="text-red-700 text-xs tracking-[4px] uppercase font-bold mb-3">Our Facility</p>
      <h2 className="font-black text-4xl md:text-5xl uppercase text-white leading-tight">
        Inside <span className="text-red-700">IronX</span>
      </h2>
    </div>
  )
}

function CoverflowGallery() {
  const { current, dragX, animating, isDragging, handlers, touchMoveHandler } =
    useSwipeGallery(images.length)

  const stageRef = useRef(null)

  useEffect(() => {
    const el = stageRef.current
    if (!el) return
    el.addEventListener("touchmove", touchMoveHandler, { passive: false })
    return () => el.removeEventListener("touchmove", touchMoveHandler)
  }, [touchMoveHandler])

  const stageClass = `gallery-stage${isDragging.current ? " dragging" : ""}`

  return (
    <div className="flex flex-col items-center gap-10">
      <div ref={stageRef} className={stageClass} {...handlers}>
        {images.map((img, index) => {
          const slot   = getSlot(index, current, images.length)
          const config = SLOT_CONFIG[String(slot)]

          // only render slots -2 to 2, hide the rest
          if (!config) return null

          // apply live drag offset only to active card
          const liveX    = slot === 0 && isDragging.current ? dragX : 0
          const isActive = slot === 0

          return (
            <GalleryCard
              key={img.alt}
              img={img}
              config={config}
              liveX={liveX}
              isActive={isActive}
              animate={!isDragging.current || !isActive}
            />
          )
        })}
      </div>
      <p className="text-xs tracking-[3px] uppercase text-zinc-600">← swipe →</p>
    </div>
  )
}

function GalleryCard({ img, config, liveX, isActive, animate }) {
  const { x, scale, opacity, rotateY, z } = config

  const transition = animate
    ? "transform 0.5s cubic-bezier(0.33,1,0.68,1), opacity 0.4s ease"
    : "none"

  const overlayOpacity = isActive ? 0 : 1 - opacity

  return (
    <div
      className="gallery-card absolute rounded-2xl overflow-hidden border-2 border-zinc-800"
      style={{
        transform: `translateX(calc(${x} + ${liveX}px)) scale(${scale}) rotateY(${rotateY}deg)`,
        opacity,
        zIndex:    z,
        transition,
      }}
    >
      <img
        src={img.url}
        alt={img.alt}
        className="w-full h-full object-cover block pointer-events-none"
        draggable={false}
      />
      <div
        className="absolute inset-0"
        style={{ background: `rgba(10,10,10,${overlayOpacity})` }}
      />
    </div>
  )
}