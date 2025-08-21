

export default function ServiceSection(props)
{
    return (
        <div className=" xl:px-[5%] lg:px-[3%] md:px-[3%] py-[7%]">
            <div className="  py-[2%] flex flex-col items-center ">
                <h3 className="font-medium mb-4">WHAT WE OFFER</h3>
                <h2 className="text-5xl font-bold mb-12">Welcome to ProRange</h2>
                <ul className="flex flex-row justify-between w-full  mb-12">

                    <li className="flex flex-col w-[30%] border-b-1">
                        <div className="w-full aspect-6/4 bg-[url(/serviceBg.jpg)] bg-center bg-cover "></div>
                        <div className="flex flex-row justify-between">
                            <div className="py-5">
                                <h3 className="text-2xl md:hidden lg:flex font-medium">01.Color Consultation</h3>
                                <h3 className="text-2xl md:flex lg:hidden font-medium">Color Consultation</h3>
                            </div>
                            <button></button>
                        </div>
                    </li>

                    <li className="flex flex-col w-[30%]  border-b-1">
                        <div className="w-full aspect-6/4 bg-[url(/serviceBg3.jpg)] bg-center bg-cover "></div>
                        <div className="flex flex-row justify-between">
                            <div className="py-5">
                                <h3 className="text-2xl md:hidden lg:flex font-medium">02.Interior painting</h3>
                                <h3 className="text-2xl md:flex lg:hidden font-medium">Interior painting</h3>
                            </div>
                            <button></button>
                        </div>
                    </li>
                    
                    <li className="flex flex-col w-[30%] border-b-1">
                        <div className="w-full aspect-6/4 bg-[url(/serviceBg2.jpg)] bg-center bg-cover "></div>
                        <div className="flex flex-row justify-between">
                            <div className="py-5">
                                <h3 className="text-2xl md:hidden lg:flex font-medium">03.Drywall repair</h3>
                                <h3 className="text-2xl md:flex lg:hidden font-medium">Drywall repair</h3>
                            </div>
                            <button></button>
                        </div>
                    </li>
                </ul>
                <button className="text-white font-bold text-lg px-10 py-4 bg-[hsl(29,60%,63%)]">More Services</button>    
            </div>
            <div className="py-[10%]">
                <div className=" flex flex-row justify-between">
                    <div className="lg:w-1/2 md:w-[45%]">
                        <div className="aspect-6/8 xl:w-[35vw] lg:w-[35vw] md:w-[35vw]  bg-[url(/qualityBg.jpg)] bg-cover bg-bottom "></div>
                    </div>
                    <div className="lg:w-1/2 flex-1 ">
                        <div className="flex flex-col xl:mb-50 lg:mb-30 md:mb-20">
                            <h3 className="text-lg font-medium mb-4">PREMIUM QUALITY</h3>
                            <h2 className="lg:text-5xl md:text-4xl font-bold mb-8">Uncover a spectrum of possibilities</h2>
                            <p className="md:text-lg">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                                sed quia. Dicta sunt explicabo.</p>
                            
                        </div>
                        <div className="aspect-7/4 w-full bg-[url(/qualityBg2.jpg)] bg-bottom bg-cover "></div>
                    </div>   
                </div>
                
                <ul className="flex flex-row justify-between">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            
        </div>
    );
}