'use client'

import AboutIntro from '../../components/AboutIntro'
import Services from '../../components/Services'
import Testimonials from '../../components/Testimonials'

export default function AboutPage() {
  return (
    <div className="flex flex-col md:flex-row bg-[#0f172a] text-white min-h-screen px-6 py-10 gap-6"> 
      <div className="w-full flex flex-col gap-8">
        <AboutIntro />
        <Services />
        <Testimonials />
      </div>
    </div>
  )
}
