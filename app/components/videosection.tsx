import { Image, Card, Button, Spacer, CardBody, Divider, Chip } from "@nextui-org/react";
import React, { useCallback } from "react";
import styles from '../page.module.css'
import { VideoItem } from "../types";


interface VidItemProps {
    videoObj: VideoItem;
    setIsReady: React.Dispatch<React.SetStateAction<boolean>>;
    key: number;
    setCurrIndx: React.Dispatch<React.SetStateAction<number>>;
    setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}


/* single video list item - contains:
   - video thumbnail image
   - video topic short 
   - video duration (formatted to MM:SS) */
const VidItem: React.FC<VidItemProps> = ({ videoObj, setIsReady, key, setCurrIndx, setClicked }) => {

    const setFunction = () => {
        console.log("setting index to:", key);
        setCurrIndx(key);
        console.log("setting clicked to true");
        setClicked(true);
        console.log("setting ready to false");
        setIsReady(false);
    }
    return (
        <Card isPressable onPress={setFunction}>
            <CardBody>
                <div className="flex">
                    <Image className="p-5 rounded-lg"
                        src={videoObj.thumbnailUrl}
                        width="80%"
                        height="auto"
                    />
                </div>
                <Divider orientation="vertical" />
                <div className="flex">
                    {videoObj.itemTopicShort}
                </div>
                <br />
                <div className="flex">
                    <Chip
                        variant="flat"
                        radius="lg"
                        color="secondary"
                        size="lg"
                    >
                        {(videoObj.itemLengthSec >= 60) ? Math.round(videoObj.itemLengthSec / 60) : "00"}
                        :
                        {videoObj.itemLengthSec % 60}
                    </Chip>
                </div>
            </CardBody>
        </Card>
    )
}

interface VideoSectionProps {
    videos: Array<VideoItem>;
    setIsReady: React.Dispatch<React.SetStateAction<boolean>>;
    setCurrIndx: React.Dispatch<React.SetStateAction<number>>;
    setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const VideoSection: React.FC<VideoSectionProps> = ({ videos, setIsReady, setCurrIndx, setClicked }) => {
    const list = videos.map((video, i) => (
        <VidItem
            videoObj={video}
            setIsReady={setIsReady}
            key={i}
            setCurrIndx={setCurrIndx}
            setClicked={setClicked}
        />
    ));
    return (
        <div className="h-32 overflow-y-auto">
            {list}
        </div>
    );
}
export default VideoSection;
