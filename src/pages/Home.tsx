import BorderCrossingShowcase from '../components/BorderCrossingShowcase';
import AboutUsSection from '../components/sections/AboutUsSection';
import CommitmentSection from '../components/sections/CommitmentSection';
import CertificationsSection from '../components/sections/CertificationsSection';

export default function Home() {
  return (
    <>
      <BorderCrossingShowcase />
      <CommitmentSection />
      <AboutUsSection />
    <CertificationsSection />
    </>
  );
}

