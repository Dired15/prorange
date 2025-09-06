
export default function BlogSection(props)
{
    return(
        <div className="xl:px-[5%] lg:px-[3%] md:px-[3%] px-[5%] md:py-[7%] py-[12%] ">
            <div className="flex flex-col items-center py-[2%]">
                <h3 className="font-medium md:mb-4 mb-2 md:text-base text-sm">OUR BLOG</h3>
                <h2 className="md:text-5xl text-3xl font-bold mb-12 text-center">Latest news</h2>
                <div className="w-full">
                    <ul className="w-full flex flex-row  justify-between overflow-x-auto  max-h-[90vw]">

                        <li className="flex flex-col md:mr-0 mr-10">
                            <div className="aspect-6/4 md:w-[25vw] w-[90vw] bg-[url(/blogBg.jpg)] bg-cover mb-6"></div>
                            <div className="flex flex-row items-center mb-2">
                                <div className=" md:w-[3vw] w-[10vw] ">
                                    <div className="border-b-4 w-[70%] border-black"></div>
                                </div>
                                <h5 className="text-sm font-medium mr-3">PAINTING</h5>
                                <p className="">Apr 21,2022</p>
                            </div>
                            <div className="flex flex-row">
                                <div className="md:w-[3vw] w-[10vw]"></div>
                                <h4 className="text-2xl font-bold w-[80%]">Painting to match your home's exterior</h4>
                            </div>
                            
                        </li>

                        <li className="flex flex-col md:mr-0 mr-10 " >
                            <div className="aspect-6/4 md:w-[25vw] w-[90vw] bg-[url(/blogBg.jpg)] bg-cover mb-6"></div>
                            <div className="flex flex-row items-center mb-2">
                                <div className="  md:w-[3vw] w-[10vw]  ">
                                    <div className="border-b-4 w-[70%] border-black"></div>
                                </div>
                                <h5 className="text-sm font-medium mr-3">PAINTING</h5>
                                <p className="">Apr 21,2022</p>
                            </div>
                            <div className="flex flex-row">
                                <div className="md:w-[3vw] w-[10vw]"></div>
                                <h4 className="text-2xl font-bold w-[80%]">Painting to match your home's exterior</h4>
                            </div>
                        </li>
                        
                        <li className="flex flex-col " >
                            <div className="aspect-6/4 md:w-[25vw] w-[90vw] bg-[url(/blogBg.jpg)] bg-cover mb-6"></div>
                            <div className="flex flex-row items-center mb-2">
                                <div className="md:w-[3vw] w-[10vw] ">
                                    <div className="border-b-4 w-[70%] border-black"></div>
                                </div>
                                <h5 className="text-sm font-medium mr-3">PAINTING</h5>
                                <p className="">Apr 21,2022</p>
                            </div>
                            <div className="flex flex-row">
                                <div className="md:w-[3vw] w-[10vw]"></div>
                                <h4 className="text-2xl font-bold w-[80%]">Painting to match your home's exterior</h4>
                            </div>
                        </li>
                        
                    </ul>     
                </div>
                   
            </div>
            
        </div>
    );
}