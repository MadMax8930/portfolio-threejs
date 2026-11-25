import { lazy, Suspense, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, TechStack, Projects } from './components';
import BackToTop from './components/BackToTop';

const StarsCanvas = lazy(() => import('./components/canvas/Stars'));

const App = () => {
  const [shouldMountContactCanvases, setShouldMountContactCanvases] = useState(
    () => typeof IntersectionObserver === 'undefined'
  );

  return (
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <a className="skip-link" href="#main-content">
            Skip to main content
          </a>
          <header>
            <Navbar />
          </header>
          <main id="main-content" tabIndex="-1">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Hero />
            </div>
            <About />
            <Experience />
            <TechStack />
            <Projects />
            <Feedbacks />
            <div className="relative z-0">
              <Contact onCanvasesApproach={setShouldMountContactCanvases} />
              {shouldMountContactCanvases && (
                <Suspense fallback={null}>
                  <StarsCanvas />
                </Suspense>
              )}
            </div>
          </main>
          <BackToTop />
        </div>
      </BrowserRouter>
  )
}

export default App
