// components/contactpage/ContactForm.tsx
'use client'
import React, { useState, useRef } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import emailjs from '@emailjs/browser'

// Initialize EmailJS (add your Public Key in .env.local)
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return
    setStatus('sending')
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      setStatus('sent')
      alert('Mesajınız başarıyla gönderildi!')
      formRef.current.reset()
    } catch (error) {
      console.error('EmailJS sendForm error:', error)
      setStatus('error')
      alert('Mesaj gönderilirken bir sorun oluştu. Lütfen tekrar deneyin.')
    }
  }

  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        <RevealWrapper as="div" className="reveal-me-wrapper mx-auto max-w-[800px]">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="reveal-me mx-auto grid grid-cols-1 gap-[30px] md:grid-cols-2">
            {/* Full Name */}
            <div className="md:col-span-full">
              <label
                htmlFor="user_name"
                className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-white">
                Tam Adınız
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                placeholder="Tam Adınızı Girin"
                required
                className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark dark:text-white"
              />
            </div>

            {/* Company Name */}
            <div>
              <label
                htmlFor="company"
                className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-white">
                Firma Adınız
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Firma Adınızı Girin"
                className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark dark:text-white"
              />
            </div>

            {/* Work Email */}
            <div>
              <label
                htmlFor="user_email"
                className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-white">
                İş Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                placeholder="isim@firmaismi.com"
                required
                className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark dark:text-white"
              />
            </div>

            {/* Service Type */}
            <div className="relative">
              <label
                htmlFor="service"
                className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-white">
                Hizmet türü*
              </label>
              <select
                id="service"
                name="service"
                required
                className="mt-3 w-full border bg-backgroundBody px-5 py-4 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark dark:text-white">
                <option value="UI/UX">UX Tasarım</option>
                <option value="Web design">Ürün Tasarımı</option>
                <option value="Web development">Marka Kimliği</option>
                <option value="Web development">Web Tasarım</option>
              </select>
              <span className="absolute right-5 top-1/2 translate-y-1/3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#000"
                    strokeOpacity="0.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>

            {/* Project Budget */}
            <div className="relative">
              <label
                htmlFor="budget"
                className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-white">
                Proje Bütçesi*
              </label>
              <select
                id="budget"
                name="budget"
                required
                className="mt-3 w-full border bg-backgroundBody px-5 py-4 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark dark:text-white">
                <option value="40k">10k ₺ - 25k ₺</option>
                <option value="55k">25k ₺ - 50k ₺</option>
                <option value="90k">50k ₺ - 100k ₺</option>
                <option value="100k+">100k₺ +</option>
              </select>
              <span className="absolute right-5 top-1/2 translate-y-1/3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#000"
                    strokeOpacity="0.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>

            {/* Project Brief */}
            <div className="md:col-span-full">
              <label
                htmlFor="message"
                className="text-2xl leading-[1.2] tracking-[-0.48px] text-[#000000b3] dark:text-white">
                Proje Özeti*
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Bizi proje hakkında kısaca bilgilendirin."
                required
                className="mt-3 w-full border bg-backgroundBody py-4 pl-5 text-xl leading-[1.4] tracking-[0.4px] text-colorText focus:border-primary focus:outline-none dark:border-dark dark:bg-dark dark:text-white"
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-full sm:mt-14 md:mx-auto">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="rv-button rv-button-primary block w-full md:inline-block md:w-auto">
                <div className="rv-button-top">
                  <span>{status === 'sending' ? 'Sending...' : 'Görüşme Talep Et'}</span>
                </div>
                <div className="rv-button-bottom">
                  <span className="text-nowrap">{status === 'sending' ? 'Sending...' : 'Görüşme Talep Et'}</span>
                </div>
              </button>
            </div>
          </form>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ContactForm
