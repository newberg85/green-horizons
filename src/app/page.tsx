"use client"

import Image from 'next/image'
import Main from "@/components/Main/Main"
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import { useEffect } from 'react'

export default function Home() {
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2 sm:p-24 sm:pb-0 pb-0 ">
      <Header />
      <Main />
      <Footer />
    </main>
  )
}
