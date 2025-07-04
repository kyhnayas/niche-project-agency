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
        Niche Project Agency olarak, markanızın dijital evrimini derinlemesine strateji, yenilikçi tasarım ve ileri
        teknolojiyle şekillendiriyoruz.
      </h3>
    </RevealWrapper>
  ) : (
    <RevealWrapper as="section" className="container">
      <h3 ref={revealRef}>
        Niche Project Agency olarak, markanızın dijital evrimini derinlemesine strateji, yenilikçi tasarım ve ileri
        teknolojiyle şekillendiriyoruz.
      </h3>
    </RevealWrapper>
  )
}

export default HeroAbout
