"use client";
import React from "react";

type Certificate = {
  img: string;
  alt: string;
  title: string;
  organization: string;
  date: string;
  href?: string;
};

const certificates: Certificate[] = [
  {
    img: "/file/Screenshot 2025-04-06 201729.png",
    alt: "Power Platform Certificate",
    title: "Introduction to Microsoft Power Platform",
    organization: "Microsoft certificate, Coursera",
    date: "Feb 2025",
    href: "https://www.coursera.org/account/accomplishments/verify/VSL2E7VM5DAM",
  },
  {
    img: "/file/Screenshot 2025-04-06 201822.png",
    alt: "Excel Certificate",
    title: "Data for Analysis with Microsoft Excel",
    organization: "Microsoft certificate, Coursera",
    date: "Feb 2025",
    href: "https://www.coursera.org/account/accomplishments/verify/D4E4TXSD5580",
  },
  {
    img: "/bfa.jpg",
    alt: "BFA",
    title: "Customer Service Certificate",
    organization: "Banking and Finance Academy",
    date: "Mar 2018 – Sept 2018",
  },
];

export default function OtherEdu() {
  return (
    <section
      id="other-edu"
      className="py-16 px-6 sm:px-6 lg:px-8 bg-white text-brand-black dark:bg-gray-900 dark:text-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 inline-flex items-center gap-2">
          Other Trainings & Certifications
        </h2>

        <ul className="flex overflow-x-auto flex-nowrap space-x-4 snap-x w-full pb-2 scrollbar-hide">
          {certificates.map((cert, index) => (
            <li
              key={index}
              className="snap-center min-w-[260px] bg-white dark:bg-gray-900 dark:text-gray-50 shadow hover:shadow-md border border-gray-200 rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="flex flex-col">
                <img
                  src={cert.img}
                  alt={cert.alt}
                  className="object-cover w-full h-36 rounded-t-xl"
                />
                <div className="p-3 flex flex-col gap-1.5">
                  {cert.href ? (
                    <a
                      href={cert.href}
                      className="hover:text-blue-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3 className="font-semibold text-sm leading-snug">
                        {cert.title}
                      </h3>
                      <div className="text-xs text-gray-500 mt-1">
                        {cert.organization}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        {cert.date}
                      </div>
                    </a>
                  ) : (
                    <>
                      <h3 className="font-semibold text-sm leading-snug">
                        {cert.title}
                      </h3>
                      <div className="text-xs text-gray-500 mt-1">
                        {cert.organization}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        {cert.date}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
