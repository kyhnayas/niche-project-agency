import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import TermsPolicyBody from '@/components/shared/TermsPolicyBody'
import getMarkDownData from '@/utils/GetMarkDownData'

export const metadata = {
  title: 'Niche Project Agency Gizlilik Politikası',
}
export interface TermsDataType {
  slug: string
  content: string
  [key: string]: any
}

const termsData: TermsDataType[] = getMarkDownData('data/policy')

const FAQPage = () => {
  return (
    <LayoutOne>
      <PageHero title="Gizlilik & " italicTitle="Politikası" badgeTitle="Gizlilik" scale />
      <TermsPolicyBody termsData={termsData} heading={true} />
      <CTA>
        Hadi beraber
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/01.jpg' },
            { id: '2', img: '/images/agent/03.jpg' },
            { id: '3', img: '/images/agent/02.jpg' },
          ]}
        />
        Sohbet edelim.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">Sanal bir kahve ?</i>
      </CTA>
    </LayoutOne>
  )
}

export default FAQPage
