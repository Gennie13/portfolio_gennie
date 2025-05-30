import React from "react";

export default function Education() {
  return (
    <section id="education" className="py-16 px-6 bg-gray-50 text-brand-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 border-b-4 border-brand-red inline-flex items-center gap-2">
          
          Education
        </h2>

        <a
          href="https://portal.num.edu.mn/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white hover:bg-gray-100 p-5 rounded-xl shadow transition"
        >
          <div className="flex items-center gap-4">
            <img
              src="/num.jpg"
              alt="NUM"
              className="h-12 w-12 rounded-lg object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">
                  National University of Mongolia
                </h3>
                <span className="text-sm text-gray-500">
                  Sept 2016 – May 2020
                </span>
              </div>
              <p className="text-sm text-gray-700">
                Bachelor of Business Administration
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
