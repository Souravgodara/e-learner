import CTA from '@/components/CTA'
import FeatureCards from '@/components/FeatureCard'
import FeaturedCourses from '@/components/FeaturedCourses'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PremiumLearningCard from '@/components/PremiumCard'
import TeamSection from '@/components/TeamMember'
import TestimonialsSection from '@/components/Testimonial'
import { Button } from '@/components/ui/button'
import React from 'react'
import { FaPlayCircle } from 'react-icons/fa'

export default function page() {
  return (
    <>
      <main>
        <Navbar />
        <h1 className='mt-28 scroll-m-20 text-center text-4xl font-bold tracking-tight lg:text-8xl'>
          <p>Explore and maximize your </p>
          <p className='mt-3 text-primary'>learning potential</p>
        </h1>
        <div className='flex justify-center'>
          <p className='mt-10 w-3/4 text-center text-2xl opacity-60'>
            Knowledge and a commitment to continuous learning, you have the
            power to achieve greatness
          </p>
        </div>
        <div className='mt-10 flex justify-center gap-4'>
          <Button className='rounded-full py-6 text-base' size={'lg'}>
            Join Course
          </Button>
          <Button
            size={'lg'}
            className='gap-1 rounded-full px-6 py-6'
            variant={'outline'}
          >
            <FaPlayCircle size={20} />
            Watch Demo
          </Button>
        </div>
        <FeatureCards />
        <TeamSection/>
        <PremiumLearningCard />
        <FeaturedCourses/>
        <TestimonialsSection />
        <CTA />
<Footer/>
      </main>
    </>
  )
}
