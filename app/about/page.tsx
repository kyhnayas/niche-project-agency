import AwardsV2 from '@/components/aboutpage/AwardsV2'
import Team from '@/components/aboutpage/Team'
import About from '@/components/shared/About'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import Marquee from '@/components/shared/Marquee'
import PageHero from '@/components/shared/PageHero'
import Video from '@/components/shared/Video'

export const metadata = {
  title: 'Hakkımızda',
}

const AboutPage = () => {
  return (
    <LayoutOne>
      <PageHero
        badgeTitle="Hakkımızda"
        title="360° Çözüm"
        italicTitle=" Ajansı"
        description="Yenilikçi fikirlerden uygulamaya kadar tüm pazarlama ve tasarım ihtiyaçlarınız için Niche Project Agency yanınızda."
      />
      <Video />
      <About />
      <Team />
      <Marquee withBorder={true} />
      <AwardsV2 />
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

export default AboutPage
