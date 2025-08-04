import BorderCrossingShowcase from '../components/BorderCrossingShowcase';
import AboutUsSection from '../components/sections/AboutUsSection';
import CommitmentSection from '../components/sections/CommitmentSection';
import CertificationsSection from '../components/sections/CertificationsSection';
import ServiceAreasSection from '../components/sections/ServiceAreasSection';
import ServicesSection from '../components/sections/ServicesSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <BorderCrossingShowcase />
      <CommitmentSection />
      <AboutUsSection />
      <CertificationsSection />
      <ServiceAreasSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}

