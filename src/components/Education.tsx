import React from "react";  

export default function Education() {
    return (
        <div id="edu my-10">
            <div className="flex min-h-0 flex-col gap-y-3">
                <h2 className="text-xl font-bold">Education</h2>
                <a href="https://portal.num.edu.mn/en/" className="block cursor-pointer mb-4">
                    <div className="rounded-lg bg-card text-card-foreground flex dark:bg-transparent">
                        <div className="flex w-full">
                            <img src="/num.jpg" alt="NUM edu" className="h-10 w-10 rounded-lg object-cover"/>
                            <div className="flex flex-col ml-4 items-center w-full">
                                <div className="flex justify-between items-center gap-x-2 text-base w-full">
                                    <h3 className="inline-flex items-center justify-center font-semibold leading-none  sx:text-sm">National University of Mongolia</h3>
                                    <div className="text-xs sm:text-sm text-muted-foreground text-right">September 2016 - May 2020</div>
                                </div>
                                <div className="flex flex-col justify-start text-xs w-full">
                                    <p>Bachelor of Business Administration</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}