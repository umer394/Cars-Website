import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Contact(){
    return (
        <div className="bg-[#161616]">
            <div className="" style={{
                backgroundImage:"url('/bgabout.jpg')",
                backgroundPosition:"center",
                backgroundSize:"cover",
                width:"100%",
                height:"300px"
            }}>
                
                <div className="flex flex-col  pl-10 pt-28">
                    <div className="flex gap-3 text-lg text-white">
                    <Link href={"/"} className="hover:text-[#d67e1afd]">Blog</Link>
                    <li><Link href={"/about"} className="hover:text-[#d67e1afd]">About</Link></li>
                    <li className="marker:text-[#d67e1afd] text-[#d67e1afd]">Contact</li>
                    </div>
                    
                    <h1 className="text-white text-6xl font-bold font-mono my-auto ">Contact</h1>
                </div>
            </div>
            <main className="bg-[#161616] py-20 max-w-[250px] md:max-w-[650px] lg:max-w-[900px] xl:max-w-[1250px] mx-auto">
            <h1 className="text-white text-3xl md:text-4xl font-serif font-semibold">REQUEST AN APPOINMENT ONLINE</h1>
            <h2 className="text-white text-lg my-10 max-w-lg">After you submit the form,a representive will call you back with the information you'll need to make an appoinment.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4 gap-y-20">
                <div className="flex flex-col max-w-[600px] space-y-2">
                    <label className="text-white" htmlFor="name">YOUR NAME</label>
                    <input type="text" placeholder="Enter Your Name" className="bg-[#161616] p-2 border-b-[1px] text-gray-400 text-sm placeholder:text-sm hover:border-[#d67e1afd] border-gray-800" />
                </div>
                <div className="flex flex-col max-w-[600px] space-y-2">
                    <label htmlFor="email" className="text-white">YOUR EMAIL</label>
                    <input type="text" placeholder="Enter Your Name" className="bg-[#161616] p-2 border-b-[1px] text-gray-400 text-sm placeholder:text-sm hover:border-orange-400 border-gray-800"/>
                </div>
                <div className="flex flex-col max-w-[600px] space-y-2">
                    <label htmlFor="date" className="text-white">SELECT DATE</label>
                    <input type="text" placeholder="Enter Your Name" className="bg-[#161616] p-2 border-b-[1px] text-gray-400 text-sm placeholder:text-sm  hover:border-orange-400  border-gray-800"/>
                </div>
                <div className="flex flex-col max-w-[600px] space-y-2">
                    <label htmlFor="time" className="text-white">SELECT TIME</label>
                    <input type="text" placeholder="Enter Your Name" className="bg-[#161616] p-2 border-b-[1px] text-gray-400 text-sm placeholder:text-sm hover:border-orange-400 border-gray-800"/>
                </div>
                <div className="flex flex-col space-y-2 max-w-[1230px]">
                    <label htmlFor="message" className="text-white">YOUR MESSAGE</label>
                    <input type="text" placeholder="Enter Your Name" className="bg-[#161616] p-2 focus:border-b-0 border-b-[1px] text-gray-400 text-sm placeholder:text-sm hover:border-orange-400 border-gray-800"/>
                </div>
            </div>
            <Button  variant={"secondary"}  className="text-white text-xl font-mono px-10 py-7 mt-20 bg-[#d67e1afd] hover:bg-[#121212]">Send Message</Button>
            </main>
            
        </div>
    )
}