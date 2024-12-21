import Link from "next/link";
import Image from "next/image";
export default function About(){
    return(
        <main className="bg-[#161616] overflow-clip">
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
                    <li><Link href={"/contact"} className="hover:text-[#d67e1afd]">Contact</Link></li>
                    <li className="marker:text-[#d67e1afd] text-[#d67e1afd]">About</li>
                    </div>
                    
                    <h1 className="text-white text-6xl font-bold font-mono my-auto ">ABOUT</h1>
                </div>
            </div>
            <div className="md:flex justify-between xl:pl-10 mt-32 max-w-[300px] md:max-w-[650px] lg:max-w-[1000px] xl:max-w-[1600px]   mx-auto">
                <section className="text-white max-w-lg">
                    <h1 className="font-bold text-2xl md:text-3xl lg:text-5xl font-mono">WE MAKE AUTO REPAIR MORE CONVENIENT</h1>
                    <p className="my-8 text-gray-300">Promotors has over 1200 locations across the U.S. and Canada to provide car maintenance and car repair services wherever you are.</p>
                    <div className="flex justify-between">
                        <h2 className="font-semibold text-xl ">HIGHLY QUALIFIED EXPERTS</h2>
                        <h3 className="font-semibold text-xl ">90%</h3>
                    </div>
                    <div className="py-2 border-grey-300 my-5 border-[1px] bg-[#d67e1afd] mr-10 rounded-sm"/>
                    <div className="flex justify-between">
                        <h2 className="font-semibold text-xl ">CLEAN, MODERN FACILITY</h2>
                        <h3 className="font-semibold text-xl ">99%</h3>
                    </div>
                    <div className="py-2 border-grey-300 my-5 border-[1px] bg-[#d67e1afd] mr-1 rounded-sm"/>
                </section>
                <Image src={"/about-1.jpg"} alt={"about"} width={700} height={300}/>
            </div>
            <div className=" mt-20 pb-10 max-w-[300px] md:max-w-[650px] lg:max-w-[1000px] xl:max-w-[1600px] mx-auto">
            <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold font-mono my-auto ">OUR SERVICES</h1>
                <section className="pt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 gap-y-7">
                    <div className="bg-[#131313] max-w-[400px] flex items-center gap-5 py-8 px-10 hover:border-t-4 border-t-4 border-[#131313] hover:border-[#d67e1afd]">
                        <Image src={"/grid1.png"} alt={"grid"} height={50} width={50}/>
                        <h4 className="font-bold text-white text-2xl hover:text-orange-400">TIMING BELT</h4>
                    </div>
                    <div className="bg-[#131313] max-w-[400px] flex items-center gap-5 py-8 px-10 hover:border-t-4 border-t-4 border-[#131313] hover:border-[#d67e1afd]">
                        <Image src={"/grid2.png"} alt={"grid"} height={50} width={50}/>
                        <h4 className="font-bold text-white text-2xl hover:text-orange-400">STEERING</h4>
                    </div>
                    <div className="bg-[#131313] max-w-[400px] flex items-center gap-5 py-8 px-10 hover:border-t-4 border-t-4 border-[#131313] hover:border-[#d67e1afd]">
                        <Image src={"/grid3.png"} alt={"grid"} height={50} width={50}/>
                        <h4 className="font-bold text-white text-2xl hover:text-orange-400">CAR DIAGNOSTICS</h4>
                    </div>
                    <div className="bg-[#131313] max-w-[400px] flex items-center gap-5 py-8 px-10 hover:border-t-4 border-t-4 border-[#131313] hover:border-[#d67e1afd]">
                        <Image src={"/grid4.png"} alt={"grid"} height={50} width={50}/>
                        <h4 className="font-bold text-white text-2xl hover:text-orange-400">CLUTCH REPLACE</h4>
                    </div>
                    <div className="bg-[#131313] max-w-[400px] flex items-center gap-5 py-8 px-10 hover:border-t-4 border-t-4 border-[#131313] hover:border-[#d67e1afd]">
                        <Image src={"/grid5.png"} alt={"grid"} height={50} width={50}/>
                        <h4 className="font-bold text-white text-2xl hover:text-orange-400">BATTERIES</h4>
                    </div>
                    <div className="bg-[#131313] max-w-[400px] flex items-center gap-5 py-8 px-10 hover:border-t-4 border-t-4 border-[#131313] hover:border-[#d67e1afd]">
                        <Image src={"/grid6.png"} alt={"grid"} height={50} width={50}/>
                        <h4 className="font-bold text-white text-2xl hover:text-orange-400">BRAKE REPAIR</h4>
                    </div>
                    <div className="bg-[#131313] max-w-[400px] flex items-center gap-5 py-8 px-10 hover:border-t-4 border-t-4 border-[#131313] hover:border-[#d67e1afd]">
                        <Image src={"/grid7.png"} alt={"grid"} height={50} width={50}/>
                        <h4 className="font-bold text-white text-2xl hover:text-orange-400">TIRE REPAIR</h4>
                    </div>
                    <div className="bg-[#131313] max-w-[400px] flex items-center gap-5 py-8 px-10 hover:border-t-4 border-t-4 border-[#131313] hover:border-[#d67e1afd]">
                        <Image src={"/grid8.png"} alt={"grid"} height={50} width={50}/>
                        <h4 className="font-bold text-white text-2xl hover:text-orange-400">ENGINE REPAIR</h4>
                    </div>
                    <div className="bg-[#131313] max-w-[400px] flex items-center gap-5 py-8 px-10 hover:border-t-4 border-t-4 border-[#131313] hover:border-[#d67e1afd]">
                        <Image src={"/grid8.png"} alt={"grid"} height={50} width={50}/>
                        <h4 className="font-bold text-white text-2xl hover:text-orange-400">BRAKE REPAIR</h4>
                    </div>
                </section>
            </div>
        </main>
    )
}