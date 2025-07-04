import React from 'react'
import SectionHeaderV2 from '../shared/SectionHeaderV2'
import RevealWrapper from '../animation/RevealWrapper'
const achievements = [
  { year: '2018', title: 'Veri Odaklı Yaratıcılık Ödülü', category: 'AMIL' },
  { year: '2015', title: 'Marka Canlandırma ve Pazar Liderliği Ödülü', category: 'SMFC' },
  { year: '2013', title: 'Aile bağları fotoğraf yarışması', category: 'Sakarya Belediyesi' },
  { year: '2012', title: 'Dijital Entegrasyon Mükemmellik Ödülü', category: 'GDAI' },
]

const Awards = () => {
  return (
    <section className="overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="-col container mb-10 flex justify-center gap-x-8 gap-y-2 max-md:items-start md:mb-20 md:flex-row md:items-center md:justify-between">
        <SectionHeaderV2
          headingTitle="Aldığımız"
          italicTitle="ödüller"
          description="  Hedef kitle odaklı içerikler üreterek, markaların hikayelerini etkili bir şekilde anlatıyoruz. "
        />
      </div>

      <RevealWrapper className="divide-y-[1px] dark:divide-dark dark:last:border-dark max-md:last:border-b sm:px-10 [&>*:first-child]:border-t dark:[&>*:first-child]:border-dark">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="group relative grid h-full grid-cols-12 items-center overflow-hidden px-5 py-10 text-left max-md:text-center">
            <div className="absolute left-0 top-0 h-full w-full origin-bottom scale-y-0 bg-secondary transition-transform duration-500 ease-in-out group-hover:origin-top group-hover:scale-y-100 dark:bg-primary/90"></div>
            <span className="relative z-20 col-span-2 justify-self-center font-instrument text-sm font-normal italic leading-[1.4] transition-colors duration-300 group-hover:text-white max-md:col-span-2 md:text-[19px]">
              {achievement.year}
            </span>
            <h3 className="relative z-20 col-span-8 text-xl transition-colors duration-300 group-hover:text-white max-md:col-span-7 md:text-3xl lg:text-5xl lg:leading-[1.2]">
              {achievement.title}
            </h3>
            <p className="relative z-20 col-span-2 text-base leading-[1.4] text-secondary transition-colors duration-300 group-hover:text-white dark:text-backgroundBody max-md:col-span-3">
              {achievement.category}
            </p>
          </div>
        ))}
      </RevealWrapper>
    </section>
  )
}

export default Awards
