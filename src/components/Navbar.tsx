
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai"
import { TiMicrophone } from "react-icons/ti"
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoAppsSharp } from "react-icons/io5"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex  justify-between items-center px-14 h-16 bg-[#212121] opacity-95 sticky top-0 z-50">
            <div className="flex gap-8 items-center text-2xl">
                <GiHamburgerMenu />
                <Link to={"/"}>
                    <div className="flex gap-1 items-center justify-center">
                        <BsYoutube className="text-3xl text-red-600" />
                        <span className="text-xl font-medium">Youtube</span>
                    </div>
                </Link >
            </div>
            <div className="flex items-center justify-center gap-5 ">
                <form>
                    <div className="flex bg-zinc-900  items-center h-10 px-4 pr-0" >
                        <div className="flex gap-4  items-center pr-5 ">
                            <AiOutlineSearch className="text-xl" />
                            <input
                                type={"text"}
                                className="w-96 bg-zinc-900 focus:outline-none border-none "
                            />
                            <AiOutlineClose className="text-xl cursor-pointer" />
                        </div>

                        <button className="h-10 w-16 flex justify-center items-center bg-zinc-800">
                            <AiOutlineSearch className="text-xl" />
                        </button>
                    </div>
                </form>
                <div className="text-xl p-3 bg-zinc-900 rounded-full">
                    <TiMicrophone />
                </div>

            </div>
            <div className="flex shrink-0  items-center gap-5 text-xl">
                <BsCameraVideo />
                <IoAppsSharp />
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