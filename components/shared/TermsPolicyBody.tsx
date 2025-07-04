import { TermsDataType } from '@/app/terms/page'
import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import RevealWrapper from '../animation/RevealWrapper'

interface PropsTypes {
  termsData: TermsDataType[]
  heading?: boolean
}
const TermsPolicyBody: FC<PropsTypes> = ({ termsData, heading = false }) => {
  return (
    <section className="relative overflow-hidden pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        {!heading ? (
          <RevealWrapper>
            <h2 className="mb-5 text-xl sm:text-[25px] md:mb-10 md:text-4xl md:leading-[1.5]">
              Gizliliğiniz Niche Project Agency için çok önemlidir. Bu Gizlilik Politikası, www.nicheprojectagency.com
              web sitemizi ziyaret ettiğinizde ve tam hizmet reklamcılık ajansı olarak sunduğumuz hizmetleri
              kullandığınızda kişisel bilgilerinizi nasıl topladığımızı, kullandığımızı, ifşa ettiğimizi ve koruduğumuzu
              açıklar. Lütfen bu politikayı dikkatlice okuyarak kişisel verilerinizle ilgili uygulamalarımızı eksiksiz
              bir şekilde anlayın.
            </h2>
          </RevealWrapper>
        ) : (
          <RevealWrapper>
            <h2 className="mb-5 text-[25px] md:mb-10 md:text-4xl md:leading-[1.5]">
              Gizliliğiniz Niche Project Agency için çok önemlidir. Bu Gizlilik Politikası, www.nicheprojectagency.com
              web sitemizi ziyaret ettiğinizde ve tam hizmet reklamcılık ajansı olarak sunduğumuz hizmetleri
              kullandığınızda kişisel bilgilerinizi nasıl topladığımızı, kullandığımızı, ifşa ettiğimizi ve koruduğumuzu
              açıklar. Lütfen bu politikayı dikkatlice okuyarak kişisel verilerinizle ilgili uygulamalarımızı eksiksiz
              bir şekilde anlayın.
            </h2>
          </RevealWrapper>
        )}

        <div className="blog-details-body">
          {termsData.map((terms) => (
            <RevealWrapper key={terms.slug}>
              <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{terms.content}</ReactMarkdown>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TermsPolicyBody
