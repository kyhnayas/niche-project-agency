import CursorPointer from '@/components/animation/CursorPointer'
import SmoothScrollProvider from '@/components/shared/SmoothScroll'
import ThemeSwitcher from '@/components/theme/ThemeSwitcher'
import { satoshi } from '@/utils/fonts'
import { ThemeModeProvider } from '@/utils/Providers'
import type { Metadata } from 'next'
import { ReactNode, Suspense } from 'react'
import '../scss/main.scss'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: 'Niche Project Agency',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.variable} antialiased`}>
        <Suspense fallback={<div>Yükleniyor...</div>}>
          <SmoothScrollProvider>
            <ThemeModeProvider>
              <ThemeSwitcher />
              <CursorPointer />
              {children}
              <Analytics />
            </ThemeModeProvider>
          </SmoothScrollProvider>
        </Suspense>
      </body>
    </html>
  )
}
