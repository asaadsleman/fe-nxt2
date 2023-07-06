'use client';
import React, { useRef, useState, useCallback, useEffect, FC, FunctionComponent } from "react"
import ReactPlayer from 'react-player';
import { VideoItem } from '../types';

interface VideoPlayerProps {
    videos: VideoItem[];
    isReady: boolean;
    setIsReady: (isReady: boolean) => void;
    currIndx: number;
    setCurrIndx: (index: number) => void;
    clickedPlaylist: boolean;
    setClicked: (clicked: boolean) => void;
}

function VideoPlayer({ videos, isReady, setIsReady, currIndx, setCurrIndx, clickedPlaylist, setClicked }: VideoPlayerProps) {
    const [hasWindow, setHasWindow] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currVideo, setCurrVideo] = useState(videos[currIndx]);
    const playerRef = useRef<ReactPlayer | null>(null);

    useEffect(() => {
        if (typeof window !== undefined) {
            setHasWindow(true);
        }
    }, []);

    const handleDuration = (duration: number) => {
        console.log('Duration in Seconds:', duration, videos.length)
    }

    const onEnded = useCallback(() => {
        console.log('Video Has Ended!');
        if (currIndx < videos.length - 1) {
            let nextIndex = currIndx + 1;
            //console.log(`next index is ${nextIndex}`);
            setCurrIndx(nextIndex);
            setClicked(true);
            if (isPlaying) setIsPlaying(false);
            if (isReady) setIsReady(false);
            onReady();
        } else {
            console.log("You've reached the end of this playlist!");
            setIsPlaying(false);
        }
    }, [currIndx, videos]);

    const handleProgress = (state: { playedSeconds: number }) => {
        console.log('onProgress:', state.playedSeconds)
        if (clickedPlaylist) {
            console.log("loading new video:");
            setIsPlaying(false);
            setIsReady(false);
            onReady();
        }
        else if (state.playedSeconds >= currVideo.itemEndSec) {
            setIsPlaying(false);
            setIsReady(false);
            onEnded();
        }
    }

    const onReady = useCallback(() => {
        console.log("in onReady - preparing video");
        if (!isReady || clickedPlaylist) {
            if (clickedPlaylist) {
                console.log("playlist clicked!");
                setClicked(false);
                setCurrVideo(videos[currIndx]);
            }
            setIsReady(true);
            setIsPlaying(true);
            playerRef.current?.seekTo(videos[currIndx].itemStartSec, 'seconds');
            console.log("setPlaying:", isPlaying);
        }
    }, [isReady, isPlaying, clickedPlaylist, videos, currIndx]);

    const onPause = () => {
        console.log("Paused");
        setIsPlaying(false);
    }

    return (
        <div>
            {hasWindow && <ReactPlayer
                ref={playerRef}
                url={videos[currIndx].itemAssetUrl ? videos[currIndx].itemAssetUrl : ""}
                playing={isPlaying}
                controls={true}
                onReady={onReady}
                onDuration={handleDuration}
                onProgress={handleProgress}
                onEnded={onEnded}
                onPause={onPause}
                width="100%"
                height="100%"
                muted />
            }
        </div>
    );
}

export default VideoPlayer;