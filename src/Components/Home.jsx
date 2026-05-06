import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import Text from './Text.jsx'
import gsap from 'gsap'

const Home = () => {

    const text = 'PORTFOLIO'.split('')

    const textRef = useRef([])
    const landRef = useRef(null)
    const imageRef = useRef(null)
    const navRef = useRef(null)
    const loopRef = useRef(null)
    const mainRef = useRef(null)

    const mobileRef = useRef(null)
    const desktopRef = useRef(null)
    const [isOpen, setIsOpen] = React.useState(false)

    const scrollToSection = (id) => {
        setIsOpen(false)

        setTimeout(() => {
            const section = document.getElementById(id)

            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }
            }, 700)
    }

    // Mobile Refs
    const mobileNavRef = useRef(null)
    const mobileImageRef = useRef(null)
    const mobileContainer = useRef(null)
    const mobileMenuRef = useRef(null)
    const mobileColorRef = useRef(null)
    const mobileContainerRef = useRef(null)

    // Desktop Refs
    const desktopNavRef = useRef(null)
    const desktopContainerRef = useRef(null)
    const desktopColorRef = useRef(null)


    useLayoutEffect(()=>{
        gsap.set(landRef.current, { willChange: 'transform' })
        window.scrollTo(0,0)
        const ctx = gsap.context(()=>{

            document.documentElement.style.overflow = 'hidden'
            document.documentElement.style.position = 'fixed'
            document.documentElement.style.width = '100%'
            document.documentElement.style.top = '0'

            const mm = gsap.matchMedia()

            // mobile
            mm.add('(max-width : 767px)',()=>{
                const tl = gsap.timeline();

                tl.from(textRef.current,{
                    delay: 0.5,
                    autoAlpha: 0,
                    yPercent: 100,
                    skewY: 10,
                    stagger: 0.08,
                    duration: 0.8,
                    ease: 'power4.out',
                    force3D: true,
                    skewY: 10,
                    smoothOrigin: true
                })

                .to(landRef.current,{
                    yPercent: -110,
                    skewY: 3,
                    duration: 3,
                    ease: 'power4.out'
                },'+=0.5')

                .to(landRef.current,{
                    clipPath: 'circle(90% at 50% 0%)',
                    duration: 0.7,
                    ease: 'power4.out'
                },'<-=0.1')

                .from(mobileImageRef.current,{
                    autoAlpha: 0,
                    y: 350,
                    duration: 0.9,
                    ease: 'back.out(1.7)',
                    force3D: true,
                    smoothOrigin: true 
                },'>-=0.45')

                .from(mobileNavRef.current.children,{
                    autoAlpha: 0,
                    y: -50,
                    duration: 1,
                    ease: 'power4.out',
                    stagger: 0.3
                },'<+=0.7')

                .from(mobileContainer.current.children,{
                    autoAlpha: 0,
                    y: 50,
                    duration: 1,
                    ease: 'power4.out',
                    stagger: 0.3
                },'<+=0.5')

                .call(()=>{
                    document.documentElement.style.position = ''
                    document.documentElement.style.width = ''
                    document.documentElement.style.top = ''
                    document.documentElement.style.overflow = 'auto'
                },null,'>-=0.6')
                
            })

            // Tablet
            mm.add('(min-width : 768px) and (max-width : 1023px)',()=>{

                const tl = gsap.timeline();

                tl.from(textRef.current,{
                    delay: 0.5,
                    autoAlpha: 0,
                    yPercent: 100,
                    skewY: 10,
                    stagger: 0.08,
                    duration: 0.8,
                    ease: 'power4.out',
                    force3D: true,
                    skewY: 10,
                    smoothOrigin: true
                })

                .to(landRef.current,{
                    yPercent: -110,
                    skewY: 3,
                    duration: 3,
                    ease: 'power4.out'
                },'+=0.5')

                .to(landRef.current,{
                    clipPath: 'circle(90% at 50% 0%)',
                    duration: 0.7,
                    ease: 'power4.out'
                },'<-=0.1')

                .from(mobileImageRef.current,{
                    autoAlpha: 0,
                    y: 300,
                    duration: 0.9,
                    ease: 'back.out(1.7)',
                    force3D: true,
                    smoothOrigin: true 
                },'>-=0.3')

                .from(mobileNavRef.current.children,{
                    autoAlpha: 0,
                    y: -50,
                    duration: 0.7,
                    ease: 'power4.out',
                    stagger: 0.2
                },'<+=0.5')

                .from(mobileContainer.current.children,{
                    autoAlpha: 0,
                    y: 50,
                    duration: 0.8,
                    ease: 'power4.out',
                    stagger: 0.2
                },'<+=0.4')

                .call(()=>{
                    document.documentElement.style.position = ''
                    document.documentElement.style.width = ''
                    document.documentElement.style.top = ''
                    document.documentElement.style.overflow = 'auto'
                },null,'>-=0.6')

            })

            // Desktop
            mm.add('(min-width : 1024px)',()=>{
                const tl = gsap.timeline();

                const allBox = gsap.utils.toArray(imageRef.current.children)

                const aniBox = allBox.filter((_, i) => i !== 2)

                tl.from(textRef.current,{
                    delay: 0.5,
                    autoAlpha: 0,
                    yPercent: 100,
                    skewY: 10,
                    stagger: 0.08,
                    duration: 0.8,
                    ease: 'power4.out',
                    force3D: true,
                    skewY: 10,
                    smoothOrigin: true
                })

                .to(landRef.current,{
                    yPercent: -110,
                    
                    duration: 2,
                    ease: 'power4.out'
                },'+=0.5')

                .to(landRef.current,{
                    clipPath: 'circle(50% at 50% 0%)',
                    skewX: 3,
                    duration: 0.7,
                    ease: 'power4.out'
                },'<-=0.1') 
                
                .from(imageRef.current.children,{
                    autoAlpha: 0,
                    y: 300,
                    stagger: {
                        each: 0.05,
                        from: 'center'
                    },
                    duration: 0.9,
                    ease: 'back.out(1.7)',
                    force3D: true,
                    
                    smoothOrigin: true 
                },'>-=0.45')

                .to(imageRef.current.children[2],{
                    scale : 1.2,
                    duration: 1,
                    skewY : -1,
                    force3D: true,
                    ease: 'power4.out',
                },'>+=0.1')

                .to(aniBox,{
                    scaleY: 0,
                    duration: 0.8,
                    stagger:{
                        each: 0.01,
                        from: 'center'
                    },
                    ease: 'power4.out',
                    transformOrigin: 'top',
                    ease: 'power4.out',
                },'<+=0.07')

                .from(navRef.current.children,{
                    autoAlpha: 0,
                    y: -50,
                    duration: 1,
                    ease: 'power4.out',
                    stagger: 0.3
                },'<+=0.4')

                .to(loopRef.current,{
                    autoAlpha: 1,
                    duration: 1,
                    ease: 'power4.out'
                },'<+=0.5')

                .to(imageRef.current.children[2],{
                   y : -25,
                   duration : 2,
                   ease  :'sine.inOut',
                   repeat : -1,
                   yoyo : true
                },'<-=0.4')

                .call(()=>{
                    document.documentElement.style.position = ''
                    document.documentElement.style.width = ''
                    document.documentElement.style.top = ''
                    document.documentElement.style.overflow = 'auto'
                },null,'>-=0.6')

                .to(imageRef.current.children[2],{
                   rotation : 2,
                   duration : 5,
                   ease  :'sine.inOut',
                   repeat : -1,
                   yoyo : true
                },'<-=0.4')

                
                  
            })
        })

        return () =>  ctx.revert()
    },[])

    useEffect(()=>{
        const ctx = gsap.context(()=>{
            const mm = gsap.matchMedia();

            // mobile menu animation
            mm.add('(max-width : 1023px)',()=>{
                const tl = gsap.timeline({paused: true});
                tl.to(mobileMenuRef.current,{
                    yPercent : -75,
                    duration : 0.8,
                    ease : 'power4.out',
                    smoothOrigin: true
                })

                .to(mobileColorRef.current,{
                    backgroundColor: '#000',
                    duration: 0.8,
                    ease: 'power4.out'
                },'<')

                .to(mobileContainerRef.current,{
                    clipPath: 'circle(150% at 100% 0%)',
                    duration: 0.8,
                    ease: 'power4.out'
                },'<')

                .from(mobileContainerRef.current.children,{
                    autoAlpha: 0,
                    y: 90,
                    skewY : 9,
                    stagger: 0.35,
                    duration: 1,
                    ease: 'power4.out',
                    force3D: true,
                    smoothOrigin: true
                },'>-=0.5')

                mobileRef.current = tl;

            })

            // desktop menu animation
            mm.add('(min-width : 1024px)',()=>{
                const tl = gsap.timeline({ paused : true })

                tl.to(desktopNavRef.current,{
                    yPercent: -100,
                    duration: 0.8,
                    ease: 'power4.out',
                    smoothOrigin: true
                })

                .to(desktopColorRef.current,{
                    backgroundColor: '#000',
                    duration: 0.8,
                    ease: 'power4.out'
                },'<')

                .to(desktopContainerRef.current,{
                    clipPath: 'circle(150% at 100% 0%)',
                    duration: 0.8,
                    ease: 'power4.out'
                },'<')

                .from(desktopContainerRef.current.children,{
                    y : 80,
                    opacity : 0,
                    skewY : 9,
                    duration : 1,
                    stagger : 0.35,
                    ease : 'power4.out'
                },'>-=0.5')

                desktopRef.current = tl;
            })

        })
        return () => ctx.revert();
    },[])

    useEffect(()=>{
        if(isOpen){
            mobileRef.current?.play()
            desktopRef.current?.play()
        } else{
            mobileRef.current?.timeScale(1.5).reverse()
            desktopRef.current?.timeScale(1.5).reverse()
        }
    },[isOpen])


  return (
    <section className="min-h-screen w-full relative overflow-hidden " ref={mainRef} >

        {/* landing Page */}
        <div className="absolute h-screen w-full bg-white desktop:z-40 z-20 flex items-center  justify-center [clip-path:circle(150%_at_50%_0%)]" ref={landRef}>
            <div className=" overflow-hidden flex gap-0.5  " >
                {text.map((t,i)=>{
                    return <h1 key={i} className="font-anton text-black desktop:text-[9em] text-7xl tablet:text-[8em] will-change-[transform, opacity]"  ref={(el) => textRef.current[i] = el}>{t}</h1>
                })}
            </div>
        </div>

        {/* main content for mobile and tablet */}
        <div className="h-full w-full flex flex-col gap-[2em] tablet:gap-[3em] relative desktop:hidden" >

            {/* menu container */}
            <div className="absolute bg-white h-[80vh] w-[96vw] top-5 right-2 rounded-[1.5em] [clip-path:circle(0%_at_100%_0%)] z-10 flex flex-col py-[12em] px-[3em] gap-[2em] tablet:right-4 tablet:w-[95vw] tablet:px-[4em] tablet:gap-[3em]" ref={mobileContainerRef}>
                <h1 className="text-[2.5em] tablet:text-[3em] text-black font-poppins font-medium cursor-pointer" onClick={() => scrollToSection('home')}>Home</h1>
                <h1 className="text-[2.5em] tablet:text-[3em] text-black font-poppins font-medium cursor-pointer" onClick={() => scrollToSection('about')}>About Me</h1>
                <h1 className="text-[2.5em] tablet:text-[3em] text-black font-poppins font-medium cursor-pointer" onClick={() => scrollToSection('skills')}>Skills</h1>
                <h1 className="text-[2.5em] tablet:text-[3em] text-black font-poppins font-medium cursor-pointer" onClick={() => scrollToSection('contact')}>Contact Me</h1>
            </div>

            {/* NavBar */}
            <nav className="px-[1em] h-[12vh]  flex items-center justify-between tablet:px-[2em]" ref={mobileNavRef}>
                <h1 className="text-[2em] text-white font-poppins font-medium tablet:text-[2.5em]">PRAJWAL</h1>

                {/* MenuBar */}
                <div className="bg-white   py-1 rounded-full h-[3em] w-[3em] px-2.5 relative overflow-hidden z-20 tablet:h-[3.5em]tablet:w-[3.5em]"  onClick={ () => setIsOpen(!isOpen)} ref={mobileColorRef}>
                    <div className="absolute inset-0 flex flex-col items-center  py-2 gap-1" ref={mobileMenuRef} >
                        <FontAwesomeIcon className='text-[2em] ' icon={faBars}/>
                        <FontAwesomeIcon className='text-[2em] text-white' icon={faXmark}/>
                    </div>
                </div>
            </nav>

            <div className="h-full w-full flex flex-col items-center 
            gap-[2em]">

                <div className="h-[16em] w-[16em] rounded-full bg-white tablet:h-[18em] tablet:w-[18em]" ref={mobileImageRef}>
                </div>

                <div className="flex flex-col h-full w-full items-center gap-[1.5em]" ref={mobileContainer}>
                    <h1 className="text-[3em] bg-gradient-to-b from-purple-200 to-purple-500 text-transparent bg-clip-text font-poppins font-semibold tablet:text-[3.5em]">Hi I'm Prajwal</h1>
                    <p className="text-white/70 text-center max-w-[90%] text-[1.5em] mb-[1em] tablet:text-[2em] tablet:max-w-[85%]">I focus on creating modern user interfaces with React. Tailwind CSS and smooth animation using GSAP.</p>
                    <button className='text-white text-[1.5em] bg-purple-600 px-5 py-2 rounded-[2em] tablet:text-[2em]'><a href="">My Resume</a></button>
                </div>
            </div>
        </div>

        {/* main content for desktop  */}
        <div className="h-full w-full desktop:block hidden overflow-hidden relative" >

            {/* navbar background */}
            <div className="absolute  bg-white z-20 h-[80vh] w-[60vw] top-3 right-4 rounded-3xl [clip-path:circle(0%_at_100%_0%)] px-[3em] justify-center flex flex-col gap-[1em]" ref={desktopContainerRef}>
                <h1 className="text-[3em] text-black font-poppins cursor-pointer" onClick={() => scrollToSection('home')}>Home</h1>
                <h1 className="text-[3em] text-black font-poppins cursor-pointer" onClick={() => scrollToSection('about')}>About Me</h1>
                <h1 className="text-[3em] text-black font-poppins cursor-pointer" onClick={() => scrollToSection('skills')}>Skills</h1>
                <h1 className="text-[3em] text-black font-poppins cursor-pointer" onClick={() => scrollToSection('contact')}>Contact Me</h1>
            </div>


            {/* navbar */}
            <nav className="h-[18vh] w-full  flex items-center px-[2em] justify-between" ref={navRef}>
                <h1 className="text-[2.5em] font-normal text-white font-poppins ">PRAJWAL</h1>

                {/* menubar */}
                <div className="h-[3em] w-[10.5em] px- relative bg-white rounded-[2em] cursor-pointer z-30 overflow-hidden" onClick={ () => setIsOpen(!isOpen)}  ref={desktopColorRef}>
                    <div className="absolute inset-0 flex flex-col items-center" ref={desktopNavRef}>
                        <h1 className="text-[2em] text-black"><FontAwesomeIcon icon={faBars} /> Menu</h1>
                        <h1 className="text-[2em] text-white"><FontAwesomeIcon icon={faXmark}/> Close</h1>
                    </div>
                </div>
            </nav>

            {/* image container */}
            <div className="h-[75vh] relative w-full ">
                <div className="h-full w-full flex gap-[2.5em] items-center justify-center relative z-10" ref={imageRef}>
                    <div className="bg-amber-200  h-[13em] w-[9em] rounded-3xl"></div>
                    <div className="bg-amber-200 h-[13em] w-[9em] rounded-3xl"></div>
                    <div className="bg-red-300 h-[13em] will-change-transform w-[9em] rounded-xl shadow-xl shadow-white/15 overflow-hidden">
                    <img src="./image/_.jpeg" alt="" className='h-full w-full object-cover'/></div>
                    <div className="bg-amber-200 h-[13em] w-[9em] rounded-3xl"></div>
                    <div className="bg-amber-200 h-[13em] w-[9em] rounded-3xl"></div>
                </div>
            </div>

            <Text ref={loopRef} />

        </div>

    </section>
  )
}

export default Home