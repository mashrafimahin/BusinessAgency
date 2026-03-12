// hooks
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// main
function HeroAnim(target) {
  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(".letter", {
        opacity: 0,
        x: -10,
        duration: 0.15,
        stagger: 0.03,
      })
        .from(
          ".letterTwo",
          {
            stagger: 0.1,
          },
          "-=0.8",
        )
        .from(
          ".para",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=1.5",
        )
        .from(
          ".btn",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.8",
        );
    },
    { scope: target },
  );
}

export default HeroAnim;
