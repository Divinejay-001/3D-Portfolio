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
    <img src="/images/project1.png" alt="Ryde" />
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
<img src="/images/project2.png" alt="Library Management Platform" />
</div>
<h2>Library Management Platform</h2>
</div>

<div className='project' ref={project3Ref}>
    <div className='image-wrapper bg-[#ffe7eb]'>
<img src="/images/project3.png" alt="Cash Management System" />
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