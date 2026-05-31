'use client'

import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { TrustStats } from '@/components/sections/TrustStats'
import { AboutSection } from '@/components/sections/AboutSection'
import { ServicesMenu } from '@/components/sections/ServicesMenu'
import { SignatureService } from '@/components/sections/SignatureService'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Gallery } from '@/components/sections/Gallery'
import { Testimonials } from '@/components/sections/Testimonials'
import { WhyUs } from '@/components/sections/WhyUs'
import { HygieneSafety } from '@/components/sections/HygieneSafety'
import { InstagramTeaser } from '@/components/sections/InstagramTeaser'
import { FAQ } from '@/components/sections/FAQ'
import { LocationHours } from '@/components/sections/LocationHours'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Footer } from '@/components/sections/Footer'
import { SmoothScrollProvider } from '@/components/primitives/SmoothScrollProvider'
import { CursorFollower } from '@/components/primitives/CursorFollower'
import { GrainOverlay } from '@/components/primitives/GrainOverlay'

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <CursorFollower />
      <GrainOverlay />
      <Header />
      <main>
        <Hero />
        <TrustStats />
        <AboutSection />
        <ServicesMenu />
        <SignatureService />
        <HowItWorks />
        <Gallery />
        <Testimonials />
        <WhyUs />
        <HygieneSafety />
        <InstagramTeaser />
        <FAQ />
        <LocationHours />
        <FinalCTA />
      </main>
      <Footer />
    </SmoothScrollProvider>
  )
}
