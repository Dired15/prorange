

export default function HeroSection(props)
{
    return (
        <div className=" xl:px-[5%] lg:px-[3%] md:px-[3%]">
            <div className="  aspect-16/9 flex flex-col justify-center px-[4%] bg-[url(/heroSectionBg3.jpg)] bg-bottom bg-cover bg-no-repeat ">

                <div className=" xl:w-1/2 lg:w-[80%] md:w-[80%] ">
                    <h2 className="text-white lg:text-6xl md:text-4xl font-bold w-[80%] mb-10">Discover the perfect paints for your projects</h2>
                    <p className="text-white text-lg mb-10 w-[90%]">Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.</p>
                    <button className="text-white font-bold text-lg px-10 py-4 bg-[hsl(29,60%,63%)] ">Shop Now</button>
                </div>

            </div>
        </div>
    );
}