'use client'

import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { TrustStats } from '@/components/sections/TrustStats'
import { AboutSection } from '@/components/sections/AboutSection'
import { ServicesMenu } from '@/components/sections/ServicesMenu'
import { SignatureService } from '@/components/sections/SignatureService'
import { BeforeAfter } from '@/components/sections/BeforeAfter'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Gallery } from '@/components/sections/Gallery'
import { Testimonials } from '@/components/sections/Testimonials'
import { WhyUs } from '@/components/sections/WhyUs'
import { StylistProfiles } from '@/components/sections/StylistProfiles'
import { HygieneSafety } from '@/components/sections/HygieneSafety'
import { SalonAmbiance } from '@/components/sections/SalonAmbiance'
import { BookYourLook } from '@/components/sections/BookYourLook'
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
        <BeforeAfter />
        <HowItWorks />
        <Gallery />
        <Testimonials />
        <WhyUs />
        <StylistProfiles />
        <HygieneSafety />
        <SalonAmbiance />
        <BookYourLook />
        <InstagramTeaser />
        <FAQ />
        <LocationHours />
        <FinalCTA />
      </main>
      <Footer />
    </SmoothScrollProvider>
  )
}
