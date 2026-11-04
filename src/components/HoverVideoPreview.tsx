"use client";

import { useRef, useEffect, useState } from "react";

interface HoverVideoPreviewProps {
  src: string;
  poster?: string;
  isHovered: boolean;
  previewStart?: number;
  previewDuration?: number;
  className?: string;
}

export default function HoverVideoPreview({
  src,
  poster,
  isHovered,
  previewStart = 0,
  previewDuration = 7,
  className = "w-full h-full object-cover",
}: HoverVideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  // Lazy-activate video metadata only when the card enters or nears the viewport
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "250px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered) {
      if (
        previewStart > 0 &&
        (video.currentTime < previewStart ||
          video.currentTime >= previewStart + previewDuration)
      ) {
        video.currentTime = previewStart;
      }
      video.play().catch(() => {});
    } else {
      video.pause();
      if (video.readyState >= 1) {
        video.currentTime = previewStart;
      }
    }
  }, [isHovered, previewStart, previewDuration]);

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    if (previewStart > 0 && video.duration > previewStart) {
      video.currentTime = previewStart;
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !isHovered) return;
    if (video.currentTime >= previewStart + previewDuration) {
      video.currentTime = previewStart;
      video.play().catch(() => {});
    }
  };

  return (
    <video
      ref={videoRef}
      src={shouldLoadVideo || isHovered ? src : undefined}
      poster={poster}
      muted
      loop={previewStart === 0}
      playsInline
      preload={isHovered ? "auto" : "none"}
      onLoadedMetadata={handleLoadedMetadata}
      onTimeUpdate={handleTimeUpdate}
      className={className}
    />
  );
}
