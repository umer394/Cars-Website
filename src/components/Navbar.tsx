import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { Menu } from 'lucide-react';
  
export default function Navbar() {
  return (
    <header className=" bg-[#161616]">
        <div className="flex p-5 pb-7  justify-between items-center  max-w-[1200px] mx-auto">

        
        <h1 className="font-bold text-2xl text-white">UMER BLOG</h1>
        
        <ul className="space-x-2 hidden md:block">
            <Link href={"/"}>
                <Button variant={"link"} className="text-white hover:font-bold text-lg hover:text-[#d67e1afd] focus:text-[#d67e1afd] ">Blog</Button>
            </Link>
            <Link href={"/about"}>
                <Button variant={"link"} className="text-white hover:font-bold text-lg hover:text-[#d67e1afd] focus:text-[#d67e1afd]">About</Button>
            </Link>
            <Link href={"/contact"}>
                <Button variant={"link"} className="text-white hover:font-bold text-lg hover:text-[#d67e1afd] focus:text-[#d67e1afd]">Contact</Button>
            </Link>
            
        </ul>
        <Link href={"tel: 03353945855"} className="hidden md:block">
        <Button  variant={"secondary"}  className="text-white text-lg font-mono px-10 py-5 bg-[#d67e1afd] hover:bg-[#121212]">Call Now</Button>
        </Link>
            <div className="md:hidden">
            <Sheet>
            <SheetTrigger><Menu color="orange" size={30}/></SheetTrigger>
            <SheetContent>
                <SheetHeader>
                <SheetTitle>
                    <Link href={"/"}>
                        <Button variant={"link"} className="text-white hover:font-bold text-lg hover:text-[#d67e1afd] focus:text-[#d67e1afd] ">Blog</Button>
                    </Link>
                </SheetTitle>
                <SheetTitle>
                    <Link href={"/about"}>
                        <Button variant={"link"} className="text-white hover:font-bold text-lg hover:text-[#d67e1afd] focus:text-[#d67e1afd]">About</Button>
                    </Link>
                </SheetTitle>
                <SheetTitle>
                    <Link href={"/contact"}>
                        <Button variant={"link"} className="text-white hover:font-bold text-lg hover:text-[#d67e1afd] focus:text-[#d67e1afd]">Contact</Button>
                    </Link>
                </SheetTitle>
                <SheetTitle>
                    <Link href={"tel: 03353945855"} >
                        <Button  variant={"secondary"}  className="text-white text-lg font-mono px-10 py-5 bg-[#d67e1afd] hover:bg-[#121212]">Call Now</Button>
                    </Link>
                </SheetTitle>
                </SheetHeader>
            </SheetContent>
            </Sheet>
            </div>
        </div>
    </header>
  )
}
