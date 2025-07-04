import ServicesV14 from '@/components/homepage-10/ServicesV14'
import Process from '@/components/services-page/Process'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'

export const metadata = {
  title: 'Hizmetlerimiz ',
}

const ServicesPage = () => {
  return (
    <LayoutOne>
      <PageHero
        badgeTitle="Hizmetler"
        title="Hizmetler "
        italicTitle=""
        scale
        description="Size sunduğumuz hizmetler, işinizi büyütmek ve hedeflerinize ulaşmak için tasarlanmıştır. Her bir hizmetimiz, sektördeki en son trendleri ve teknolojileri kullanarak size en iyi sonuçları sunmayı amaçlar."
        spacing="max-md:pt-44 max-sm:pb-10 max-md:pb-16 md:py-44 lg:py-[200px] relative overflow-hidden"
      />
      <ServicesV14 />
      <Process />
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
      </CTA>{' '}
    </LayoutOne>
  )
}

export default ServicesPage
