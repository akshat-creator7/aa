import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import InteractiveShowcase from '../components/InteractiveShowcase';
import About from '../components/About';
import AppointmentForm from '../components/AppointmentForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <AppointmentForm />
      </main>
      <Footer />
    </div>
  );
}
