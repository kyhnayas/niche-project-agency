import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import AwardItem from './AwardItem'

const awards = [
  { year: '2018', title: 'Veri Odaklı Yaratıcılık Ödülü', organization: 'AMIL', achievement: 'Gold Winner' },
  {
    year: '2015',
    title: 'Marka Canlandırma ve Pazar Liderliği Ödülü',
    organization: 'SMFC',
    achievement: 'Gold Winner',
  },
  {
    year: '2013',
    title: 'Aile bağları fotoğraf yarışması',
    organization: 'Sakarya Belediyesi',
    achievement: 'Üçüncülük',
  },
  { year: '2012', title: 'Dijital Entegrasyon Mükemmellik Ödülü', organization: 'GDAI', achievement: 'Silver' },
]

const AwardsV2 = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container mb-8 flex flex-col gap-x-8 gap-y-4 md:mb-20 lg:flex-row lg:justify-between">
        <div>
          <RevealWrapper className="rv-badge">
            <span className="rv-badge-text">Tasarımda Mükemmellik</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mt-3 lg:mt-5">Tanınma ve Başarılar</h2>
          </TextAppearAnimation>
        </div>
        <TextAppearAnimation>
          <p className="text-appear max-w-[470px] lg:self-end">
            Olağanüstü 360 derece stratejimiz ve yaratıcı tasarım anlayışımız, dünya çapında tanınırlık ve sektör
            ödülleri kazandırdı.
          </p>
        </TextAppearAnimation>
      </div>

      <RevealWrapper className="divide-y-[1px] dark:divide-dark dark:last:border-dark max-md:last:border-b [&>*:first-child]:border-t dark:[&>*:first-child]:border-dark">
        {awards.map((award) => (
          <AwardItem key={award.year} {...award} />
        ))}
      </RevealWrapper>
    </section>
  )
}

export default AwardsV2
