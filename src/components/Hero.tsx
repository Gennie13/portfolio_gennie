import React from "react";  

export default function Hero() {
    return (
        <div className="mx-auto w-full max-w-3xl space-y-8 my-10 ">
            <div className="flex gap-2 justify-between">
                <div className="flex flex-col space-y-1.5">
                    <div className="flex">
                        <span className="inline-block text-xl font-bold tracking-tighter sm:text-2xl xl:text-3xl/none" style={{opacity: 1, filter: "blur(0px)", transform: "translateY(-8px) translateZ(0px)"}}>Hi, I'm Gereltsetseg.KH</span>
                    </div>
                    <div className="flex border-t border-slate-200 py-4">
                        <span className="inline-block max-w-[600px] md:text-xl" style={{opacity: 1, filter: "blur(0px)", transform: "translateY(-8px) translateZ(0px)"}}>With a background in banking, now pursuing software development with a passion for tech and innovation.</span>
                    </div>
                </div>
                <div className="">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full h-30 w-28s border">
                        <img src="/pro.jpg" alt="my_photo" className=" bg-cover aspect-square h-full w-full"/>
                    </span>
                </div>
            </div>
        </div>
    )
}