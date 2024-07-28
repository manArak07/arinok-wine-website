import { Link } from "react-router-dom";
import navBar from "../../../providers/nav-bar";

export default function Header() {
    return (
        <header className="w-full flex justify-center h-96 bg-[#e7d5b2] font-pop">
            <div className="w-[90%]">
                <div className="h-32 w-full flex justify-between items-center">
                    <div className="w-48 border-lGrey border-r">
                        <h1 className="text-4xl">Lo.News</h1>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
                        </svg>
                        <nav>
                            {navBar.map(({ path, title, id }) => (
                                <Link className={`${id == 2 ? "text-black ml-5 text-2xl bg-lPink w-10n" : "ml-5 text-[#a39a9a] text-2xl"}`} key={title} to={path}>{title}</Link>
                            ))}
                        </nav>
                    </div>
                    <div>
                        <Link to="#">
                            <button style={{ boxShadow: "8px 8px" }} className="w-32 h-10  shadow-black border-2 border-black">
                                Contact us
                            </button>
                        </Link>

                    </div>
                </div>

                <div className="w-full mt-10  h-32 grid grid-cols-3">
                    <div className="h-[1px]  bg-lGrey"></div>
                    <div className="flex justify-center items-center h-[1px] relative">
                        <h1 className="text-5xl relative z-10">TODAY  
                            <span className="relative z-10"> NEWS
                                <div className="absolute top-6 left-5 w-4/5 h-10 bg-lPink -z-30"></div>
                            </span>
                        </h1>
                    </div>
                    <div className="h-[1px]  bg-lGrey" ></div>
                </div>


                <div className="h-24 w-full">

                </div>

            </div>


        </header>
    )
}
