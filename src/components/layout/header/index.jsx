import { Link, useParams } from "react-router-dom";
import navBar from "../../../providers/nav-bar";
import { useFetch } from "../../../providers/hooks/fetch";
import newsNav from "../../../providers/news-nav";
import { useTheme, useThemeUpdate } from "../../../providers/theme";

export default function Header() {
    const darkTheme = useTheme()
    const toggle = useThemeUpdate()
    console.log(darkTheme);
    const { ctg } = useParams()
    const style = {
        backgroundColor: darkTheme ? "#333" : "#e7d5b2",
    }
    return (
        <header style={style} className={`w-full flex justify-center h-96  font-pop`}>
            <div className="w-[90%]">

                <div className="h-32 w-full flex justify-between items-center">
                    <div className="w-48 border-lGrey border-r">
                        <h1 className={`${darkTheme ? "text-cream" : "text-black"} text-4xl`}>Lo.News</h1>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={`size-8 ${darkTheme ? "text-cream" : "text-black"}`} stroke-width="1.5" stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                        </svg>
                        <nav>
                            {navBar.map(({ path, title, id }) => (
                                <Link className={`${id == 2 ? `text-black ml-5 ${darkTheme ? "bg-[#59777e]" : "bg-lPink"} text-2xl  w-10n` : "ml-5 text-[#a39a9a] text-2xl"} ${darkTheme ? "text-[#eee7b7]" : "text-lGrey"}`} key={title} to={path}>{title}</Link>
                            ))}
                        </nav>
                    </div>
                    <div className="flex items-center ">
                        <Link to="#">
                            <button style={{ boxShadow: "8px 8px" }} className={`w-32 h-10 ${darkTheme ? "shadow-cream border-cream text-white" :  "shadow-black border-black"}  border-2 `}>
                                Contact us
                            </button>
                        </Link>

                        <div className="ml-5">
                            <button onClick={toggle}>
                                {darkTheme ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 text-cream">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                                </svg>
                                ) : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                                </svg>)}

                            </button>


                        </div>
                    </div>
                </div>

                <div className="w-full  mt-10 outline-none h-16 grid grid-cols-3 focus:outline-none">
                    <div className="h-[1px]  bg-lGrey"></div>
                    <div className={`${darkTheme ? "text-cream" : "text-black"} flex justify-center items-center h-[1px] relative`}>
                        <h1 className="text-5xl relative z-10">TODAY
                            <span className="relative z-10"> NEWS
                                <div className={`absolute top-6 left-5 w-4/5 h-10 ${darkTheme ? "bg-[#59777e]" : "bg-lPink"} -z-30`}></div>
                            </span>
                        </h1>
                    </div>
                    <div className="h-[1px]  bg-lGrey" ></div>
                </div>


                <div className="h-24 w-full flex items-center">
                    <form className="flex ">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`size-8 ${darkTheme ? "text-cream" : "text-black"}`}>
                                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                        <input type="text" name="search" placeholder="SEARCH" className={`h-8 placeholder:p ${darkTheme ? "bg-[#333] placeholder:text-white text-white" : "bg-cream placeholder:text-lGrey text-black"}  `} />
                    </form>
                    <nav className="flex transition-all">
                        {newsNav.map(({ title, id }) => (
                            <Link key={id} to={`/news/${title}`}>
                                <h5 className={`ml-8 text-xl ${darkTheme ? "text-cream" : "text-lGrey"} transition-all hover:text-black ${ctg === title ? `border-b-2 ${darkTheme ? "border-cream" : "border-black"} ` : null}`}>{title}</h5>
                            </Link>
                        ))}
                    </nav>
                </div>

            </div>


        </header>
    )
}
