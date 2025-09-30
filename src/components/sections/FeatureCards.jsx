import React from 'react'
import { abilities } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FeatureCards = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.feature-card',
      { y: 50, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.2, // delay between each card
        scrollTrigger: {
          trigger: '#features',
          start: 'top 80%', // animate when section is ~80% in view
          toggleActions: 'play none none none', // play only once
        },
      }
    )
  })

  return (
    <div id="features" className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className="feature-card card-border rounded-xl p-8 flex flex-col gap-4"
          >
            <div className="size-14 flex items-center justify-center rounded-full">
              <img src={imgPath} alt={title} className="size-7" />
            </div>
            <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
            <p className="text-white-50 text-lg">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeatureCards
