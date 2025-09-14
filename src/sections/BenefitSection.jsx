import { useGSAP } from "@gsap/react";
import ClipPathTitle from "../components/ClipPathTitle";
import gsap from "gsap/all";

const BenefitSection = () => {
  useGSAP(() => {
    const revealTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".benefits-section",
        start: "top 60%",
        end: "top top",
        scrub: 1.5,
        markers: true,
      },
    });

    revealTl
      .to(".benefits-section .first-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefits-section .second-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefits-section .third-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.out",
      })
      .to(".benefits-section .fourth-title", {
        duration: 1,
        opacity: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "circ.out",
      });
  });
  return (
    <section className="min-h-dvh overflow-hidden bg-[#222123] relative benefits-section">
      <div className="container mx-auto pt-20 pb-20">
        <div className="flex flex-col items-center justify-center">
          <p className="text-milk font-paragraph text-center text-lg">
            Unlock the Advantages:
            <br />
            Explore the Key Benefits of Choosing SPYLT
          </p>

          <div className="col-center mt-20">
            <ClipPathTitle
              title={"Shelf Stable"}
              color={"#faeade"}
              bg={"#c88e64"}
              className={"rotate-[3deg] relative z-10 first-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Protein + Caffein"}
              color={"#222123"}
              bg={"#faeade"}
              className={"rotate-[-1deg] md:-translate-y-5 second-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Infinitely Recylable"}
              color={"#faeade"}
              bg={"#7f382d"}
              className={
                "rotate-[1deg] md:-translate-y-12 relative z-10 third-title"
              }
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Lactose free"}
              color={"#2e2d2f"}
              bg={"#fed775"}
              className={"rotate-[-5deg] md:-translate-y-12 fourth-title"}
              borderColor={"#222123"}
            />
          </div>

          <div className="md:mt-0 mt-10">
            <p className="text-milk font-paragraph text-center text-lg">
              And much more ...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
