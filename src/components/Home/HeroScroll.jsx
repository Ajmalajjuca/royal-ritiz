import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HeroScroll.css";

gsap.registerPlugin(ScrollTrigger);

export default function HeroScroll() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-wrapper",
        start: "top top",
        end: "+=2200", // tuned for natural finish
        scrub: 1.5,
        pin: true, // keeps hero section pinned until animation done
        anticipatePin: 1,
      },
    });

    // Gateway expansion
    tl.to(".gateway-overlay", {
      scale: 3.5,
      yPercent: -10,
      opacity: 0.8,
      ease: "power2.out",
    });

    // Logo scale and upward move
    tl.to(
      ".hero-logo",
      {
        scale: 1.6,
        yPercent: -180,
        ease: "power2.out",
      },
      "<"
    );

    // Fade hero slightly at the end to transition
    tl.to(".hero-sticky", {
      opacity: 0,
      duration: 0.6,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className="hero-wrapper">
      <div className="hero-sticky">
        <div
          className="hero-background"
          style={{
            backgroundImage: "url('/src/assets/room1.png')",
          }}
        ></div>

        <div className="gateway-overlay"></div>

        <img
          src="/src/assets/logo.svg"
          alt="Gateway Logo"
          className="hero-logo"
        />
      </div>
    </section>
  );
}
