
export default function BlogSection(props)
{
    return(
        <div className="px-[5%] py-[7%] ">
            <div className="flex flex-col items-center py-[2%]">
                <h3 className="font-medium mb-4">OUR BLOG</h3>
                <h2 className="text-5xl font-bold mb-12">Latest news</h2>
                <ul className="flex flex-row justify-between w-full">

                    <li className="flex flex-col   ">
                        <div className="aspect-6/4 w-[25vw] bg-[url(/blogBg.jpg)] bg-cover mb-6"></div>
                        <div className="flex flex-row items-center mb-2">
                            <div className="  w-[3vw] ">
                                <div className="border-b-4 w-[70%] border-black"></div>
                            </div>
                            <h5 className="text-sm font-medium mr-3">PAINTING</h5>
                            <p className="">Apr 21,2022</p>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-[3vw]"></div>
                            <h4 className="text-2xl font-bold w-[80%]">Painting to match your home's exterior</h4>
                        </div>
                        
                    </li>

                    <li className="flex flex-col " >
                        <div className="aspect-6/4 w-[25vw] bg-[url(/blogBg.jpg)] bg-cover mb-6"></div>
                        <div className="flex flex-row items-center mb-2">
                            <div className="  w-[3vw] ">
                                <div className="border-b-4 w-[70%] border-black"></div>
                            </div>
                            <h5 className="text-sm font-medium mr-3">PAINTING</h5>
                            <p className="">Apr 21,2022</p>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-[3vw]"></div>
                            <h4 className="text-2xl font-bold w-[80%]">Painting to match your home's exterior</h4>
                        </div>
                    </li>
                    
                    <li className="flex flex-col " >
                        <div className="aspect-6/4 w-[25vw] bg-[url(/blogBg.jpg)] bg-cover mb-6"></div>
                        <div className="flex flex-row items-center mb-2">
                            <div className="  w-[3vw] ">
                                <div className="border-b-4 w-[70%] border-black"></div>
                            </div>
                            <h5 className="text-sm font-medium mr-3">PAINTING</h5>
                            <p className="">Apr 21,2022</p>
                        </div>
                        <div className="flex flex-row">
                            <div className="w-[3vw]"></div>
                            <h4 className="text-2xl font-bold w-[80%]">Painting to match your home's exterior</h4>
                        </div>
                    </li>
                    
                </ul>    
            </div>
            
        </div>
    );
}