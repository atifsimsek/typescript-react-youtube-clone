import { useEffect } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { useNavigate } from "react-router-dom"
import SearchCard from "../components/SearchCard"
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Spinner from "../components/Spinner"
import { clearVideos } from "../store"
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos"
import { HomePageVideos } from "../Types"

const Search = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector(state => state.youtubeApp.searchTerm)


  const videos = useAppSelector((state) => state.youtubeApp.videos)


  useEffect(() => {
    dispatch(clearVideos())
    if (searchTerm === "") {
      navigate("/")
    }
    else (
      dispatch(getSearchPageVideos(false))
    )
  }, [dispatch, navigate, searchTerm])



  return (
    <div className='max-h-screen overflow-hidden'>
      <div className='h[6.5vh]'>
        <Navbar />
      </div>
      <div className='flex h-[92.5vh]'>
        <Sidebar />
        {videos.length ? (
          <div className="py-8 pl-8 flex flex-col gap-5 w-full">
            <InfiniteScroll

              dataLength={videos.length}
              next={() => dispatch(getSearchPageVideos(true))}
              hasMore={videos.length < 500}
              loader={<Spinner />}
              height={600}
            >
      
                {videos.map((item: HomePageVideos, index: number) => (
                 <div className="my-5"> <SearchCard data={item} key={index} /></div>
                ))}
      
            </InfiniteScroll>
          </div>

        ) : (
          <Spinner />
        )}
      </div>

    </div>
  )
}

export default Search