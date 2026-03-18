import About from "./components/About";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ.Jsx";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";


export default function App() {
  return (
    <div className="">
     <Hero />
     <About/>
     <Services/>
     <CTA/>
     <FAQ />
     <Contact/>
     <Footer/>
    </div>
  )
}