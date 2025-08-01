import { useEffect } from "react";

export default function useVanillaTilt(selector = ".tilt-card, #hero-tilt") {
  useEffect(() => {
    let VanillaTilt;
    let elements = document.querySelectorAll(selector);
    let initialized = false;
    (async () => {
      if (elements.length > 0) {
        if (!window.VanillaTilt) {
          VanillaTilt = (await import('vanilla-tilt')).default;
        } else {
          VanillaTilt = window.VanillaTilt;
        }
        VanillaTilt.init(elements, {
          max: 18,
          speed: 600,
          glare: true,
          "max-glare": 0.18,
          scale: 1.04,
          gyroscope: true
        });
        initialized = true;
      }
    })();
    return () => {
      if (initialized && VanillaTilt && elements.length > 0) {
        elements.forEach(el => {
          if (el.vanillaTilt) el.vanillaTilt.destroy();
        });
      }
    };
  }, [selector]);
}
