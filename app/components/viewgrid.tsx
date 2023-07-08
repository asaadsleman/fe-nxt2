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
        <div className='grid grid-cols-11 gap-3 content-center'>
            <div className='col-span-7'>
                <div className='flex mb-4'>
                    <Card shadow='none' >
                        <Suspense fallback={<div> Loading... </div>}>
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
                <div className='flex mb-4'>
                    <Card fullWidth>
                        <CardBody>
                            <span>
                                {videos[currIndx]["itemTopicLong"]}
                            </span>
                            <div className='flex flex-end justify-end mb-1'>
                                <Tooltip content={"Reset Video"}>
                                    <Button className='ml-1' isIconOnly onPress={resetButton} color="warning">
                                        <GithubIcon />
                                    </Button>
                                </Tooltip>
                                <Tooltip content={"Dislike Video"}>
                                    <Button className='ml-1' color='danger'>
                                        Dislike
                                    </Button>
                                </Tooltip>
                                <Tooltip content={"Like Video"}>
                                    <Button className='ml-1' color="success">
                                        Like
                                    </Button>
                                </Tooltip>
                            </div>
                            <br />
                            <div className='mt-2 flex flex-end justify-end'>
                                <Button className='ml-1' color="default">Summary</Button>
                                <Button className='ml-1' color="default">Practice</Button>
                                <Button className='ml-1' color="default">Discuss</Button>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className='col-span-4'>
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
                <br />
                <Card>
                    <VideoSection
                        videos={videos}
                        setIsReady={setIsReady}
                        setCurrIndx={setCurrIndx}
                        setClicked={setClicked}
                    />
                </Card>
            </div>
        </div>
    )
}

export default GridView;