/* viewGrid - Main user view layout */
'use client'
import { Image, Card, Tooltip, Button, Spacer, CardHeader, CardBody, CardFooter } from '@nextui-org/react';
import VideoPlayer from '@/app/components/videoplayer'
import VideoSection from '@/app/components/videosection'
import { Suspense, useState } from 'react'
import { UserData, VideoItem } from '../types';
import { GithubIcon } from './icons';




const GridView: React.FC<UserData> = (data) => {
    /* initialize indx to hard-coded data
        - indx is shared between grid and children
        - enables control of video player from list */
    const [videos, setVideos] = useState<VideoItem[]>(data?.playlists[0].items);
    const [currIndx, setCurrIndx] = useState<number>(0);
    const [clicked, setClicked] = useState(false);
    const [isReady, setIsReady] = useState(false);
    /* CAN SUPPORT MULTIPLE PLAYLISTS - NEEDS UI ADJUSTMENT */
    /*const [currPlaylist, setCurrPlaylist] = useState(0); */
    const resetButton = () => {
        setClicked(true);
    }

    return (
        <div>
            <div className='mb-4 fit-content'>
                <Card shadow='none' >
                    <Suspense fallback={<div> loading... </div>}>
                        <VideoPlayer
                            videos={videos}
                            isReady={isReady}
                            setIsReady={setIsReady}
                            currIndx={currIndx}
                            setCurrIndx={setCurrIndx}
                            clickedPlaylist={clicked}
                            setClicked={setClicked}
                        />
                    </Suspense>
                </Card>
            </div>
            <div>
                <Card>
                    <CardBody>
                        <span>
                            {videos[currIndx]["itemTopicLong"]}&nbsp;
                        </span>
                        <div>
                            <Tooltip content={"Reset Video"}>
                                <Button isIconOnly onPress={resetButton} color="warning">
                                    <GithubIcon />
                                </Button>
                            </Tooltip>
                            <Tooltip content={"Dislike Video"}>
                                <Button color='danger'>
                                    Dislike
                                </Button>
                            </Tooltip>
                            <Tooltip content={"Like Video"}>
                                <Button color="success">
                                    Like
                                </Button>
                            </Tooltip>
                        </div>
                        <br />
                        <div>
                            <Button color="default">Summary</Button>
                            <Button color="default">Practice</Button>
                            <Button color="default">Discuss</Button>
                        </div>
                    </CardBody>
                    <CardFooter>

                    </CardFooter>
                </Card>
            </div>
            <Card>
                <CardHeader >
                    <h3>
                        {data?.name}
                    </h3>
                </CardHeader>
                <h4>
                    {data?.persona}
                </h4>
                <CardFooter>
                    <h6>
                        {data?.playlists[0].playlistName}
                    </h6>
                </CardFooter>
            </Card>
            <Card>
                <VideoSection
                    videos={videos}
                    setIsReady={setIsReady}
                    setCurrIndx={setCurrIndx}
                    setClicked={setClicked}
                />
            </Card>
        </div>
    )
}

export default GridView;