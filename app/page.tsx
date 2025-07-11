import AboutV8 from '@/components/homepage-10/AboutV8'
import Awards from '@/components/homepage-10/Awards'
import HeroV10 from '@/components/homepage-10/HeroV10'
import ServiceAgencyProjects from '@/components/homepage-10/ServiceAgencyProjects'
import ClientsV3 from '@/components/shared/ClientsV3'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import ServicesV8 from '@/components/shared/ServicesV8'

export const metadata = {
  title: 'Niche Project Agency ',
}

const homepage10 = () => {
  return (
    <LayoutOne>
      <HeroV10 />
      <AboutV8 />
      <ServiceAgencyProjects />
      <ClientsV3 />
      <ServicesV8 />
      <Awards />
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

export default homepage10
