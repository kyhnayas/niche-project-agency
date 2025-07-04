'use client'

import useReveal from '@/hooks/useReveal'
import React from 'react'

interface SpacePropsType {
  littleSpace?: boolean
}

const AboutV5: React.FC<SpacePropsType> = ({ littleSpace }) => {
  const { revealRef } = useReveal()

  return !littleSpace ? (
    <section className="overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <h3 ref={revealRef} className="overflow-hidden">
          Niche Project Agency'de yenilikçi fikirleriniz, işlevsel tasarımla buluşuyor. Markanızın özünü en iyi şekilde
          yansıtan, akılda kalıcı görseller yaratıyoruz.
        </h3>
      </div>
    </section>
  ) : (
    <section className="overflow-hidden pb-14 pt-6 md:pb-16 lg:pb-[88px] lg:pt-11 xl:pb-[100px]">
      <div className="container">
        <h3 ref={revealRef} className="overflow-hidden">
          Sıra dışı ve etkileyici bir projeyi birlikte inşa edelim. Unutulmaz bir başarı için Niche Project Agency ile
          çalışmaya hazır mısınız?"
        </h3>
      </div>
    </section>
  )
}

export default AboutV5
