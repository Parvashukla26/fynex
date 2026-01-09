'use client'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { pricedeta } from '@/app/api/data'
import Image from 'next/image'
import { motion } from 'framer-motion'

const CardSlider = () => {
  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 3000,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'cubic-bezier(0.22, 1, 0.36, 1)',
    responsive: [
      { breakpoint: 479, settings: { slidesToShow: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
    ],
  }

  return (
    <div className="relative mt-10 mb-10">
      <Slider {...settings}>
        {pricedeta.map((item, index) => (
          <div key={index} className="px-3">
            <motion.div
              whileHover={{ y: -2 }}
              className="
    relative
    h-[128px]
    px-5 py-4
    rounded-xl
    bg-[#080808]
    border border-white/[0.05]
    flex flex-col justify-between
    transition-all duration-300
    hover:border-primary/20
  "
            >
              {/* Top Content */}
              <div className="flex items-start gap-3">
                <div
                  className="
        w-9 h-9
        rounded-lg
        bg-white/[0.025]
        border border-white/[0.06]
        flex items-center justify-center
        flex-shrink-0
      "
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={13}
                    height={13}
                    className="opacity-45"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <h3
                    className="
          text-white
          text-[12px]
          font-semibold
          uppercase
          tracking-tight
          leading-snug
        "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
          text-white/40
          text-[10px]
          leading-snug
          max-w-[220px]
        "
                  >
                    {item.value}
                  </p>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="flex justify-end">
                <span
                  className="
        px-3 py-[3px]
        rounded-full
        text-[8px]
        font-semibold
        uppercase
        tracking-[0.22em]
        text-primary
        bg-primary/10
        border border-primary/20
      "
                >
                  {item.tag}
                </span>
              </div>
            </motion.div>

          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CardSlider
