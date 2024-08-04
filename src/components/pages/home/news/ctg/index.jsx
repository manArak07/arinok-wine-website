import { Link, useParams } from "react-router-dom"
import { useFetch } from "../../../../../providers/hooks/fetch"
import { useTheme } from "../../../../../providers/theme"

export default function NewsCtg() {
    const darkTheme = useTheme()
    const { ctg } = useParams()
    const req = ctg.toLowerCase()
    const { data: newsCtg, loading: newsCtgLoad, error: newsCtgError } = useFetch(req)

    return (
        <div className={`${darkTheme ? "bg-[#333]" : "bg-cream"} font-pop min-h-screen flex justify-center w-full`}>
            <div className="w-[90%] min-h-screen grid grid-cols-2 grid-rows-4 sm:grid-cols-1 sm:grid-rows-8">
                {newsCtgLoad ? (<div>Loadng...</div>) : (
                    newsCtg.articles.slice(0, 8).map(({ title, url, urlToImage, author, source }) => (
                        <Link to={url} key={title} className="flex mt-10 flex-col items-center">
                            <div className="flex justify-between w-96 lg:w-80 md:w-64">
                                <div className="flex items-center">
                                    <div className={`w-6 h-6 lg:w-4 lg:h-4 rounded-full ${darkTheme ? "bg-[#59777e]" : "bg-[#dd8787]"}`}></div>
                                    <p className={`${darkTheme ? "text-cream" : "text-black"} lg:text-[14px] md:text-[8px]` }>{author}</p>
                                </div>
                                <div className="">
                                    <p className="text-lGrey font-bold lg:text-[10px] md:text-[8px]">Source:{source.name}</p>
                                </div>
                            </div>
                            <div>
                                <img className="w-96 lg:w-80 md:w-64" src={urlToImage === null ? "https://s.france24.com/media/display/e6279b3c-db08-11ee-b7f5-005056bf30b7/w:1280/p:16x9/news_en_1920x1080.jpg" : urlToImage} alt="" />
                            </div>
                            <div className="flex justify-center text-center w-[70%]">
                                <p className={` ${darkTheme ? "text-cream" : "text-black"} font-bold lg:text-sm md:text-[12px]`}>{title}</p>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </div>
    )
}