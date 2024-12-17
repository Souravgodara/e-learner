import React from 'react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from './ThemeToogle'

export default function Navbar() {
  return (
    <nav className='flex justify-between py-3'>
      <div className='text-3xl font-bold'>
        E<span className='font-sans text-primary'>Learner</span>
      </div>
      <div className='flex gap-4'>
        <ThemeToggle />
        <Button className='text-base' size={'lg'} variant={'ghost'}>
          Sign Up
        </Button>
        <Button className='p-5  text-base' size={'lg'}>
          Log In
        </Button>
      </div>
    </nav>
  )
}
