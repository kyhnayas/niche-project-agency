import ContactForm from '@/components/contactpage/ContactForm'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'

export const metadata = {
  title: 'iletişim',
}

const ContactPage = () => {
  return (
    <LayoutOne>
      <PageHero
        title="Birlikte Çalışalım"
        badgeTitle="iletişim"
        description="Hedef kitlenize ulaşmak ve projelerinizi hayata geçirmek için doğru stratejilerle destek alabilirsiniz. Bizimle iletişime geçin, birlikte büyüyelim."
        scale
        spacing="pt-[130px] md:pt-[180px] pb-20 sm:pb-32 md:pb-36 lg:pb-36 xl:pb-[100px] relative overflow-hidden"
      />
      <ContactForm />
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

export default ContactPage
