export interface InitialState {
    videos: HomePageVideos[],
    currentPlaying: CurrentPlaying | null,
    searchTerm: string;
    searhResults: [];
    nextPageToken: string | null;
    recomendedVideos: RecomendedVideos[];
}

export interface HomePageVideos {
    videoId: string;
    videoTitle: string;
    videoDescription: string;
    videoLink: string;
    videoThumbnail: string;
    videoDuration: string;
    videoViews: string;
    videoAge: string;
    channelInfo: {
        id: string;
        image: string;
        name: string;
    }
}


export interface HomePageVideos { }
export interface CurrentPlaying { }
export interface RecomendedVideos { }