
export default function ShopSection(props)
{
    
    return(
        <div className=" xl:px-[5%] lg:px-[3%] md:px-[3%] px-[5%] md:py-[7%] py-[12%] bg-[hsl(48,15%,94%)] ">
            <div className="flex flex-col items-center py-[2%] mb-24">
                <h3 className="font-medium md:mb-4 mb-2 md:text-base text-sm">WE RECOMMEND</h3>
                <h2 className="md:text-5xl text-3xl font-bold mb-12 text-center">Welcome to our shop</h2>
                <ul className="w-full flex md:flex-row flex-col justify-between mb-12 md:flex-wrap">
                    <li className="flex flex-col lg:mb-0 md:mb-16 mb-10">
                        <div className="aspect-7/6 mb-4 lg:w-[20vw] md:w-[45vw] bg-[url(/shopBg.jpg)] bg-cover "></div>
                        <h4 className="font-medium text-xl mb-2">Sky Blue</h4>
                        <p className="font-medium text-lg">$60.00</p>
                    </li>

                    <li className="flex  flex-col lg:mb-0 md:mb-16 mb-10">
                        <div className="aspect-7/6 mb-4 lg:w-[20vw] md:w-[45vw] bg-[url(/shopBg2.jpg)] bg-cover "></div>
                        <h4 className="font-medium text-xl mb-2">Chiffon cream</h4>
                        <p className="font-medium text-lg">$100.00</p>
                    </li>

                    <li className="flex  flex-col md:mb-0 mb-10">
                        <div className="aspect-7/6 mb-4 lg:w-[20vw] md:w-[45vw] bg-[url(/shopBg3.jpg)] bg-cover "></div>
                        <h4 className="font-medium text-lg mb-2">Bright Yellow</h4>
                        <p className="font-medium text-lg">$42.00</p>
                    </li>

                    <li className="flex  flex-col ">
                        <div className="aspect-7/6 mb-4 lg:w-[20vw] md:w-[45vw] bg-[url(/heroSectionBg.jpg)] bg-cover bg-center "></div>
                        <h4 className="font-medium text-lg mb-2">Coastal Blue</h4>
                        <p className="font-medium text-lg">$50.00</p>
                    </li>
                </ul>
                <button className="text-white font-bold text-lg px-10 py-4 bg-[hsl(29,60%,63%)]">View More Products</button>    
            </div>
            
            <div className="md:aspect-16/6 aspect-5/4 w-full bg-[url(/shopBg5.jpg)] bg-cover bg-center mb-32"></div>
            <div>
                <ul className="flex md:flex-row flex-col justify-between w-full">
                    <li className="md:mb-0 mb-10">
                        <div className="aspect-square  lg:w-[6vw] md:w-[8vw] w-[15vw] bg-[url(/shopIcon.png)] bg-cover md:mb-4 mb-2"></div>
                        <h4 className="text-2xl font-medium md:mb-4 mb-2">Quick Selection</h4>
                        <p className="text-lg xl:w-full lg:w-[80%] ">Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </li>
                    <li className="md:mb-0 mb-10">
                        <div className="aspect-square  lg:w-[6vw] md:w-[8vw] w-[15vw] bg-[url(/shopIcon2.png)] bg-cover md:mb-4 mb-2"></div>
                        <h4 className="text-2xl font-medium md:mb-4 mb-2">Convenient packing</h4>
                        <p className="text-lg xl:w-full lg:w-[80%] ">Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </li>
                    <li className="md:mb-0 mb-10">
                        <div className="aspect-square  lg:w-[6vw] md:w-[8vw] w-[15vw] bg-[url(/shopIcon3.png)] bg-cover md:mb-4 mb-2"></div>
                        <h4 className="text-2xl font-medium md:mb-4 mb-2">Calculate delivery free</h4>
                        <p className="text-lg xl:w-full lg:w-[80%] ">Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}