import BorderCrossingShowcase from '../components/BorderCrossingShowcase';
import AboutUsSection from '../components/sections/AboutUsSection';
import CommitmentSection from '../components/sections/CommitmentSection';
import CertificationsSection from '../components/sections/CertificationsSection';
import ServiceAreasSection from '../components/sections/ServiceAreasSection';
import ServicesSection from '../components/sections/ServicesSection';
import ContactSection from '../components/sections/ContactSection';
import RevealOnScroll from '../components/RevealOnScroll';

export default function Home() {
  return (
    <>
      <BorderCrossingShowcase />

      <RevealOnScroll>
        <CommitmentSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <AboutUsSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <CertificationsSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <ServicesSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <ServiceAreasSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <ContactSection />
      </RevealOnScroll>
    </>
  );
}
