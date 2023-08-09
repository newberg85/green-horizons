import Image from 'next/image'
import Main from "@/components/Main/Main"
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 pb-0 ">
      <Header />
      <Main />
      <Footer />
    </main>
  )
}
