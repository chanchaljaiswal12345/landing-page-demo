import Image from 'next/image'
import CustomLayout from './CustomLayout/CustomLayout'
import IntroSection from './Components/Landing Page/Main/IntroSection'
import CardSection from './Components/Landing Page/Main/CardSection'
import 'animate.css';
import Services from './Components/Landing Page/Main/Services';
import Works from './Components/Landing Page/Main/Works';
import About from './Components/Landing Page/Main/About';
import Testimonials from './Components/Landing Page/Main/Testimonials';
export default function Home() {
  return (
    <div>
     <CustomLayout>
      <main>
        <IntroSection/>
        <CardSection/>
        <Services/>
        <Works/>
        <About/>
        <Testimonials/>
      </main>
     </CustomLayout>
  </div>
  )
}
