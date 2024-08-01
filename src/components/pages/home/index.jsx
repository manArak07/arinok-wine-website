import { useFetch } from "../../../providers/hooks/fetch"
import { useTheme } from "../../../providers/theme"

export default function Home() {
    const darkTheme = useTheme()
    const { data: news, loading: newsLoading, error: newsError } = useFetch('sports')
    return (
        <div className={`${darkTheme ? "bg-[#333]" : "bg-cream"} font-pop flex justify-center min-h-screen w-full`}>
            <div className="w-[90%] h-[500px] flex ">
                <div className="w-1/2 h-full  ">
                    <h1 className={`text-4xl font-bold ${darkTheme ? "text-cream" : "text-black"}`}>POPULAR NEWS</h1>

                    <div className="mt-5">
                        {newsLoading ? (<div>Loading...</div>) : (
                            news.articles.slice(0, 1).map(({ title, urlToImage, author }) => (
                                <div className="flex ">

                                    <div className="relative mt-5 w-[100%]">
                                        <img className="w-full relative z-50" src={urlToImage === null ? "https://s.france24.com/media/display/e6279b3c-db08-11ee-b7f5-005056bf30b7/w:1280/p:16x9/news_en_1920x1080.jpg" : urlToImage} alt="Popular news image" />
                                        <div className="w-full  h-32 bottom-5 -left-3 absolute border  border-black"></div>
                                    </div>
                                    <div className="flex mt-5 flex-col items-center justify-around ">
                                        <div className="w-[70%]">
                                            <h2 className={`font-bold ${darkTheme ? "text-cream" : "text-black"} `}>{title.toUpperCase()}</h2>

                                        </div>

                                        <div className="flex items-center w-[80%]">
                                            <div className="rounded-full w-6 h-6 bg-[#cf5f5f]"></div>
                                            <div className={`ml-3 font-bold ${darkTheme ? "text-cream" : "text-black"}`}>{author} / </div>
                                            <div className="ml-3 text-lGrey font-bold text-sm">NEWS AUTHOR</div>
                                        </div>
                                    </div>


                                </div>
                            ))
                        )}
                    </div>

                    <div className="mt-5">
                        {newsLoading ? (<div>Loading...</div>) : (
                            news.articles.slice(1, 2).map(({ title, urlToImage, author }) => (
                                <div className="flex ">


                                    <div className="flex mt-5 flex-col items-center justify-around ">
                                        <div className="w-[70%]">
                                            <h2 className={`font-bold ${darkTheme ? "text-cream" : "text-black"}`}>{title.toUpperCase()}</h2>

                                        </div>

                                        <div className="flex items-center w-[80%]">
                                            <div className="rounded-full w-6 h-6 bg-[#cccc21]"></div>
                                            <div className={`ml-3 font-bold ${darkTheme ? "text-cream" : "text-black"} `}>{author} / </div>
                                            <div className="ml-3 text-lGrey font-bold text-sm">NEWS AUTHOR</div>
                                        </div>
                                    </div>

                                    <div className="relative mt-5 w-[100%]">
                                        <img className="w-full relative z-50" src={urlToImage === null ? "https://s.france24.com/media/display/e6279b3c-db08-11ee-b7f5-005056bf30b7/w:1280/p:16x9/news_en_1920x1080.jpg" : urlToImage} alt="Popular news image" />
                                        <div className="w-full  h-36 bottom-3 -left-3 absolute border  border-black"></div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                </div>

                <div className="w-1/2 flex flex-col">
                    <div className="flex items-center">
                        <h1 className={`text-4xl font-bold ml-5 ${darkTheme ? "text-cream" : "text-black"}`}>HOT NEWS</h1>
                        <div className="h-[1px] w-[60%] bg-lGrey ml-2"></div>
                    </div>

                    {newsLoading ? (<div>Loading...</div>) : (
                        news.articles.slice(2, 3).map(({ title, urlToImage, author }) => (
                            <div className="flex flex-col">
                                <div className=" w-4/5 relative mt-5">
                                    <img className="w-96 relative ml-10 z-50" src={urlToImage === null ? "https://s.france24.com/media/display/e6279b3c-db08-11ee-b7f5-005056bf30b7/w:1280/p:16x9/news_en_1920x1080.jpg" : urlToImage} alt="Popular news image" />
                                    <div className="w-[400px] ml-10 h-56 -bottom-3 left-3 absolute border  border-black"></div>
                                </div>

                                <div className="flex mt-5 flex-col items-center justify-around ">
                                    <div className="w-[70%]">
                                        <h2 className={`${darkTheme ? "text-cream" : "text-black"} font-bold `}>{title.toUpperCase()}</h2>

                                    </div>

                                    <div className="flex h-20 items-center w-[80%]">
                                        <div className="rounded-full w-6 h-6 bg-[#cccc21]"></div>
                                        <div className={`${darkTheme ? "text-cream" : "text-black"} ml-3 font-bold`}>{author} / </div>
                                        <div className="ml-3 text-lGrey font-bold text-sm">NEWS AUTHOR</div>
                                    </div>
                                </div>


                            </div>
                        ))
                    )}

                    <div className="flex ml-20 w-72 h-20 justify-around">
                        <div style={{boxShadow: "6px 6px"}} className="w-10 flex justify-center items-center h-10 bg-[#db5a5a]">
                            <p className="text-2xl font-bold">...</p>
                        </div>
                        <div style={{boxShadow: "2px 2px"}} className="w-10 flex justify-center items-center h-10 border border-black">
                            <p className="text-2xl font-bold">^</p>
                        </div>
                        <div style={{boxShadow: "0px 0px 4px 4px"}} className="w-10 flex justify-center items-center h-10 bg-[#e6da54]">
                            <p className="text-2xl font-bold">/.</p>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}