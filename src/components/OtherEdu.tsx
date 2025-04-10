import { transform } from "next/dist/build/swc/generated-native";
import react from "react";

export default function OtherEdu() {
    return (
        <div id="otherEdu mb-10">
        <div className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-xl font-bold">Other Trainings and Certifications</h2>
            

            
            <ul className="flex overflow-x-auto flex-nowrap space-x-6 snap-x w-full pb-2 scrollbar-hide">
                {/* Power Platform Certificate */}
                <li className="snap-center min-w-[280px] bg-white dark:bg-gray-900 dark:text-gray-50 shadow-md hover:shadow-xl border border-gray-200 rounded-2xl cursor-pointer mb-4 transition-transform duration-300 hover:scale-[1.05] overflow-hidden mr-6">
                    <div className="flex flex-col rounded-2xl text-card-foreground dark:text-gray-50">
                    <div className="w-full">
                        <img src="/file/Screenshot 2025-04-06 201729.png" alt="power ser" className="rounded-t-2xl object-cover w-full h-40" />
                    </div>
                    <div className="flex flex-col p-4 gap-2">
                        <a href="https://www.coursera.org/account/accomplishments/verify/VSL2E7VM5DAM" className="flex flex-col w-full">
                        <h3 className="text-base font-semibold text-gray-800 leading-snug hover:text-blue-600 transition-colors duration-200 dark:text-gray-50">
                            Introduction to Microsoft Power Platform
                        </h3>
                        <div className="justify-end">
                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-2 dark:text-gray-50" >
                            <img src="/Microsoft_logo.svg" className="w-4 h-5" alt="Microsoft logo" />
                            <span>Microsoft certificate, Coursera</span>
                        </div>
                        <div className="text-xs text-gray-400 mt-1 flex items-center">
                            <i className="ri-calendar-2-line mr-2"></i>Feb 2025
                        </div>
                        </div>
                        </a>
                    </div>
                    </div>
                </li>

                {/* Excel Certificate */}
                <li className="min-w-[280px] bg-white shadow-md hover:shadow-xl border border-gray-200 rounded-2xl cursor-pointer mb-4 transition-transform duration-300 hover:scale-[1.05] overflow-hidden dark:bg-gray-900 dark:text-gray-50">
                    <div className="flex flex-col rounded-2xl text-card-foreground">
                    <div className="w-full">
                        <img src="/file/Screenshot 2025-04-06 201822.png" alt="Excel cert" className="rounded-t-2xl object-cover w-full h-40" />
                    </div>
                    <div className="flex flex-col p-4 gap-2">
                        <a href="https://www.coursera.org/account/accomplishments/verify/D4E4TXSD5580" className="flex flex-col w-full">
                        <h3 className="text-base font-semibold text-gray-800 leading-snug hover:text-blue-600 transition-colors duration-200 dark:text-gray-50">
                            Data for Analysis with Microsoft Excel
                        </h3>
                        <div className="flex flex-col justify-end">
                            <div className="flex items-center gap-2 text-xs text-gray-500 mt-2">
                                <img src="/Microsoft_logo.svg" className="w-4 h-5" alt="Microsoft logo" />
                                <span>Microsoft certificate, Coursera</span>
                            </div>
                            <div className="text-xs text-gray-400 mt-1 flex items-center">
                                <i className="ri-calendar-2-line mr-2"></i>Feb 2025
                            </div>
                        </div>
                        </a>
                    </div>
                    </div>
                </li>

                {/* Banking and Finance Academy */}
                <li className="min-w-[280px] bg-white shadow-md hover:shadow-xl border border-gray-200 rounded-2xl cursor-pointer mb-4 transition-transform duration-300 hover:scale-[1.05] overflow-hidden dark:bg-gray-900 dark:text-gray-50">
                    <div className="flex flex-col rounded-2xl text-card-foreground">
                    <div className="w-full">
                        <img src="/bfa.jpg" alt="BFA" className="rounded-t-2xl object-cover w-full h-40" />
                    </div>
                    <div className="flex flex-col p-4 gap-2">
                        <div className="flex flex-col w-full dark:text-gray-50">
                        <h3 className="text-base font-semibold text-gray-800 leading-snug dark:text-gray-50">
                            Customer Service Certificate
                        </h3>
                        <div className="flex flex-col justify-end dark:text-gray-50">

                            
                            <div className="text-xs text-gray-500 mt-2">
                                Banking and Finance Academy
                            </div>
                            <div className="text-xs text-gray-400 mt-1 flex items-center">
                                <i className="ri-calendar-2-line mr-2"></i>March 2018 – September 2018
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    )
}