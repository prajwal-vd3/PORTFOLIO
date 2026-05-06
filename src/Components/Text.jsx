import React, { forwardRef, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Text = forwardRef((props, ref) => {
  const demo = "Be ✦ Creative ✦ With ✦ React ✦  \u00A0\u00A0";
  const text = demo.repeat(3);

  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  useLayoutEffect(() => {
    if (!textRef1.current || !textRef2.current) return;

    const ctx = gsap.context(() => {
      const textWidth = textRef1.current.getComputedTextLength();

      gsap.set(textRef1.current, {
        attr: { startOffset: "0px" },
      });

      gsap.set(textRef2.current, {
        attr: { startOffset: `${textWidth}px` },
      });

      gsap.to([textRef1.current, textRef2.current], {
        attr: { startOffset: `-=${textWidth}px` },
        duration: 65,
        repeat: -1,
        ease: "none",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className="h-dvh w-full overflow-hidden absolute inset-0 z-0 pointer-events-none opacity-0"
    >
      <svg viewBox="0 0 1000 800">
        <defs>
          <path
            d="M0,250 C300,200 900,540 1200,350"
            fill="transparent"
            stroke="none"
            id="curve"
          />
        </defs>

        {/* First text */}
        <text className="text-8xl whitespace-nowrap">
          <textPath
            href="#curve"
            ref={textRef1}
            startOffset="0%" fill="white"
          >
            {text}
          </textPath>
        </text>

        {/* Second text (for seamless loop) */}
        <text className="text-7xl whitespace-nowrap">
          <textPath
            href="#curve"
            ref={textRef2}
            startOffset="100%" fill="white"
          >
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  );
});

export default Text;