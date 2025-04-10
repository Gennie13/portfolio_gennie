"use client"
import React from "react";

export default function Contact() {
    return(
        <div className="mt-5 mb-20">
            <h2 className="text-xl font-bold mb-4">Contact</h2>
            <ul className="flex space-x-4 items-center mt-4">
            <li className=""> 
                <button className="text-gray-600 duration-300 hover:text-blue-600 transition-colors duration-300 text-xl" onClick={()=> {
                    navigator.clipboard.writeText("+97699645862");
                    alert("Утасны дугаар хуулсан");
                }} aria-label="Утасны дугаар хуулсан"
                >
                    <i className="ri-phone-line  border-1 rounded-full border-gray-600 p-2 hover:border-0 hover:bg-gray-300 duration-200"></i>
                </button>
                </li>
                <li className=""><a href="mailto:gereltsetseg@nit.edu.mn" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-xl" aria-label="Send email to gereltsetseg@nit.edu.mn" >
                <i className="ri-mail-line border-1 rounded-full border-gray-600 p-2 hover:border-0 hover:bg-gray-300 duration-200"></i>
                </a></li>
                <li className=""><a href="https://github.com/Gennie13" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-xl" aria-label="Github" >
                <i className="ri-github-line border-1 rounded-full border-gray-600 p-2 hover:border-0 hover:bg-gray-300 duration-200"></i>
                </a></li>

                <li className=""><a href="https://www.linkedin.com/in/gerelee-hurelee-a9871634a/" className="text-gray-600 hover:text-blue-600 transition-colors duration-300 text-xl" aria-label="Linkedin" >
                <i className="ri-linkedin-line border-1 rounded-full border-gray-600 p-2 hover:border-0 hover:bg-gray-300 duration-200"></i>
                </a></li>

                
                
            </ul>
            <div className="mt-3 flex items-center">
                
            </div>
        </div>
    )
}