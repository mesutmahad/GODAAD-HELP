import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GetInvolvedSection } from "@/components/get-involved-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { UpcomingEventsSection } from "@/components/upcoming-events-section"
import { LanguageResources } from "@/components/language-resources"
import { CulturalHeritage } from "@/components/cultural-heritage"
import { EducationPrograms } from "@/components/education-programs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <EducationPrograms />
        <CulturalHeritage />
        <LanguageResources />
        <TestimonialsSection />
        <GetInvolvedSection />
        <UpcomingEventsSection />
        <NewsletterSection />
      </main>
      <SiteFooter />
    </div>
  )
}

