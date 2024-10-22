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
  { image: '', title: 'Slide 2' },
  { image: '', title: 'Slide 3' },
  { image: '', title: 'Slide 4' },
  // { image: '/placeholder.svg?height=300&width=400', title: 'Slide 5' },
]

const InfiniteSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
    <div className="w-full max-w-4xl mx-auto px-4">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="px-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image 
                src={slide.image} 
                alt={slide.title} 
                width={400}
                height={300}
                layout="responsive"
                objectFit="cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{slide.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default InfiniteSlider;