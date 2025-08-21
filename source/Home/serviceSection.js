

export default function ServiceSection(props)
{
    return (
        <div className=" xl:px-[5%] lg:px-[3%] md:px-[3%] px-[5%] md:py-[7%] py-[12%]">
            <div className="  py-[2%] flex flex-col items-center ">
                <h3 className="font-medium md:mb-4 mb-2 md:text-base text-sm">WHAT WE OFFER</h3>
                <h2 className="md:text-5xl text-3xl font-bold mb-12 text-center">Welcome to ProRange</h2>
                <ul className="flex md:flex-row flex-col justify-between w-full  mb-12">

                    <li className="flex flex-col md:w-[30%] border-b-1 md:mb-0 mb-10">
                        <div className="w-full aspect-6/4 bg-[url(/serviceBg.jpg)] bg-center bg-cover "></div>
                        <div className="flex flex-row justify-between">
                            <div className="py-5">
                                <h3 className="text-2xl md:hidden hidden lg:flex font-medium">01.Color Consultation</h3>
                                <h3 className="text-2xl md:flex flex lg:hidden font-medium">Color Consultation</h3>
                            </div>
                            <button></button>
                        </div>
                    </li>

                    <li className="flex flex-col md:w-[30%]  border-b-1 md:mb-0 mb-10">
                        <div className="w-full aspect-6/4 bg-[url(/serviceBg3.jpg)] bg-center bg-cover "></div>
                        <div className="flex flex-row justify-between">
                            <div className="py-5">
                                <h3 className="text-2xl md:hidden hidden lg:flex font-medium">02.Interior painting</h3>
                                <h3 className="text-2xl md:flex flex lg:hidden font-medium">Interior painting</h3>
                            </div>
                            <button></button>
                        </div>
                    </li>
                    
                    <li className="flex flex-col md:w-[30%] border-b-1 md:mb-0 ">
                        <div className="w-full aspect-6/4 bg-[url(/serviceBg2.jpg)] bg-center bg-cover "></div>
                        <div className="flex flex-row justify-between">
                            <div className="py-5">
                                <h3 className="text-2xl md:hidden hidden lg:flex font-medium">03.Drywall repair</h3>
                                <h3 className="text-2xl md:flex flex lg:hidden font-medium">Drywall repair</h3>
                            </div>
                            <button></button>
                        </div>
                    </li>
                </ul>
                <button className="text-white font-bold text-lg px-10 py-4 bg-[hsl(29,60%,63%)]">More Services</button>    
            </div>
            <div className="py-[10%]">
                <div className=" flex md:flex-row flex-col justify-between">
                    <div className="lg:w-1/2 md:w-[45%] md:mb-0 mb-7">
                        <div className="md:aspect-6/8 aspect-6/7 xl:w-[35vw] lg:w-[35vw] md:w-[35vw]  bg-[url(/qualityBg.jpg)] bg-cover bg-bottom "></div>
                    </div>
                    <div className="lg:w-1/2 flex-1 ">
                        <div className="flex flex-col xl:mb-50 lg:mb-30 md:mb-20 mb-7">
                            <h3 className="md:text-lg text-base font-medium md:mb-4 mb-2">PREMIUM QUALITY</h3>
                            <h2 className="lg:text-5xl md:text-4xl text-3xl font-bold md:mb-8 mb-5">Uncover a spectrum of possibilities</h2>
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