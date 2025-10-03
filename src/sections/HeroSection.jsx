import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitType from "split-type";
import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  useGSAP(() => {
    const split = new SplitType(".hero-title", { types: "chars" });

    // Create a GSAP timeline
    const tl = gsap.timeline();

    // Animate title chars
    tl.to(split.chars, {
      opacity: 1,
      y: 0,
    });

    // Animate the whole hero-content AFTER title finishes (with delay)
    tl.to(
      ".hero-content",
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }
      // add a delay AFTER the title animation ends
    );
    tl.to(
      ".hero-text-scroll",
      {
        duration: 1.5,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.out",
      },
      "-=0.5"
    );

    tl.from(
      split.chars,
      {
        yPercent: 200,
        stagger: 0.02,
        ease: "power2.out",
      },
      "-=0.5"
    );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });

    heroTl.to(".hero-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });

    return () => split.revert();
  });

  return (
    <section>
      <div className="hero-container">
        {isTablet ? (
          <>
            {isMobile && (
              <img
                src="/images/hero-bg.png"
                className="absolute bottom-40 size-full object-cover"
              />
            )}
            <img
              src="/images/hero-img.png"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto"
            />
          </>
        ) : (
          <video
            src="/videos/hero-bg.mp4"
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title">freaking Delicious</h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)", // fixed typo
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Protein + Caffein</h1>
            </div>
          </div>
          <h2>
            Live life to the fullest with SPYLT: Shatter boredom and embrace
            your inner kid with every deliciously smooth chug.
          </h2>
          <div className="hero-button">
            <p>CHUG THE SPYLT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
