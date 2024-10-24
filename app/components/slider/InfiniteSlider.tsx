'use client'

import React, { useState, useRef } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface SlideProps {
  image: string
  title: string
}

const slides: SlideProps[] = [
  { image: 'https://github.com/KITASAKA-labo/KITASAKA-labo.github.io/blob/main/public/images/studyimg1.jpg?raw=true', title: 'Slide 1' },
  { image: 'https://github.com/KITASAKA-labo/KITASAKA-labo.github.io/blob/main/public/images/studyimg2.jpg?raw=true', title: 'Slide 2' },
  { image: 'https://github.com/KITASAKA-labo/KITASAKA-labo.github.io/blob/main/public/images/studyimg3.jpg?raw=true', title: 'Slide 3' },
  { image: 'https://github.com/KITASAKA-labo/KITASAKA-labo.github.io/blob/main/public/images/studyimg4.jpg?raw=true', title: 'Slide 4' },
  { image: 'https://github.com/KITASAKA-labo/KITASAKA-labo.github.io/blob/main/public/images/studyimg5.jpg?raw=true', title: 'Slide 5' },
]

const InfiniteSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="w-full max-w-8xl mx-auto px-4">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="px-2 py-[60px]">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image 
                src={slide.image} 
                alt={slide.title} 
                width={600}
                height={500}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default InfiniteSlider;