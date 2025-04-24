'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Link from 'next/link'

export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const sliderRef = useRef(null)
    const [slider] = useKeenSlider({
        loop: true,
        animation: {
            duration: 3000,
            easing: (t) => t
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created(slider) {
            sliderRef.current = slider
        }
    })

    useEffect(() => {
        const interval = setInterval(() => {
            sliderRef.current?.next()
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
      <>
        <div className="relative">
            {/* Carousel */}
            <div ref={slider} className="keen-slider  shadow-lg overflow-hidden h-64 md:h-80 lg:h-96">
                <div className="keen-slider__slide flex items-center justify-center h-full  ">
                    <Link href={'/about'}>
                        <img src='https://images.unsplash.com/photo-1726549384638-e530b978ac3e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                    </Link>
                </div>
                <div className="keen-slider__slide flex items-center justify-center h-full  ">
                    <Link href={'/about'}>
                        <img src='https://images.unsplash.com/photo-1741683386377-f59badc91174?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='h-[100%]' />
                    </Link>
                </div>
                <div className="keen-slider__slideflex items-center justify-center h-full  ">
                    <Link href={'/about'}>
                        <img src='https://images.unsplash.com/photo-1741550005101-c111f322908c?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                    </Link>
                </div>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {[0, 1, 2].map((i) => (
                    <button
                        key={i}
                        onClick={() => sliderRef.current?.moveToIdx(i)}
                        className={`w-3 h-3 ${currentSlide === i ? 'bg-white' : 'bg-white/50'} rounded-full transition`}>
                    </button>
                ))}
            </div>


        </div>
        <div>
          hii
        </div>
        </>
    )
}






