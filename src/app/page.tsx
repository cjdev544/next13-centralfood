import About from '@/components/Home/About'
import Hero from '@/components/Home/Hero'
import HomePlates from '@/components/Home/HomePlates'
import HomeSeparator from '@/components/Home/HomeSeparator'
import Restaurants from '@/components/Home/Restaurants'
import SubscribeForm from '@/components/Home/SubscribeForm'

export default function Home() {
  return (
    <main>
      <Hero />
      <SubscribeForm />
      <HomePlates />
      <About />
      <HomeSeparator />
      <Restaurants />
    </main>
  )
}
