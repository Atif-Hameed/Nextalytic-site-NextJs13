import About from '@/app/components/about/page'
import CaseStudies from '@/app/components/caseStudies/page'
import Embark from '@/app/components/embark/page'
import Footer from '@/app/components/footer/page'
import Hero from '@/app/components/hero/page'
import Modalities from '@/app/components/modalities/page'
import Services from '@/app/components/services/page'
import Testimonials from '@/app/components/testimonials/page'
import React from 'react'

export default function Home() {
  return (
    <>
      <Hero/>
      <Services/>
      <About/>
      <CaseStudies/>
      <Modalities/>
      <Testimonials/>
      <Embark/>
      <Footer/>
    </>
  )
}
