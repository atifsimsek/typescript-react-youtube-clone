import { useEffect } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import Card from "../components/Card"
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Spinner from "../components/Spinner"
import { clearVideos } from "../store"
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getHomePageVideos } from "../store/reducers/getHomePageVideos"
import { HomePageVideos } from "../Types"

const Home = () => {

  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos)

  useEffect(() => {
    dispatch(getHomePageVideos(false))
 
  }, [dispatch])

  useEffect(() => {

    return () => {
      dispatch(clearVideos)
    }
  }, [dispatch])



  return (
    <div className='max-h-screen overflow-hidden bg-bgPrimary'>
      <div className='h[6.5vh]'>
        <Navbar />
      </div>
      <div className='flex h-[92.5vh]'>
        <Sidebar />
        {videos.length ? (
          <InfiniteScroll

            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={"100%"}
          >
            <div className="grid gap-y-20 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 place-items-center p-8">
              {videos.map((item: HomePageVideos, index: number) => (
                <Card data={item} key={index} />
              ))}
            </div>


          </InfiniteScroll>

        ) : (
          <Spinner />
        )}
      </div>

    </div>
  )
}

export default Home