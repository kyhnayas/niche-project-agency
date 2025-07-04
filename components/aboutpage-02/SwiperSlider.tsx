'use client'
import userImg2 from '@/public/images/avatar/review-6.png'
import userImg1 from '@/public/images/avatar/review-8.png'
import userImg3 from '@/public/images/avatar/review-9.png'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import RevealWrapper from '../animation/RevealWrapper'
import SwiperSlideContent from './SwiperSlideContent'

const userReviewData = [
  {
    id: 1,
    tags: ' Marka Konumlandırma, Hedef Kitle Analizi',
    title:
      'Niche Project Agency ile çalışmaya başladığımızda, moda sektöründeki yoğun rekabette kendimizi nasıl konumlandıracağımız konusunda net bir fikrimiz yoktu. "Marka Konumlandırma ve Kimlik Oluşturma" hizmetleri sayesinde, hedef kitlemizi çok daha iyi anladık ve markamızın özgün sesini bulduk. Pazarlama stratejilerimiz artık çok daha odaklı ve sonuç odaklı. Gerçekten dönüştürücü bir deneyim oldu!',
    userImg: userImg1,
    userName: 'Ayşe Yılmaz',
    position: 'Kurucu Ortak - Moda E-ticaret Markası',
  },
  {
    id: 2,
    tags: ' Pazarlama Stratejisi, Bütçe Optimizasyonu',
    title:
      'Teknoloji startup ımız için pazarlama bütçemizi en verimli şekilde kullanmak istiyorduk. Niche Project Agency nin "Reklam Bütçesi Yönetimi ve Optimizasyonu" hizmeti sayesinde, harcamalarımızı akıllıca yönlendirdik ve yatırım getirimizi önemli ölçüde artırdık. Stratejik yaklaşımları ve detaylı analizleri sayesinde, büyüme hedeflerimize çok daha hızlı ulaşıyoruz. ',
    userImg: userImg2,
    userName: 'Can Demir',
    position: 'Pazarlama Direktörü - Teknoloji Startup',
  },
  {
    id: 3,
    tags: ' Marka Hikayesi, Değer Teklifi',
    title:
      'Sürdürülebilir gıda markamız için güçlü bir marka hikayesi ve değer teklifi oluşturmak bizim için kritikti. Niche Project Agency, markamızın misyonunu ve vizyonunu mükemmel bir şekilde yansıtan bir anlatı geliştirmemize yardımcı oldu. Artık müşterilerimizle çok daha derin bir bağ kurabiliyoruz. Onların uzmanlığı sayesinde markamızın kimliği çok daha sağlam bir zemine oturdu. ',
    userImg: userImg3,
    userName: 'Elif Zengin',
    position: 'Marka Yöneticisi - Sürdürülebilir Gıda',
  },
]

const SwiperSlider = () => {
  return (
    <RevealWrapper className="container pb-6 pt-16 lg:pb-10 lg:pt-[100px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        pagination={{
          clickable: true,
          el: '.swiper-custom-pagination',
        }}
        speed={1500}
        allowTouchMove
        autoplay={{
          delay: 3700,
          disableOnInteraction: false,
        }}>
        {userReviewData.map(({ id, title, tags, userName, position, userImg }) => (
          <SwiperSlide key={id}>
            <SwiperSlideContent tags={tags} title={title} userName={userName} position={position} userImg={userImg} />
          </SwiperSlide>
        ))}
        <div className="swiper-custom-pagination mt-6 flex justify-center"></div>
      </Swiper>
    </RevealWrapper>
  )
}

export default SwiperSlider
