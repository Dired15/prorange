import Image from "next/image";


export default function FooterSection(props)
{
    return (
        <div className=" xl:px-[8%] lg:px-[5%] py-[7%] bg-black text-white flex flex-col">
            <div className="flex flex-row justify-between mb-24">
                 <div className=" flex flex-row items-center">
                                <div className="">
                                    {/* <div className=" aspect-square w-[55px] bg-[url(/logo.png)] bg-cover bg-norepeat"></div> */}
                                    <Image src="/logo.png" alt="" width={55} height={55} className="bg-white mr-2"/>
                                </div>
                                <h2 className="text-xl font-bold">PRORANGE</h2>
                            </div>
                <div className="  w-[60vw] flex flex-row justify-between">
                    <h3 className="font-bold text-4xl ">Quality painting & decorating services</h3>
                    <div className="w-[20%] "></div>
                </div>
                
            </div>
            <div className="flex flex-row justify-between">
                <form>
                    <label>Newsletter Signup</label>
                    <div>
                        <div></div>
                        <input/>
                        <div></div>
                    </div>
                    <div></div>
                </form>
                <div className=" flex flex-row justify-between  w-[60vw]">
                    <ul className=" flex flex-col ">
                        <li className="text-xl font-medium mb-6">Socials</li>
                        <li className="text-lg  mb-4">Facebook</li>
                        <li className="text-lg  mb-4">Twitter</li>
                        <li className="text-lg  mb-4">Dribble</li>
                        <li className="text-lg  mb-4">Instagram</li>
                    </ul>
                    <ul className=" flex flex-col ">
                        <li className="text-xl font-medium mb-6">Menu</li>
                        <li className="text-lg  mb-4">Home</li>
                        <li className="text-lg  mb-4">Services</li>
                        <li className="text-lg  mb-4">About Us</li>
                        <li className="text-lg  mb-4">Shop</li>
                        <li className="text-lg  mb-4">Contact</li>
                    </ul>
                    <ul className=" flex flex-col ">
                        <li className="text-xl font-medium mb-6">Say Hello</li>
                        <li className="text-lg mb-4">info@email.com</li>
                    </ul>
                    <div className="w-[10%] "></div>
                </div>
            </div>
        </div>
    );
}