import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
  
    useGSAP(() => {
             const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

             projects.forEach((card, index) => {
  gsap.fromTo(
    card,
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0,
      duration: 1,
      ease: 'power2.out', 
      delay: (index + 1) * 0.3,
      scrollTrigger: {
        trigger: card,
        start: 'top bottom-=100',
      }
    }
  )
})

        gsap.fromTo(
            sectionRef.current, 
            { opacity: 0 }, { opacity: 1,
             duration: 1.5,
              ease: 'power2.out', delay: 1.5 });
    }, []);
  return (
    <div id='work' ref={sectionRef} className='app-showcase'>
        <div className='w-full'> 
            <div className='showcaselayout'>
    {/* Left side  */}
       <div className='first-project-wrapper' ref={project1Ref}>
    <div className='image-wrapper'>
    <img src="https://i.pinimg.com/736x/63/82/79/63827936ed1dca60e742ab37c24adc5d.jpg" alt="Collabora" />
    </div>
    <div className='text-content'>
        <h2>Task Made Simple with a Powerful, User-Friendly App called Collabora</h2>
        <p>Collabora is a task management app designed to help teams collaborate effectively and stay organized. With its intuitive interface and robust features, Collabora makes it easy to create, assign, and track tasks in real-time.</p>
    </div>
       </div>

    {/* Right  */}
    <div className='project-list-wrapper overflow-hidden'>
<div className='project' ref={project2Ref}>
    <div className='image-wrapper bg-[#ffefdb]'>
<img src="https://i.pinimg.com/1200x/1a/b1/af/1ab1af3ba1c3e20897692c5210048d0d.jpg" alt="Library Management Platform" 
className='rounded-md object-cover'/>
</div>
<h2>Shophere Eccomerce Platform</h2>
</div>

<div className='project' ref={project3Ref}>
    <div className='image-wrapper bg-[#ffe7eb]'>
<img src="https://i.pinimg.com/1200x/47/75/e0/4775e0f971edeefe8fa6b52a62c59f52.jpg"  
className='rounded-md object-cover' alt="Cash Management System" />
</div>
<h2>Cash Management System</h2>
</div>
    </div>
            </div>
        </div>
    </div>
  )
}

export default ShowcaseSection