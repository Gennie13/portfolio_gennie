import React from "react";

export default function Work() {
    return (
        <div className="flex flex-col min-h-0 gap-y-3 w-full my-10">
            <h2 className="text-xl font-bold">Work Experience</h2>
            <div>
                <a href="https://www.golomtbank.com/" className="block cursor-pointer mb-4">
                    <div className="rounded-lg text-card-foreground flex">
                        <div className="flex w-full">
                            <img src="/golomtbank.jpg" alt="Khan Bank" className="h-10 w-10 rounded-lg object-cover"/>
                            <div className="flex flex-col ml-4 items-center w-full dark:bg-transparent">
                                <div className="flex justify-between items-center gap-x-2 text-base w-full">
                                    <h3 className="inline-flex items-center justify-center font-semibold leading-none  sx:text-sm">Golomt Bank</h3>
                                    <div className="text-xs sm:text-sm text-muted-foreground text-right">May 2020 - March 2023</div>
                                </div>
                                <div className="flex flex-col justify-start text-xs w-full">
                                    <p>Corporate Banking Teller</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </a>
                <a href="https://www.golomtbank.com/" className="block cursor-pointer mb-4">
                    <div className="rounded-lg bg-card text-card-foreground flex dark:bg-transparent">
                        <div className="flex w-full">
                            <img src="/golomtbank.jpg" alt="Khan Bank" className="h-10 w-10 rounded-lg object-cover"/>
                            <div className="flex flex-col ml-4 items-center w-full dark:bg-transparent">
                                <div className="flex justify-between items-center gap-x-2 text-base w-full">
                                    <h3 className="inline-flex items-center justify-center font-semibold leading-none  sx:text-sm">Golomt Bank</h3>
                                    <div className="text-xs sm:text-sm text-muted-foreground text-right">September 2019 - March 2020</div>
                                </div>
                                <div className="flex justify-start text-xs w-full">
                                    <p>Collateral Valuation / Contract Employee</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </a>
                <a href="https://www.khanbank.com/business/home/" className="block cursor-pointer mb-4">
                    <div className="rounded-lg bg-card text-card-foreground flex dark:bg-transparent">
                        <div className="flex w-full">
                            <img src="/khanbank.png" alt="Khan Bank" className="h-10 w-10 rounded-l-lg object-cover"/>
                            <div className="flex flex-col ml-4 items-center w-full">
                                <div className="flex justify-between items-center gap-x-2 text-base w-full">
                                    <h3 className="inline-flex items-center justify-center font-semibold leading-none  sx:text-sm">Khan Bank</h3>
                                    <div className="text-xs sm:text-sm text-muted-foreground text-right">May 2019 - September 2019</div>
                                </div>
                                <div className="flex justify-start text-xs w-full">
                                    <p>Customer service</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </a>
                <a href="https://www.khanbank.com/business/home/" className="block cursor-pointer mb-2">
                    <div className="rounded-lg bg-card text-card-foreground flex dark:bg-transparent">
                        <div className="flex w-full">
                            <img src="/khanbank.png" alt="Khan Bank" className="h-10 w-10 rounded-l-lg object-cover"/>
                            <div className="flex flex-col ml-4 items-center w-full">
                                <div className="flex justify-between items-center gap-x-2 text-base w-full">
                                    <h3 className="inline-flex items-center justify-center font-semibold leading-none  sx:text-sm">Khan Bank</h3>
                                    <div className="text-xs sm:text-sm text-muted-foreground text-right">May 2018 - September 2018</div>
                                </div>
                                <div className="flex justify-start text-xs w-full">
                                    <p>Customer service</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}