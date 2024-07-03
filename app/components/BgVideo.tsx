"use client"

import React, { FC, useRef, useEffect } from 'react';
import './VideoBackground.css';

const VIDEO_WIDTH = 1920;
const VIDEO_HEIGHT = 1080;
const VIDEO_SRC = '/assets/abc2.mp4';

export const BgVideo: FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            const handleTimeUpdate = () => {
                if (video.currentTime >= video.duration - 0.1) {
                    video.currentTime = 0.1; // Slightly after the beginning to avoid black screen
                    video.play();
                }
            };

            video.addEventListener('timeupdate', handleTimeUpdate);

            return () => {
                video.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, []);

    return (    
        <div className="video-background">
            <div className="video-overlay"></div>
            <video
                ref={videoRef}
                width={VIDEO_WIDTH}
                height={VIDEO_HEIGHT}
                src={VIDEO_SRC}
                autoPlay
                muted
                playsInline
                className="video"
            />
        </div>
    );
};
