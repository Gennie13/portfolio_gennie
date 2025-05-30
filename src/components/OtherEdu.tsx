import React from "react";

export default function OtherEdu() {
  return (
    <section id="other-edu" className="py-16 px-6 sm:px-6 lg:px-8 bg-white text-brand-black">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 border-b-4 border-brand-red inline-flex items-center gap-2">
          
          Other Trainings & Certifications
        </h2>

        <ul className="flex overflow-x-auto flex-nowrap space-x-4 snap-x w-full pb-2 scrollbar-hide">
          {/* Power Platform Certificate */}
          <li className="snap-center min-w-[260px] bg-white dark:bg-gray-900 dark:text-gray-50 shadow hover:shadow-md border border-gray-200 rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105 overflow-hidden">
            <div className="flex flex-col">
              <img
                src="/file/Screenshot 2025-04-06 201729.png"
                alt="power cert"
                className="object-cover w-full h-36 rounded-t-xl"
              />
              <div className="p-3 flex flex-col gap-1.5">
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/VSL2E7VM5DAM"
                  className="hover:text-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="font-semibold text-sm leading-snug">
                    Introduction to Microsoft Power Platform
                  </h3>
                  <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
                    <img src="/Microsoft_logo.svg" className="w-4 h-5" alt="Microsoft logo" />
                    Microsoft certificate, Coursera
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Feb 2025</div>
                </a>
              </div>
            </div>
          </li>

          {/* Excel Certificate */}
          <li className="snap-center min-w-[260px] bg-white dark:bg-gray-900 dark:text-gray-50 shadow hover:shadow-md border border-gray-200 rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105 overflow-hidden">
            <div className="flex flex-col">
              <img
                src="/file/Screenshot 2025-04-06 201822.png"
                alt="excel cert"
                className="object-cover w-full h-36 rounded-t-xl"
              />
              <div className="p-3 flex flex-col gap-1.5">
                <a
                  href="https://www.coursera.org/account/accomplishments/verify/D4E4TXSD5580"
                  className="hover:text-blue-600 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="font-semibold text-sm leading-snug">
                    Data for Analysis with Microsoft Excel
                  </h3>
                  <div className="text-xs text-gray-500 flex items-center gap-2 mt-1">
                    <img src="/Microsoft_logo.svg" className="w-4 h-5" alt="Microsoft logo" />
                    Microsoft certificate, Coursera
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Feb 2025</div>
                </a>
              </div>
            </div>
          </li>

          {/* Banking Academy Certificate */}
          <li className="snap-center min-w-[260px] bg-white dark:bg-gray-900 dark:text-gray-50 shadow hover:shadow-md border border-gray-200 rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105 overflow-hidden">
            <div className="flex flex-col">
              <img
                src="/bfa.jpg"
                alt="BFA"
                className="object-cover w-full h-36 rounded-t-xl"
              />
              <div className="p-3 flex flex-col gap-1.5">
                <h3 className="font-semibold text-sm leading-snug">
                  Customer Service Certificate
                </h3>
                <div className="text-xs text-gray-500 mt-1">
                  Banking and Finance Academy
                </div>
                <div className="text-xs text-gray-400 mt-1">Mar 2018 – Sept 2018</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
