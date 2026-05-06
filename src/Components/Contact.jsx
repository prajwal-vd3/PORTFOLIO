import React, { useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Contact = () => {

  const sectionRef = useRef(null)

  useEffect(() => {

    if (!sectionRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {

      const mm = gsap.matchMedia()

      /* MOBILE + TABLET */
      mm.add('(max-width: 1023px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 50%',
            scrub: 1,
          }
        })

        tl.from('.contact-title', {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power2.out'
        })

        .from('.contact-text', {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power2.out'
        }, '<+=0.35')

        .from('.mobile-info', {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.3
        }, '<+=0.4')

        .from('.mobile-form', {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power2.out'
        }, '<+=0.2')
      })

      /* DESKTOP */
      mm.add('(min-width: 1024px)', () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'bottom 40%',
            scrub: 1,
          }
        })

        tl.from('.line1', {
          x: -100,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out'
        })

        .from('.line2', {
          x: 100,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out'
        }, '<+=0.15')

        .from('.line3', {
          x: -100,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out'
        }, '<+=0.15')

        .from('.desktop-form', {
          y: 80,
          opacity: 0,
          scale: 0.9,
          duration: 1.3,
          ease: 'power3.out'
        }, '<-=0.1')

      })

    }, sectionRef)

    return () => ctx.revert()

  }, [])

  return (
    <section className='min-h-screen w-full py-10 desktop:py-0 relative overflow-hidden' ref={sectionRef}>

      {/* mobile and tablet view */}
      <div className="h-full w-full desktop:hidden">

        <div className="flex flex-col items-center mb-10">
          <h1 className="text-[3rem] bg-gradient-to-b from-purple-50 via-purple-300 to-purple-500 bg-clip-text text-transparent font-semibold text-center tablet:text-[4rem] font-poppins contact-title">
            Contact Me
          </h1>

          <p className="text-white/70 text-[1.2rem] text-center max-w-[90%] tablet:text-[1.5rem] desktop:max-w-[60%] contact-text">
            Have a project idea or internship opportunity? Feel free to reach out.
            I'm always open to discussing new opportunities and creative projects.
          </p>
        </div>

        <div className="flex flex-col gap-[2em]">

          <div className="flex flex-col items-center mobile-info">
            <div className="p-[2em] border-white/20 border-2 w-[90%] rounded-[2em] bg-blue-200/10 backdrop-blur-md flex flex-col gap-5">

              <p className="text-white/70 text-[1.4rem]">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-blue-400" />
                Email : prajwalvd14@gmail.com
              </p>

              <p className="text-white/70 text-[1.4rem]">
                <FontAwesomeIcon icon={faPhone} className="mr-2 text-blue-400" />
                Phone : +91 8618734223
              </p>

              <p className="text-white/70 text-[1.4rem]">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-blue-400" />
                Location : Hassan, Karnataka, India
              </p>

            </div>
          </div>

          <div className="flex flex-col items-center mobile-form">
            <div className="min-h-[30rem] w-[90%] bg-blue-200/10 backdrop-blur-md rounded-[2rem] flex flex-col border-white/30 border-2 p-8 tablet:p-12">

              <form className="flex flex-col gap-6">

                <div className="flex flex-col tablet:flex-row gap-6">

                  <div className="flex flex-col flex-1 gap-2">
                    <label className="text-white/80 ml-2">Name</label>
                    <input type="text" placeholder="Enter your name"
                      className="bg-white/5 border border-white/20 rounded-xl p-4 text-white outline-none" />
                  </div>

                  <div className="flex flex-col flex-1 gap-2">
                    <label className="text-white/80 ml-2">Email</label>
                    <input type="email" placeholder="xyz@gmail.com"
                      className="bg-white/5 border border-white/20 rounded-xl p-4 text-white outline-none" />
                  </div>

                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white/80 ml-2">Message</label>
                  <textarea rows="5" placeholder="Tell me about your project..."
                    className="bg-white/5 border border-white/20 rounded-xl p-4 text-white outline-none resize-none"></textarea>
                </div>

                <button type="submit"
                  className="mt-4 bg-gradient-to-r from-purple-700 to-purple-600 text-white font-semibold py-4 rounded-xl">
                  Send Message
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>

      {/* desktop */}
      <div className="h-full w-full hidden desktop:flex">

        {/* left */}
        <div className="h-full w-[55vw]">
          <div className="h-full w-full flex flex-col gap-[1em] py-[4em] px-[4em]">

            <h1 className="line1 bg-gradient-to-r from-white/80 via-white to-black/80 bg-clip-text text-transparent text-[9em] leading-none font-anton">
              LET'S
            </h1>

            <h1 className="line2 bg-gradient-to-r from-white/80 via-white to-white/60 bg-clip-text text-transparent text-[9em] leading-none font-anton text-right px-7">
              GET IN
            </h1>

            <h1 className="line3 bg-gradient-to-r from-white/80 via-white to-black/80 bg-clip-text text-transparent text-[9em] leading-none font-anton">
              TOUCH
            </h1>

          </div>
        </div>

        {/* right */}
        <div className="h-[100vh] w-[40vw] flex items-center justify-center">

          <div className="desktop-form h-[80%] w-[90%] bg-blue-200/10 rounded-2xl py-[2em] px-[2em] backdrop-blur-md border-white/30 border-2 gap-[1em] flex flex-col">

            <div className="flex flex-col gap-1">
              <label className='text-white/70 px-2'>Name</label>
              <input type="text"
                className='bg-white/5 border border-white/20 rounded-xl p-4 text-white outline-none'
                placeholder='Enter your name..' />
            </div>

            <div className="flex flex-col gap-1">
              <label className='text-white/70 px-2'>E-Mail</label>
              <input type="email"
                className='bg-white/5 border border-white/20 rounded-xl p-4 text-white outline-none'
                placeholder='Enter your email..' />
            </div>

            <div className="flex flex-col gap-1">
              <label className='text-white/70 px-2'>Message</label>
              <textarea
                className='bg-white/5 border border-white/20 rounded-xl p-4 text-white outline-none'
                placeholder='Enter your message..'
              />
            </div>

            <button className='mt-4 bg-white/80 text-black font-semibold py-4 rounded-xl w-full'>
              Send Message
            </button>

          </div>

        </div>
      </div>

    </section>
  )
}

export default Contact