import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      {/* Les autres sections seront ajoutées ici */}
      <div id="services" className="h-screen bg-gray-900 flex items-center justify-center">
        <h2 className="text-4xl text-white">Services Section - À venir</h2>
      </div>
      <div id="portfolio" className="h-screen bg-gray-800 flex items-center justify-center">
        <h2 className="text-4xl text-white">Portfolio Section - À venir</h2>
      </div>
      <div id="about" className="h-screen bg-gray-900 flex items-center justify-center">
        <h2 className="text-4xl text-white">About Section - À venir</h2>
      </div>
      <ContactForm />
    </>
  );
}
