import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skills = [
  {
    name: "HTML & CSS",
    img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
  },
  {
    name: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "React",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Tailwind CSS",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "GSAP",
    img: "https://cdn.worldvectorlogo.com/logos/gsap-greensock.svg",
  },
];

const Skills = () => {

  const sectionRef = useRef(null)

  useEffect(() => {

    if (!sectionRef.current) return;

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

        tl.from('.section-title', {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power2.out'
        })

        .from('.section-text', {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power2.out'
        }, '<+=0.3')

        .from('.section-skill', {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.3
        }, '<+=0.39')
      })

      /* DESKTOP 1024px+ */
      mm.add('(min-width: 1024px)', () => {

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'bottom 40%',
            scrub: 1,
          }
        })

        tl.from('.section-title', {
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out'
        })

        .from('.section-text', {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power2.out'
        }, '<+=0.2')

        .from('.section-skill', {
          y: 80,
          opacity: 0,
          scale: 0.8,
          duration: 1.2,
          ease: 'power3.out',
          stagger: 0.15
        }, '<+=0.1')

      })

    }, sectionRef)

    return () => ctx.revert()

  }, [])

  return (
    <section className="min-h-screen w-full relative" ref={sectionRef}>

      <div className="h-full w-full py-[2em] relative">

        {/* overlay  */}
        <div className="absolute bg-purple-600 scale-150 h-[10em] w-[10em] rounded-full top-[50%] right-[40%] blur-[130px] tablet:blur-[130px] tablet:h-[12em] tablet:w-[12em] desktop:w-[60vw] desktop:h-[3em] desktop:blur-[80px] desktop:top-[70%] desktop:left-[20%]"></div>

        <div className="absolute bg-purple-700 h-[6em] w-[6em] top-[80%] left-[20%] blur-[140px] desktop:hidden"></div>

        <div className="flex flex-col items-center desktop:py-[2em]">

          <h1 className="section-title text-[3em] bg-gradient-to-b from-purple-50 via-purple-300 to-purple-500 bg-clip-text text-transparent font-semibold text-center mb-5 tablet:text-[4em] font-poppins">
            My Skills
          </h1>

          <p className="text-white/70 text-[1.5em] text-center max-w-[90%] tablet:text-[1.8em] section-text">
            Technologies I use to craft modern, responsive and interactive webexperiences with performance and smooth animations.
          </p>

        </div>

        <div className="grid grid-cols-2 px-1 tablet:px-[3em] desktop:grid-cols-5">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 mt-10 border-white/30 border-2 rounded-3xl bg-white/10 backdrop-blur-xl w-[85%] tablet:w-[70%] mx-auto py-5 section-skill"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="h-[5em] w-[5em] object-contain tablet:h-[7em] tablet:w-[7em]"
              />

              <p className="text-white text-[1.2em] tablet:text-[1.8em]">
                {skill.name}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;