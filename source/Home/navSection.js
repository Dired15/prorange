"use client"

import {useState} from "react";

export default function NavSection(props)
{
    const [navOpen,setNavOpen]=useState(false);

    const handleClick=(e)=>{
        setNavOpen(!navOpen);
    }

    return (
        <div className=" flex flex-row justify-between items-center xl:px-[5%] lg:px-[3%] md:px-[3%] px-[5%] md:py-[2%] py-[4%]">
            <div className=" flex flex-row items-center">
                <div className="bg-white">
                    {/* <div className=" aspect-square w-[55px] bg-[url(/logo.png)] bg-cover bg-norepeat"></div> */}
                    <img src="/logo.png" alt="" width={55} height={55} className="bg-white mr-2"/>
                </div>
                <h2 className="text-xl font-bold">PRORANGE</h2>
            </div>

            <MenuNav display={navOpen} onClick={handleClick}/>
            
            <ul className="  hidden lg:flex flex-row justify-between items-center xl:w-[30vw] lg:w-[47vw] font-medium">
                <li className="">Home</li>
                <li className="">About Us</li>
                <li className="">Our Services</li>
                <li className="">Pricing</li>
                <li className="">Our Team</li>
                <li className="">FAQs</li>                
            </ul>

            <div className="hidden flex flex-row items-center">
                <form>
                    <input/>
                    <div></div>
                </form>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div onClick={handleClick} className="lg:hidden flex flex-row justify-between items-center  md:w-[5vw] md:h-[4vw] w-[8vw] h-[7vw] border-t-4 border-b-4">
                    <div className="border-t-4 w-full"></div>
            </div>
        </div>
    );
}


export function MenuNav(props){

    const display=props.display?" flex flex-col ":" hidden";
    const style=`w-[100vw] h-[100vh] z-300 fixed top-0 left-0 bg-[hsla(0,0%,0%,0.5)] ${display}`;

    return (
        <div className={style} onClick={props.onClick}>
            <div className="h-full w-[80%] text-white bg-black p-15 relative">
                <div className="aspect-square w-[7vw] lg:w-[5vw] absolute right-10 top-10  bg-[url(/closeIcon.png)] bg-cover bg-no-repeat "></div>
                <ul className="flex   flex-col justify-between items-center  text-lg h-[70vh]  font-medium  ">
                <li className="hover:text-[hsl(40,100%,50%)] cursor-pointer">Home</li>
                <li className="hover:text-[hsl(40,100%,50%)] cursor-pointer">Shop</li>
                <li className="hover:text-[hsl(40,100%,50%)] cursor-pointer">Categories</li>
                <li className="hover:text-[hsl(40,100%,50%)] cursor-pointer">Products</li>
                <li className="hover:text-[hsl(40,100%,50%)] cursor-pointer">Top deals</li>
                <li className="hover:text-[hsl(40,100%,50%)] cursor-pointer">FAQs</li>                
            </ul>
            </div>
        </div>
    );
}