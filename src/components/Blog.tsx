"use client"

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";


import Image from "next/image";
import { Button } from "./ui/button";



const words = `Welcome to our car enthusiast's haven! Dive into the world of speed, style, and innovation. Explore the latest car reviews, industry insights, and expert tips to fuel your passion for driving. Whether you're a speed chaser or a luxury lover, we have something for everyone!
`;
export default function BlogPage(){
    
    return (
        <main className="relative bg-[#161616] " >
            <div className="max-w-[650px] lg:max-w-[1000px] xl:max-w-[1200px] mx-auto pt-10 grid md:grid-cols-2  items-center ">
            <section className="lg:pr-20 max-w-lg  md:mx-0 mx-6 lg:max-w-xl">
                <h1 className="text-3xl lg:text-5xl font-bold text-white font-serif">Experience the Thrill of Driving</h1> 
                    <TextGenerateEffect className=""  duration={2} filter={false} words={words} />
                    <div className="flex justify-content pt-10">
                        <a href="#Card"> <Button  variant={"secondary"}  className="text-white text-lg font-mono px-10 py-5 bg-[#d67e1afd] hover:bg-[#121212]">Explore Blog</Button></a>
                       
                    </div>
                    
            </section>
            <section className="bg-pic responsive-bg bg-no-repeat bg-center h-[80vh] flex  justify-center items-center overflow-clip animate-bounce-soft group " >
                
                <div className="max-w-[250px] flex justify-center  items-center " >
                <Image src={"/leftlight.png"} alt={"left"} width={760} height={300} className=" absolute opacity-0  -left-[22px]  md:-left-[50px] lg:-left[36px] group-hover:opacity-100"/>        
                <Image src={"/ring.png"} alt={"ring"} width={600} height={300} className="absolute animate-spin mt-[52px] md:mt-16 lg:mt-20 items-center" />        
                <Image src={"/rightlight.png"} alt={"left"} width={780} height={300} className="absolute opacity-0 -right-[22px]  md:-right-[50px]  group-hover:opacity-100"/> 
                </div>
                
                
                       
             
            
            </section>
            </div>
          
        </main>
    )
}
