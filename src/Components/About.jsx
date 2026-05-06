import React, { useEffect, useRef } from 'react'
import InfoCard from './InfoCard'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

const About = () => {

    const sectionRef = useRef(null)

    useEffect(() => {

        if (!sectionRef.current) return

        gsap.registerPlugin(ScrollTrigger)

        const ctx = gsap.context(() => {

            const mm = gsap.matchMedia()

            // Mobile + Tablet
            mm.add('(max-width: 1023px)', () => {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        end: 'bottom 50%',
                        scrub: 1,
                    }
                })

                tl.from('.mobile-title', {
                    y: 50,
                    opacity: 0,
                    duration: 1
                })

                .from('.mobile-text', {
                    y: 50,
                    opacity: 0,
                    duration: 1
                }, '<+=0.2')

                .from('.info-card', {
                    y: 50,
                    opacity: 0,
                    stagger: 0.25,
                    duration: 1
                }, '<+=0.2')
            })

            // Desktop
            mm.add('(min-width: 1024px)', () => {

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                        end: 'bottom 40%',
                        scrub: 1,
                    }
                })

                // text appears one after another smoothly
                tl.from('.line1', {
                    y: 80,
                    opacity: 0,
                    duration: 1.2,
                    ease: 'power3.out'
                })

                .from('.desktop-img', {
                    scale: 0.7,
                    opacity: 0,
                    duration: 1.4,
                    ease: 'power3.out'
                }, '<+=0.1')

                .from('.line2', {
                    y: 50,
                    opacity: 0,
                    duration: 1.2,
                    ease: 'power3.out'
                }, '<+=0.2')

                .from('.line3', {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.out'
                }, '<+=0.3')
                

            })

        }, sectionRef)

        return () => ctx.revert()

    }, [])

    return (
        <section className="min-h-screen w-full tablet:py-[4em] overflow-hidden" ref={sectionRef}>

            {/* mobile and tablet */}
            <div className="h-full w-full desktop:hidden">

                <h1 className="text-[3em] bg-gradient-to-b from-purple-50 via-purple-300 to-purple-500 bg-clip-text text-transparent font-semibold text-center mb-5 tablet:text-[4em] mobile-title">
                    About Me
                </h1>

                <div className="h-full w-full flex flex-col">
                    <div className="hidden"></div>

                    <div className="flex flex-col items-center gap-[1em]">

                        <p className="text-white/70 text-[1.5em] text-center max-w-[90%] mobile-text">
                            I'm a passionate Front-End Developer focused on building modern, responsive and interactive web experiences using React Tailwind CSS and GSAP.
                        </p>

                        <div className="flex flex-col items-center mb-10 gap-3">

                            <InfoCard
                                title='Experience'
                                text="Currently pursuing MCA while continuously building projects and improving my front-end development skills."
                            />

                            <InfoCard
                                title='Technologies'
                                text='I work with HTML, CSS, JavaScript, React, Tailwind CSS and GSAP to create modern responsive interfaces.'
                            />

                            <InfoCard
                                title='Passion'
                                text='I love building creative UI designs, smooth animations and interactive websites.'
                            />

                        </div>
                    </div>
                </div>
            </div>

            {/* desktop */}
            <div className="h-full w-full hidden desktop:flex relative">

                {/* blur bg */}
                <div className="absolute top-[50%] left-[10%] h-[10em] w-[10em] bg-purple-800 z-0 rounded-full blur-[150px] pointer-events-none"></div>
                <div className="absolute top-[15%] right-[3%] h-[10em] w-[10em] bg-purple-800 z-0 rounded-full blur-[140px] pointer-events-none"></div>

                {/* left */}
                <div className="h-full w-[60vw]">

                    <div className="h-[100vh] w-full flex flex-col justify-center px-[4em]">

                        <h1 className="line1 text-[4em] bg-gradient-to-t from-white to-gray-500 bg-clip-text text-transparent font-anton p-0">
                            Hello I'm
                        </h1>

                        <h1 className="line2 text-[8em] font-anton bg-gradient-to-r from-white/80 via-white to-black/80 bg-clip-text text-transparent leading-none p-0">
                            Prajwal
                        </h1>

                        <h2 className="line3 text-[2em] text-white/80 mt-4">
                            Front-End Developer | React, Tailwind CSS & GSAP
                        </h2>

                    </div>
                </div>

                {/* right */}
                <div className="h-full w-[40vw]">

                    <div className="h-[100vh] w-full flex items-center justify-center pr-[4em] desktop-img">

                        <div className=" h-[18em] w-[18em] rounded-full overflow-hidden border border-white/20 hover:scale-105 transition-all duration-300">

                            <img
                                src="./image/_.jpeg"
                                alt="profile"
                                className="h-full w-full object-cover "
                            />

                        </div>

                    </div>
                </div>

            </div>

        </section>
    )
}

export default About