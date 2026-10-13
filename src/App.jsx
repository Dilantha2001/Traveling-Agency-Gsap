import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
import Preloader from './components/layout/Preloader';
import Navbar from './components/layout/Navbar';
import Hero from './features/hero/Hero';
import About from './features/about/About';
import AboutNevio from './features/aboutNevio/AboutNevio';
import OurStory from './features/ourStory/OurStory';
import Destinations from './features/destinations/Destinations';
import Testimonials from './features/testimonials/Testimonials';
import WhyChooseUs from './features/whyChooseUs/WhyChooseUs';
import Team from './features/team/Team';
import Contact from './features/contact/Contact';
import Gallery from './features/gallery/Gallery';
import Faq from './features/faq/Faq';
import VideoSection from './features/video/VideoSection';
import Footer from './components/layout/Footer';

function App() {
  const [isPreloading, setIsPreloading] = useState(true);

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    ScrollTrigger.config({ 
      ignoreMobileResize: true,
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize"
    });

    // Premium silky smooth Lenis configuration
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential ease-out for instant response + smooth glide
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0, // Natural 1:1 wheel sensitivity
      touchMultiplier: 1.5,
      infinite: false,
    });
    window.lenis = lenis;

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  const handlePreloaderComplete = () => {
    setIsPreloading(false);
    document.body.style.overflow = '';
    if (window.lenis) {
      window.lenis.start();
    }
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  };



  return (
    <>
      {isPreloading && <Preloader onComplete={handlePreloaderComplete} />}
      <Navbar />
      <Hero />
      <About />
      <AboutNevio />
      <OurStory />
      <Destinations />
      <Gallery />
      <Testimonials />
      <WhyChooseUs />
      <Team />
      <Contact />
      <Faq />
      <VideoSection />
      <Footer />
    </>
  );
}

export default App;
