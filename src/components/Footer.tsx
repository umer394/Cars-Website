import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer(){
    return (
        <footer className="bg-[#131313] overflow-clip ">
            <div className="md:flex text-white py-10 max-w-[1200px] px-4 mx-10 space-y-20 md:space-y-0 md:mx-auto justify-between" >
                <div className="md:max-w-[180px] lg:max-w-[250px]">
                <h1 className="font-bold text-2xl text-orange-400">UMER BLOG</h1>
                <p className="my-4 text-sm">Every service is rigorously screened and constantly rated to ensure you get the best service.</p>
                <h2 className="text-sm text-gray-400">Support center 24/7</h2>
                <h3 className="text-xl font-bold">+923353945855</h3>
                </div>
                <div className="">
                <h1 className="font-bold  text-2xl text-orange-400">Popular Services</h1>
                    <div className="flex  justify-between  mt-4 gap-2 md:gap-4 lg:gap-10">
                    <ul  className="space-y-2 list-disc pl-6 font-semibold cursor-pointer text-sm md:text-md" >
                        <li className="marker:text-orange-400 text-white hover:text-[#d67e1afd]">Tire Repair</li>
                        <li className="marker:text-orange-400 text-white hover:text-[#d67e1afd]">Brake Repair</li>
                        <li className="marker:text-orange-400 text-white hover:text-[#d67e1afd]">Engine Repair</li>
                        <li className="marker:text-orange-400 text-white hover:text-[#d67e1afd]">Steering Repair</li>
                    </ul>
                    <ul  className="space-y-2 list-disc pl-6 font-semibold cursor-pointer text-sm md:text-md" >
                        <li className="marker:text-orange-400 text-white hover:text-[#d67e1afd] ">Cooling System</li>
                        <li className="marker:text-orange-400 text-white hover:text-[#d67e1afd]">Wheel Allignment</li>
                        <li className="marker:text-orange-400 text-white hover:text-[#d67e1afd]">Battery Starting</li>
                        <li className="marker:text-orange-400 text-white hover:text-[#d67e1afd]">Suspension Repair</li>
                       
                    </ul>
                    </div>
                
                </div>
                <div className="">
                <h1 className="font-bold text-2xl text-orange-400 mb-5">SUBSCIBE</h1>
                <label htmlFor="name" className="font-bold text-sm ">YOUR EMAIL</label>
                <Input className="border-[#444240fd] mb-5 px-8" placeholder="Enter Your Email Address"/>
                <Button  variant={"secondary"}  className="text-white text-lg font-mono px-10 py-5 bg-[#d67e1afd] hover:bg-[#121212]">Subscribe</Button>
                </div>
            </div>
        </footer>
    )
}