import ProjectServicesV3 from '@/components/projectpage-03/ProjectServicesV3'
import CtaV2 from '@/components/shared/CtaV2'
import LayoutOne from '@/components/shared/LayoutOne'

export const metadata = {
  title: 'Projelerimiz',
  description: 'Niche Project Agency - Full Hizmet Reklam ve Tasarım Ajansı',
  keywords:
    'Niche Project Agency, Reklam Ajansı, Tasarım Ajansı, Dijital Pazarlama, Web Tasarım, Sosyal Medya Yönetimi, Sakarya Reklam Ajansı, Marka Stratejisi, SEO, İçerik Pazarlama, Grafik Tasarım, Video Prodüksiyon',
}

const CaseStudy = () => {
  return (
    <LayoutOne>
      <ProjectServicesV3 />
      <CtaV2 />
    </LayoutOne>
  )
}

export default CaseStudy
