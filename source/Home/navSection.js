import Image from "next/image";

export default function NavSection(props)
{
    return (
        <div className=" flex flex-row justify-between items-center xl:px-[5%] lg:px-[3%] md:px-[3%] px-[5%] md:py-[2%] py-[4%]">
            <div className=" flex flex-row items-center">
                <div className="bg-white">
                    {/* <div className=" aspect-square w-[55px] bg-[url(/logo.png)] bg-cover bg-norepeat"></div> */}
                    <Image src="/logo.png" alt="" width={55} height={55} className="bg-white mr-2"/>
                </div>
                <h2 className="text-xl font-bold">PRORANGE</h2>
            </div>
            
            <ul className=" hidden lg:flex flex-row justify-between items-center xl:w-[30vw] lg:w-[47vw] font-medium">
                <li className="">Home</li>
                <li className="">About Us</li>
                <li className="">Our Services</li>
                <li className="">Pricing</li>
                <li className="">Our Team</li>
                <li className="">FAQs</li>                
            </ul>

            <div className="lg:hidden flex flex-row justify-between items-center  md:w-[5vw] md:h-[4vw] w-[8vw] h-[7vw] border-t-4 border-b-4">
                    <div className="border-t-4 w-full"></div>
            </div>
        </div>
    );
}