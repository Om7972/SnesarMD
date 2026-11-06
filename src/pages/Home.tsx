import { useEffect } from 'react';
import Hero from '@/components/home/Hero';
import CompanyIntro from '@/components/home/CompanyIntro';
import IndustryVerticals from '@/components/home/IndustryVerticals';
import EngineeringCapabilities from '@/components/home/EngineeringCapabilities';
import InnovationTech from '@/components/home/InnovationTech';
import FeaturedSolutions from '@/components/home/FeaturedSolutions';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import CaseStudiesPreview from '@/components/home/CaseStudiesPreview';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  useEffect(() => {
    document.title = 'Snesar.MD — Engineering Innovation Across Industries';
  }, []);

  return (
    <main>
      <Hero />
      <CompanyIntro />
      <IndustryVerticals />
      <EngineeringCapabilities />
      <InnovationTech />
      <FeaturedSolutions />
      <WhyChooseUs />
      <CaseStudiesPreview />
      <CTASection />
    </main>
  );
}
