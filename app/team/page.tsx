import Team from '@/components/aboutpage/Team'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'

const TeamPage = () => {
  return (
    <LayoutOne>
      <PageHero
        title="Yaratıcı "
        italicTitle="Ekibimiz"
        badgeTitle="Ekip"
        description="Ekibimiz, farklı geçmişlere sahip profesyonellerden oluşuyor. Her biri, kendi alanında uzmanlaşmış ve sektördeki en son trendleri takip eden tutkulu bireylerdir. Birlikte, yenilikçi çözümler sunmak ve mükemmel müşteri deneyimleri sağlamak için çalışıyoruz."
        scale
        spacing="pt-32 md:pt-36 lg:pt-[180px] pb-10 sm:pb-14 md:pb-20 lg:pb-24 2xl:pb-[120px] overflow-hidden relative"
      />
      <Team />
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

export default TeamPage
