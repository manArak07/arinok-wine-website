import { Link, useParams } from "react-router-dom"
import { useFetch } from "../../../../../providers/hooks/fetch"

export default function NewsCtg() {
    const { ctg } = useParams()
    const req = ctg.toLowerCase()
    const { data: newsCtg, loading: newsCtgLoad, error: newsCtgError } = useFetch(req)

    return (
        <div className="bg-cream font-pop min-h-screen flex justify-center w-full">
            <div className="w-[90%] min-h-screen grid grid-cols-2 grid-rows-4">
                {newsCtgLoad ? (<div>Loadng...</div>) : (
                    newsCtg.articles.slice(0, 8).map(({ title, url, urlToImage, author, source }) => (
                        <Link to={url} key={title} className="flex mt-10 flex-col items-center">
                            <div className="flex justify-between w-96">
                                <div className="flex">
                                    <div className="w-6 h-6 rounded-full bg-[#f04e4e]"></div>
                                    <p>{author}</p>
                                </div>
                                <div>
                                    <p className="text-lGrey font-bold">Source:{source.name}</p>
                                </div>
                            </div>
                            <div>
                                <img className="w-96" src={urlToImage === null ? "https://s.france24.com/media/display/e6279b3c-db08-11ee-b7f5-005056bf30b7/w:1280/p:16x9/news_en_1920x1080.jpg" : urlToImage} alt="" />
                            </div>
                            <div className="flex justify-center text-center w-[70%]">
                                <p className="font-bold">{title}</p>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </div>
    )
}