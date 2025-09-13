import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import SplitType from "split-type";

const FlavorTitle = () => {
  useGSAP(() => {
    const firstTextSplit = new SplitType(".first-text-split h1", {
      types: "chars",
    });
    const secondTextSplit = new SplitType(".second-text-split h1", {
      types: "chars",
    });

    gsap.from(firstTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 30%",
      },
    });

    gsap.to(".flavor-text-scroll", {
      duration: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 10%",
      },
    });

    gsap.from(secondTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 1%",
      },
    });

    return () => {
      firstTextSplit.revert;
      secondTextSplit.revert;
    };
  });

  return (
    <div className="general-title h-full col-center xl:gap-32 lg:gap-24 gap-16">
      <div className="overflow-hidden 2xl:py-0 py-3 first-text-split">
        <h1>We have 6</h1>
      </div>

      <div
        style={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        className="flavor-text-scroll"
      >
        <div className="bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
          <h2 className="text-milk">Freaking</h2>
        </div>
      </div>

      <div className="overflow-hidden 2xl:py-0 py-3 second-text-split">
        <h1>Delicious flavors</h1>
      </div>
    </div>
  );
};

export default FlavorTitle;
