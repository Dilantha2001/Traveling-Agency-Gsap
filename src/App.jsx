import { useEffect } from 'react';
import Lenis from 'lenis';
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
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.02, // Lower lerp makes the scroll feel much heavier/smoother (decreased from 0.05)
      wheelMultiplier: 0.5, // Reduces the scroll distance per wheel click (decreased from 0.8)
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
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
