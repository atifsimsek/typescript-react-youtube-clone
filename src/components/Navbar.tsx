
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai"
import { TiMicrophone } from "react-icons/ti"
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoAppsSharp } from "react-icons/io5"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { changeSearchTerm, clearSearchTerm, clearVideos } from "../store"
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos"

const Navbar = () => {

    const location = useLocation()
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector(state => state.youtubeApp.searchTerm)
    const handleSearch = () => {
        if (location.pathname !== "/search") {
            navigate("/search")
        }
        else {
            dispatch(clearVideos())
            dispatch(getSearchPageVideos(false))
        }

    }



    return (
        <nav className=" flex flex-col mt-6 sm:mt-0 sm:flex-row py-4  justify-center sm:justify-between items-center px-14 h-16 bg-bgPrimary opacity-95 sticky top-0 z-50">
            <div className="flex gap-8 items-center text-2xl">
                <GiHamburgerMenu className="hidden sm:inline" />
                <Link to={"/"}>
                    <div className="flex gap-1 items-center justify-center">
                        <BsYoutube className="text-3xl text-red-600" />
                        <span className="text-xl font-medium">Youtube</span>
                    </div>
                </Link >
            </div>
            <div className="flex items-center  justify-center gap-5 ">
                <form onSubmit={e => {
                    e.preventDefault()
                    handleSearch();
                }}>
                    <div className="flex mt-3 sm:mt-0 bg-zinc-900 rounded-full overflow-hidden   items-center h-10 px-4 pr-0" >
                        <div className="flex gap-4  items-center pr-5 ">

                            <input
                                placeholder="Search"
                                type={"text"}
                                className="w-40 sm:w-96  bg-zinc-900 focus:outline-none border-none "
                                value={searchTerm}
                                onChange={(e) => { dispatch(changeSearchTerm(e.target.value)) }}
                            />
                            <AiOutlineClose
                                className={`text-xl cursor-pointer ${!searchTerm ? "invisible" : "visible"}`}
                                onClick={() => dispatch(clearSearchTerm())}
                            />
                        </div>

                        <button className="h-10 w-16 flex justify-center  items-center bg-zinc-800">
                            <AiOutlineSearch className="text-xl" />
                        </button>
                    </div>
                </form>
                <div className="text-xl p-3 mt-3 sm:mt-0 bg-zinc-900 rounded-full">
                    <TiMicrophone />
                </div>

            </div>
            <div className="hidden shrink-0 lg:flex items-center gap-5 text-xl">
                <BsCameraVideo />

                <div className="relative">
                    <BsBell />
                    <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
                        9+
                    </span>
                </div>
                <img
                    src="https://picsum.photos/id/60/200/300"
                    className="rounded-full w-9 h-9"
                    alt="logo"
                />
            </div>

        </nav>
    )
}

export default Navbar