
import Image from "next/image";
import Comment from "@/components/Comment";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { carData } from "@/data/content";

interface Data {
    id:number,
    name:string,
    title:string,
    blogTitle:string,
    img:string,
    description:string,
    detailDesc:string
}


export default async function Blogs({params}:{params:Promise<{id:string}>}){
    const id = (await params).id
    const data:Data = carData[parseInt(id)-1]

    return (
        <main className="bg-[#161616]">
            <div className="max-w-[250px] md:max-w-[650px] lg:max-w-[900px] xl:max-w-[1200px] mx-auto py-10 overflow-clip">
                <div className="font-bold text-white text-2xl md:text-5xl lg:text-6xl font-serif ">
                    <TextGenerateEffect   duration={2} filter={false} words={data.blogTitle}  />
                    
                </div>
                <div className="md:flex gap-3 pt-10">
                    <Image src={data.img} alt={"car"} height={100} width={200}/>
                    <p className="text-white text-xl font-sans"><span className="text-[#d67e1afd]">{data.title}:</span>{data.detailDesc}</p>
                </div>
                <div className="md:flex my-10 space-y-10 md:space-y-0  gap-28">
                <div className=" max-w-md">
               
                    <h2 className="font-bold font-sans text-2xl my-4 text-white">Categories</h2>
                    <ul  className="space-y-2 list-disc pl-6 font-semibold cursor-pointer" >
                        <li className="marker:text-orange-400 text-white hover:text-[#d67e1afd] ">Repair</li>
                        <li className="marker:text-orange-400 text-white hover:text-[#d67e1afd]">Sport Cars</li>
                        <li className="marker:text-orange-400 text-white hover:text-[#d67e1afd]">Store</li>
                        <li className="marker:text-orange-400 text-white hover:text-[#d67e1afd]">Technology</li>
                        <li className="marker:text-orange-400 text-white hover:text-[#d67e1afd]">Tunning</li>
                    </ul>
                </div>
                
                </div>
                <Comment/>
            </div>
            
            
        </main>
    )
}