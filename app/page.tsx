// app/page.tsx
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/landing/hero-section";
import FeatureSection from "@/components/landing/feature-section";
import StatsSection from "@/components/landing/stats-section";
import HowItWorks from "@/components/landing/how-it-works";
import PopularTests from "@/components/landing/popular-tests";
import TestimonialSection from "@/components/landing/testimonial-section";
import CtaSection from "@/components/landing/cta-section";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <StatsSection />
      <HowItWorks />
      <PopularTests />
      <TestimonialSection />
      <CtaSection />
      <Footer />
    </main>
  );
}