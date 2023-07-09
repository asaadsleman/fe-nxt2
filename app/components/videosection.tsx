import { Image, Card, Button, Spacer, CardBody, Divider, Chip } from "@nextui-org/react";
import React, { useCallback } from "react";
import styles from '../page.module.css'
import { VideoItem } from "../types";


interface VidItemProps {
    videoObj: VideoItem;
    setIsReady: React.Dispatch<React.SetStateAction<boolean>>;
    index: number,
    setCurrIndx: React.Dispatch<React.SetStateAction<number>>;
    setClicked: React.Dispatch<React.SetStateAction<boolean>>;
}


/* single video list item - contains:
   - video thumbnail image
   - video topic short 
   - video duration (formatted to MM:SS) */
const VidItem: React.FC<VidItemProps> = ({ videoObj, setIsReady, index, setCurrIndx, setClicked }) => {

    const setFunction = () => {
        console.log("setting index to:", index);
        setCurrIndx(index);
        console.log("setting clicked to true");
        setClicked(true);
        console.log("setting ready to false");
        setIsReady(false);
    }
    return (
        <Card isPressable onPress={setFunction}>
            <CardBody>
                <div className="flex flex-row">
                    <div className="flex justify-center" style={{ width: "40%", marginBlock: 0 }}>
                        <Image
                            src={videoObj.thumbnailUrl}
                            width="auto"
                            height="auto"
                        />
                    </div>
                    <div className="flex flex-col justify-start ml-4">
                        <h5 className="mt-0">
                            {videoObj.itemTopicShort}
                        </h5>
                        <br />
                        <br />
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
            index={i}
            setCurrIndx={setCurrIndx}
            setClicked={setClicked}
        />
    ));
    return (
        <div className="h-[31rem] overflow-y-auto">
            {list}
        </div>
    );
}
export default VideoSection;
