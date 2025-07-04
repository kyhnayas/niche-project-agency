import Benefits from '@/components/careerpage/Benefits'
import CareerHero from '@/components/careerpage/CareerHero'
import CompanyGallery from '@/components/careerpage/CompanyGallery'
import Jobs from '@/components/careerpage/Jobs'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'

export const metadata = {
  title: 'CareerPage',
}

const CareerPage = () => {
  return (
    <LayoutOne>
      <CareerHero />
      <CompanyGallery />
      <Benefits />
      <Jobs />
      <CTA>
        Hadi beraber
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/01.jpg' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/03.jpg' },
          ]}
        />
        Sohbet edelim.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">Sanal bir kahve ?</i>
      </CTA>
    </LayoutOne>
  )
}

export default CareerPage
