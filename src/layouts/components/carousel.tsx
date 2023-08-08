// components/Carousel.tsx
"use client"
// import the hook and options type
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { PropsWithChildren, useRef } from "react";

import Autoplay from "embla-carousel-autoplay";

// Define the props
type Props = PropsWithChildren & EmblaOptionsType;

const Carousel = ({ children, ...options }: Props) => {
  // 1. useEmblaCarousel returns a emblaRef and we must attach the ref to a container.
  // EmblaCarousel will use that ref as basis for swipe and other functionality.
  
  const autoplayOptions = {
    delay: 5000,
    rootNode: (emblaRoot: { parentElement: any; }) => emblaRoot.parentElement,
  }
  
  const autoplay = useRef(
    Autoplay(autoplayOptions)
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);
  return (
    // Attach ref to a div
    // 2. The wrapper div must have overflow:hidden
    <div className="overflow-hidden" ref={emblaRef} >
      {/* 3. The inner div must have a display:flex property */}
      {/* 4. We pass the children as-is so that the outside component can style it accordingly */}
      <div className="flex gap-10" >{children}</div>
    </div>
  );
};
export default Carousel;