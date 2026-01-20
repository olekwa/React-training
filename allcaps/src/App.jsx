import About from "./components/About"
import Contact from "./components/Contact"
import FAQ from "./components/Faq"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import OurTeam from "./components/OurTeam"
import Price from "./components/Price"
import Services from "./components/Service"
import Slider from "./components/Slider"
import Strategy from "./components/Strategy"
import Testimonial from "./components/Testimonial"
import BackToTop from "./components/BackToTop"

function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Strategy />
      <Slider />
      <Services />
      <OurTeam />
      <Testimonial />
      <Price />
      <Contact />
      <FAQ/>
      <Footer/>
      <BackToTop />
    </>
  )
}

export default App
