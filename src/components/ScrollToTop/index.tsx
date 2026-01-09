'use client'
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-999">
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="group relative flex h-14 w-14 cursor-none items-center justify-center overflow-hidden rounded-full bg-primary text-darkmode shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95"
        >
          <div className="absolute inset-0 bg-darkmode translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
          <Icon
            icon="ph:arrow-up-bold"
            className="relative z-10 transition-colors duration-500 group-hover:text-primary"
            width="24"
          />
        </button>
      )}
    </div>
  );
}
