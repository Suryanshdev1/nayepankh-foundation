import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import MissionVision from './components/MissionVision';
import CoreValues from './components/CoreValues';
import Programs from './components/Programs';
import ImpactStats from './components/ImpactStats';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Volunteer from './components/Volunteer';
import Donation from './components/Donation';
import FAQ from './components/FAQ';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <CoreValues />
        <Programs />
        <ImpactStats />
        <Testimonials />
        <Gallery />
        <Volunteer />
        <Donation />
        <FAQ />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
