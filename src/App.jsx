import './App.css'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import AwesomeFeature from './components/AwesomeFeature'
import Download from './components/Download'
import FunFacts from './components/FunFacts'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ScreenShots from './components/ScreenShots'
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import FrequentlyAsked from './components/FrequentlyAsked';
import Contact from './components/Contact';
import { ToggleTheme } from './components/ToggleTheme';



function App() {

  return (
    <>
      <div className="container-fluid">
        <div className="aviso">
          <div className="content">
              <div>Conoce todo sobre React</div>
              <a href="https://es.react.dev/" target="_blank" rel="noreferrer" className='ml-1'>Más información</a>
          </div>
        </div>
      </div>
      <Navbar />
      <Home />
      {/* falta arreglar el carousel  */}
      <AwesomeFeature />
      <FunFacts />
      <ScreenShots />
      <Download />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FrequentlyAsked />
      <Contact />
      <Footer />
      <ToggleTheme />

    </>
  )
}

export default App
