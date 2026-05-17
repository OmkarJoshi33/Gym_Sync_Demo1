import Navbar from "../components/layout/Navbar"
import Hero from "../components/sections/Hero"
import StatsBanner from "../components/sections/StatsBanner"
import WhyChooseUs from "../components/sections/WhyChooseUs"
import Gallery from "../components/sections/Gallery"
import Testimonials from "../components/sections/Testimonials"
import Contact from "../components/sections/Contact"
import Footer from "../components/layout/Footer"

export default function Home() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <Navbar />
      <Hero />
      <StatsBanner />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Contact />
      
    </div>
  )
}