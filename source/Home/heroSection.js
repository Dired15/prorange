

export default function HeroSection(props)
{
    return (
        <div className=" xl:px-[5%] lg:px-[3%] md:px-[3%] px-[5%]">
            <div className="  xl:aspect-16/7 md:aspect-16/9 aspect-4/5 flex flex-col justify-center px-[4%] bg-[url(/shopBg4.jpg)] bg-center bg-cover bg-no-repeat ">

                <div className=" xl:w-1/2 lg:w-[80%] md:w-[80%] w-full ">
                    <h2 className="text-white lg:text-6xl md:text-4xl text-4xl font-bold md:w-[80%] w-[95%] mb-10">Discover the perfect paints for your projects</h2>
                    <p className="text-white text-lg mb-10 w-[90%]">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                    <button className="text-white font-bold text-lg px-10 py-4 bg-[hsl(29,60%,63%)] ">Shop Now</button>
                </div>

            </div>
        </div>
    );
}