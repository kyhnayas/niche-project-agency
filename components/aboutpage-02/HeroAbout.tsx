'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'

interface PropsTypes {
  spacingTop?: string
}

const HeroAbout = ({ spacingTop }: PropsTypes) => {
  const { revealRef } = useReveal()

  return spacingTop ? (
    <RevealWrapper className={`${spacingTop} container`}>
      <h3 ref={revealRef} className="reveal-text-2 text-secondary dark:text-backgroundBody">
        Biz Niche Project Agency olarak, markanızın en derin potansiyelini keşfederiz. Dijital evrenin her köşesinde
        yankı bulacak, sizi geleceğe taşıyacak bütüncül bir yolculukla, hayallerinizdeki gücü gerçeğe dönüştürürüz.
      </h3>
    </RevealWrapper>
  ) : (
    <RevealWrapper as="section" className="container">
      <h3 ref={revealRef}>
        Biz Niche Project Agency olarak, markanızın en derin potansiyelini keşfederiz. Dijital evrenin her köşesinde
        yankı bulacak, sizi geleceğe taşıyacak bütüncül bir yolculukla, hayallerinizdeki gücü gerçeğe dönüştürürüz.
      </h3>
    </RevealWrapper>
  )
}

export default HeroAbout
