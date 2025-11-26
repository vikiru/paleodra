import FeaturesSection from '@/components/landing/FeaturesSection';
import StatsSection from '@/components/landing/StatsSection';
import HeroSection from '@/components/landing/HeroSection';
import CTASection from '@/components/landing/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-oklch(var(--background)) text-oklch(var(--text))">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
