"use client";

import { useEffect, useRef, useState } from "react";

type VideoProps = {
  youTubeID: string;
};

export function LazyYouTubePlayer({ youTubeID="44I29krtxaw" }: VideoProps) {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentContainerRef = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0, rootMargin: "1500px" }
    );

    if (currentContainerRef) {
      observer.observe(currentContainerRef);
    }

    return () => {
      if (currentContainerRef) {
        observer.unobserve(currentContainerRef);
      }
    };
  }, []);

  return (
    <div className="relative h-full w-full video-mask" ref={containerRef}>
      {isInView && (
        <iframe
          src={`https://www.youtube.com/embed/${youTubeID}?autoplay=1&mute=1&controls=1&rel=0&showinfo=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      )}
      {/* Example mask overlay */}
      <div className="absolute inset-0 pointer-events-none video-mask-overlay"></div>
    </div>
  );
}
