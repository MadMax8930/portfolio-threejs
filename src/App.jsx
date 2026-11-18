import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, TechStack, Projects, StarsCanvas } from './components';
import BackToTop from './components/BackToTop';

const App = () => {

  return (
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <main id="main-content">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <header>
                <Navbar />
              </header>
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
          </main>
          <BackToTop />
        </div>
      </BrowserRouter>
  )
}

export default App
