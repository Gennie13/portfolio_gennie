import React from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Golomt Bank",
    position: "Corporate Banking Teller",
    period: "May 2020 - March 2023",
    logo: "/golomtbank.jpg",
    link: "https://www.golomtbank.com/",
  },
  {
    company: "Golomt Bank",
    position: "Collateral Valuation / Contract Employee",
    period: "September 2019 - March 2020",
    logo: "/golomtbank.jpg",
    link: "https://www.golomtbank.com/",
  },
  {
    company: "Khan Bank",
    position: "Customer service",
    period: "May 2019 - September 2019",
    logo: "/khanbank.png",
    link: "https://www.khanbank.com/business/home/",
  },
  {
    company: "Khan Bank",
    position: "Customer service",
    period: "May 2018 - September 2018",
    logo: "/khanbank.png",
    link: "https://www.khanbank.com/business/home/",
  },
];

export default function Work() {
  return (
    <section className="py-16 px-6 bg-white text-brand-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 border-b-4 border-brand-red inline-flex items-center gap-2">
          
          Work Experience
        </h2>

        <div className="space-y-6">
          {experiences.map((job, i) => (
            <a
              key={i}
              href={job.link}
              target="_blank"
              className="block bg-gray-50 hover:bg-gray-100 p-5 rounded-xl shadow transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={job.logo}
                  alt={job.company}
                  className="h-12 w-12 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{job.company}</h3>
                    <span className="text-sm text-gray-500">{job.period}</span>
                  </div>
                  <p className="text-sm text-gray-700">{job.position}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
