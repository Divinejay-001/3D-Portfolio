import React from 'react'
import { counterItems } from '../constants'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const AnimatedCounter = () => {
  // detect if the counter section is visible
  const { ref, inView } = useInView({
    triggerOnce: true,   // only trigger once
    threshold: 0.3,      // % of component visible before triggering
  })

  return (
    <div id="counter" ref={ref} className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <div
            key={item.label}
            className="bg-zinc-900 rounded-lg p-6 flex flex-col"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              {inView ? (
                <CountUp
                  start={0}
                  end={item.value}
                  duration={2}
                  suffix={item.suffix}
                />
              ) : (
                0 + item.suffix // fallback before it animates
              )}
            </div>
            <div className="text-white-50 text-lg">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedCounter
