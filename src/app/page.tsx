'use client'

import Carousel from '@/components/Carousel'
import Image from 'next/image'

import image1 from '../../public/carousel-img/image1.png'
import image2 from '../../public/carousel-img/image2.jpg'
import Category from '@/components/Category'

export default function Home() {
  return (
    <div className="md:container md:mx-auto bg-slate-500 p-8 mt-4">
      <Carousel>
        <div className="relative h-64 flex-[0_0_100%]">
          <Image src={image1.src} fill className="object-contain" alt="alt" />
        </div>

        <div className="relative h-64 flex-[0_0_100%]">
          <Image src={image2.src} fill className="object-contain" alt="alt" />
        </div>
      </Carousel>

      <Category />
    </div>
  )
}
