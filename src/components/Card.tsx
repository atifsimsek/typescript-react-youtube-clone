import { Link } from "react-router-dom"
import { HomePageVideos } from "../Types"

// interface Props {
//     data: HomePageVideos
// }

const Card = ({ data }: { data: HomePageVideos }) => {
    return (
        <div className="w-64 h-60 flex gap-3 flex-col">
            <div className="relative">
                <span className="absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10">
                    {data.videoDuration}
                </span>
                <Link to={`/watch/${data.videoId}`}>
                    <img
                        className="h-44 w-72 "
                        src={data.videoThumbnail}
                        alt="tumbnail" />
                </Link>
            </div>

            <div className="flex gap-2">
                <div className="min-w-fit ">
                    <a
                        href="/">
                        <img
                            className="h-9 w-9 rounded-full"
                            src={data.channelInfo.image}
                            alt="channel" />
                    </a>
                </div>
                <div>
                    <h3>
                        <a
                            className="line-clamp-2"
                            href="/">
                            {data.videoTitle}
                        </a>
                    </h3>
                    <div className="text-sm text-gray-400 ">
                        <div>
                            <a href="/" className="hover:text-white">
                                {data.channelInfo.name}
                            </a>
                        </div>
                        <div>
                            <span className="after:content-['•'] after:mx-1">
                                {data.videoViews}
                            </span>
                            <span>{data.videoAge}</span>
                            <span>{}</span>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Card