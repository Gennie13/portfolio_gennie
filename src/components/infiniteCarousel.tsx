"use client"
import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";

const InfiniteCarousel = ({skills}:{
    skills: string[]
}) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const scroller = scrollRef.current;
        function addAnimation() {
            if(!scroller) return;
            const innerScroller = scroller.querySelector('.scroll_inner');
            if(!innerScroller) return;
            if(innerScroller.getAttribute("data-cloned")=== "true") return;
            const innerScrollerChildren = Array.from(innerScroller.children);

            innerScrollerChildren.forEach((btn) => {
                const btnSkills = btn.cloneNode(true) as HTMLElement
                innerScroller.appendChild(btnSkills);
            })
            innerScroller.setAttribute("data-cloned", "true");
        }
        addAnimation();
    }, []);
    return (
        <div ref={scrollRef} className="w-full scroller ">
            <div className="scroll_inner flex gap-4 py-4 animate-infinite_scroll">
                {[...skills,...skills].map((skill, index) => {
                    return (
                        <Button key={index} className="min-w-max bg-violet-300 p-2 rounded-lg shadow-md text-gray-900">
                            {skill}
                        </Button>
                    )
                })}
            </div>
        </div>
    )
}

export default InfiniteCarousel