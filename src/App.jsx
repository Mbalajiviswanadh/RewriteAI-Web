import { useSmoothScroll } from './hooks/useSmoothScroll'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import HowItWorks from './sections/HowItWorks'
import Features from './sections/Features'
import Demo from './sections/Demo'
import Apps from './sections/Apps'
import Privacy from './sections/Privacy'
import Download from './sections/Download'

export default function App() {
  useSmoothScroll()
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Demo />
        <Apps />
        <Privacy />
        <Download />
      </main>
      <Footer />
    </>
  )
}
