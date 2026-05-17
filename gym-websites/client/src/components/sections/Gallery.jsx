const images = [
  { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80", alt: "Gym floor" },
  { url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80", alt: "Weight area" },
  { url: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80", alt: "Cardio zone" },
  { url: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80", alt: "Training area" },
  { url: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80", alt: "Dumbbells" },
  { url: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80", alt: "Workout session" },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-zinc-900 py-20 px-5">
      <div className="max-w-5xl mx-auto">
        <SectionHeader />
        <GalleryGrid />
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

function GalleryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {images.map(({ url, alt }) => (
        <GalleryItem key={alt} url={url} alt={alt} />
      ))}
    </div>
  )
}

function GalleryItem({ url, alt }) {
  return (
    <div className="relative overflow-hidden aspect-square group cursor-pointer">
      <img
        src={url}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-zinc-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  )
}