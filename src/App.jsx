import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, TechStack, Projects, StarsCanvas } from './components';
import BackToTop from './components/BackToTop';

const App = () => {

  return (
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <TechStack />
          <Projects />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <BackToTop />
        </div>
      </BrowserRouter>
  )
}

export default App
