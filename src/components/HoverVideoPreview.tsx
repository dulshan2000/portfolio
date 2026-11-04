"use client";

import { useRef, useEffect } from "react";

interface HoverVideoPreviewProps {
  src: string;
  isHovered: boolean;
  previewStart?: number;
  previewDuration?: number;
  className?: string;
}

export default function HoverVideoPreview({
  src,
  isHovered,
  previewStart = 1.5,
  previewDuration = 7,
  className = "w-full h-full object-cover",
}: HoverVideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered) {
      if (
        video.currentTime < previewStart ||
        video.currentTime >= previewStart + previewDuration
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
    if (video.duration > previewStart) {
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
      src={src}
      muted
      playsInline
      preload="metadata"
      onLoadedMetadata={handleLoadedMetadata}
      onTimeUpdate={handleTimeUpdate}
      className={className}
    />
  );
}

