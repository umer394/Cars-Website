"use client"
import { Textarea } from "./ui/textarea"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useState,ChangeEvent, FormEvent } from "react";


export default function Comment(){

    const [name,SetName] = useState<string>("")
    const [comment,SetComment] = useState<string>("")
    const [comments,SetComments] = useState<string[]>([])
    
    
    const input = (e:ChangeEvent<HTMLInputElement>)=>{
        SetName(e.target.value)
    }

    const inputComment = (e:ChangeEvent<HTMLTextAreaElement>)=>{
        SetComment(e.target.value)
    }


    const handlesubmit = (e:FormEvent) => {
        e.preventDefault();
        if(name.trim() && comment.trim()){
            SetComments((prevComments:string[])=>{
               return [
                ...prevComments,
                `${name}:${comment}`,
            ]})
            SetName("")
            SetComment("")
        }
    }

    return(
        <div className="bg-[#161616] ">
            <div className=" max-w-lg ">
                <h2 className="font-bold font-sans text-2xl my-4 text-white">Recent Comments</h2>
                    <ul className="space-y-2 list-disc pl-6 font-semibold cursor-pointer">
                      
                        <li className="marker:text-orange-400 text-white hover:text-[#d67e1afd]">Richard Joash on THE WORLD&apos;S FIRST SUPERCAR THAT SHOWS THE TRUE POWER OF SPEED</li>
                        <li className="marker:text-orange-400 text-white hover:text-[#d67e1afd]">Ed Hickman on Silent Bloc Ø10-75mm</li>
                        <li className="marker:text-orange-400 text-white hover:text-[#d67e1afd]">Diwa Alejandro Galvez on Silent Bloc Ø10-75mm</li>
                        <li className="marker:text-orange-400 text-white hover:text-[#d67e1afd]">Richard Joash on Silent Bloc Ø10-75mm</li>
                        <li className="marker:text-orange-400 text-white hover:text-[#d67e1afd]">Ed Hickman on THE WORLD&apos;S FIRST SUPERCAR THAT SHOWS THE TRUE POWER OF SPEED</li>
                        <ul className="space-y-2 list-disc font-semibold">
                            {comments.map((item, index) => (
                                <li
                                    key={index}
                                    className="marker:text-orange-400 text-white hover:text-[#d67e1afd]"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </ul>
                </div>
                <h1 className="text-white font-bold pt-20 text-5xl font-sans">LEAVE A  COMMENT</h1>
                <div className="max-w-[600px] mt-10 space-y-10 pb-10">
                    <div>
                        <label htmlFor="name"  className="text-white font-bold">Name:</label>
                        <Input type="text" value={name} onChange={input} className="border-[#d67e1afd]"/>
                    </div>
                    <div>
                        <label htmlFor="comment" className="text-white font-bold">Comment:</label>
                        <Textarea value={comment} onChange={inputComment}  rows={5} className="border-[#d67e1afd]"/>
                    </div>
                    <Button  variant={"secondary"} type="submit" onClick={handlesubmit} className="text-white text-lg font-mono px-10 py-5 bg-[#d67e1afd] hover:bg-[#121212]">Post Comment</Button>
                    
                </div>
        </div>
    )
}