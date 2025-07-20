import ContactForm from '@/components/contactpage/ContactForm'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'

export const metadata = {
  title: 'iletişim',
  description: 'Niche Project Agency - Full Hizmet Reklam ve Tasarım Ajansı',
  keywords:
    'Niche Project Agency, Reklam Ajansı, Tasarım Ajansı, Dijital Pazarlama, Web Tasarım, Sosyal Medya Yönetimi, Sakarya Reklam Ajansı, Marka Stratejisi, SEO, İçerik Pazarlama, Grafik Tasarım, Video Prodüksiyon',
}

const ContactPage = () => {
  return (
    <LayoutOne>
      <PageHero
        title="Birlikte Çalışalım"
        badgeTitle="İletişim"
        description="Hayallerinizi gerçeğe dönüştürmek, markanıza değer katmak için doğru yerdesiniz. Gelin, projenizin her aşamasında yanınızda olalım ve dijital dünyada birlikte fark yaratalım!"
        scale
        spacing="pt-[130px] md:pt-[180px] pb-20 sm:pb-32 md:pb-36 lg:pb-36 xl:pb-[100px] relative overflow-hidden"
      />
      <ContactForm />
    </LayoutOne>
  )
}

export default ContactPage
