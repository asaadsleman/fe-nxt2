import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

export interface VideoItem {
    orderNum: number;
    itemName: string;
    itemTopicShort: string;
    itemTopicLong: string;
    itemAssetUrl: string;
    itemStartSec: number;
    itemEndSec: number;
    itemLengthSec: number;
    thumbnailUrl: string;
};

export interface Playlist {
    playlistId: string;
    playlistName: string;
    totalTimeInSec: number;
    items: VideoItem[];
};

export interface UserData {
    name: string;
    description: string;
    persona: string;
    playlists: Playlist[];
};