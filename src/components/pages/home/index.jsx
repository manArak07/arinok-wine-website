import { useFetch } from "../../../providers/hooks/fetch"
import { useTheme } from "../../../providers/theme"

export default function Home() {
    const darkTheme = useTheme()
    const { data: news, loading: newsLoading, error: newsError } = useFetch('sports')
    return (
        <div className={`${darkTheme ? "bg-[#333]" : "bg-cream"} font-pop flex justify-center h-[700px] w-full`}>
            <div className="w-[90%] h-[500px] flex ">
                <div className="w-1/2 min-h-screen  ">
                    <h1 className={`text-4xl xl:text-2xl font-bold lg:text-[15px] st:text-[10px] ${darkTheme ? "text-cream" : "text-black"}`}>POPULAR NEWS</h1>

                    <div className="mt-5">
                        {newsLoading ? (<div>Loading...</div>) : (
                            news.articles.slice(0, 1).map(({ title, urlToImage, author }) => (
                                <div className="flex lg:flex-col">

                                    <div className="relative mt-5 w-[100%]">
                                        <img className="w-56 relative z-50 sm:w-48" src={urlToImage === null ? "https://s.france24.com/media/display/e6279b3c-db08-11ee-b7f5-005056bf30b7/w:1280/p:16x9/news_en_1920x1080.jpg" : urlToImage} alt="Popular news image" />
                                        <div className="w-[200px] l:w-[150px] l:h-24 l:bottom-12  h-32 xl:h-28 bottom-5 -left-3 absolute border   border-black lg:hidden"></div>
                                    </div>
                                    <div className="flex mt-5 flex-col items-center justify-around lg:items-start ">
                                        <div className="w-[70%] st:w-full">
                                            <h2 className={`font-bold xl:text-sm lg:text-[12px]  st:font-normal st:text-[10px] ${darkTheme ? "text-cream" : "text-black"} `}>{title.toUpperCase()}</h2>

                                        </div>

                                        <div className="flex items-center w-[80%]">
                                            <div className="rounded-full w-6 xl:w-4 h-6 xl:h-4 bg-[#cf5f5f] sm:h-2 sm:w-2"></div>
                                            <div className={`ml-3 font-bold ${darkTheme ? "text-cream" : "text-black"} xl:text-[10px] sm:text-[7px] sm:ml-1`}>{author} / </div>
                                            <div className="ml-3 text-lGrey font-bold text-sm l:text-[10px] sm:ml-0 sm:text-[7px]">NEWS AUTHOR</div>
                                        </div>
                                    </div>


                                </div>
                            ))
                        )}
                    </div>

                    <div className="mt-5">
                        {newsLoading ? (<div>Loading...</div>) : (
                            news.articles.slice(1, 2).map(({ title, urlToImage, author }) => (
                                <div className="flex lg:flex-col">


                                    <div className="flex mt-5 flex-col items-center justify-around lg:items-end">
                                        <div className="w-[70%] st:w-full">
                                            <h2 className={`font-bold xl:text-sm lg:text-[12px] lg:text-right st:font-normal st:text-[10px] ${darkTheme ? "text-cream" : "text-black"}`}>{title.toUpperCase()}</h2>

                                        </div>

                                        <div className="flex items-center w-[80%] lg:justify-end">
                                            <div className="rounded-full w-6 h-6 bg-[#cccc21] xl:w-4 xl:h-4 sm:h-2 sm:w-2"></div>
                                            <div className={`ml-3 font-bold ${darkTheme ? "text-cream" : "text-black"} xl:text-[10px] sm:text-[7px] sm:ml-1`}>{author} / </div>
                                            <div className="ml-3 text-lGrey font-bold text-sm xl:text-[10px] sm:text-[7px] sm:ml-0">NEWS AUTHOR</div>
                                        </div>
                                    </div>

                                    <div className="relative mt-5 w-[100%] lg:flex lg:justify-end">
                                        <img className="w-56  relative z-50 sm:w-48" src={urlToImage === null ? "https://s.france24.com/media/display/e6279b3c-db08-11ee-b7f5-005056bf30b7/w:1280/p:16x9/news_en_1920x1080.jpg" : urlToImage} alt="Popular news image" />
                                        <div className="w-[200px]  h-32 xl:h-28 xl:w-[150px] l:w-[130px] l:h-16 l:bottom-14 bottom-3 -left-3 absolute border  border-black lg:hidden"></div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                </div>

                <div className="w-1/2 flex flex-col">
                    <div className="flex items-center">
                        <h1 className={`text-4xl xl:text-2xl lg:text-[15px] font-bold ml-5 st:text-[10px] ${darkTheme ? "text-cream" : "text-black"}`}>HOT NEWS</h1>
                        <div className="h-[1px] w-[60%] bg-lGrey ml-2"></div>
                    </div>

                    {newsLoading ? (<div>Loading...</div>) : (
                        news.articles.slice(2, 3).map(({ title, urlToImage, author }) => (
                            <div className="flex flex-col">
                                <div className=" w-4/5 relative mt-5">
                                    <img className="w-96 relative ml-10 z-50 xl:w-80 lg:w-72" src={urlToImage === null ? "https://s.france24.com/media/display/e6279b3c-db08-11ee-b7f5-005056bf30b7/w:1280/p:16x9/news_en_1920x1080.jpg" : urlToImage} alt="Popular news image" />
                                    <div className="w-[400px] xl:w-80 ml-10 h-56 xl:h-44 -bottom-3 left-3 absolute border  border-black lg:hidden"></div>
                                </div>

                                <div className="flex mt-5 flex-col items-center justify-around ">
                                    <div className="w-[70%] st:w-[90%] st:ml-14 xs:w-[85%]">
                                        <h2 className={`${darkTheme ? "text-cream" : "text-black"} font-bold xl:text-sm lg:text-[12px] st:font-normal st:text-[10px] xs:text-[8px]`}>{title.toUpperCase()}</h2>

                                    </div>

                                    <div className="flex h-20 items-center w-[80%]">
                                        <div className="rounded-full w-6 h-6 bg-[#cccc21] xl:w-4 xl:h-4 sm:h-2 sm:w-2"></div>
                                        <div className={`${darkTheme ? "text-cream" : "text-black"} ml-3 font-bold xl:text-[10px] sm:text-[7px] sm:ml-1`}>{author} / </div>
                                        <div className="ml-3 text-lGrey font-bold text-sm l:text-[10px] sm:text-[7px] sm:ml-0">NEWS AUTHOR</div>
                                    </div>
                                </div>


                            </div>
                        ))
                    )}

                    <div className="flex ml-20 w-72 h-20 justify-around lg:ml-0 sm:w-56 st:w-40 xs:w-32">
                        <div style={{boxShadow: "6px 6px"}} className="w-10 lg:w-8 lg:h-8 st:h-4 st:w-4 flex justify-center items-center h-10 bg-[#db5a5a]">
                            <p className="text-2xl font-bold st:text-[8px]">...</p>
                        </div>
                        <div style={{boxShadow: "2px 2px"}} className="w-10 lg:w-8 lg:h-8 st:h-4 st:w-4 flex justify-center items-center h-10 border border-black">
                            <p className="text-2xl font-bold st:text-[8px]">^</p>
                        </div>
                        <div style={{boxShadow: "0px 0px 4px 4px"}} className="w-10 lg:w-8 lg:h-8 st:h-4 st:w-4  flex justify-center items-center h-10 bg-[#e6da54]">
                            <p className="text-2xl font-bold st:text-[8px]">/.</p>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    )
}