"use client";
import React from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white text-brand-black mb-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 border-b-4 border-gray-200 inline-block">Contact</h2>
        <ul className="flex justify-center space-x-6 mt-6">
          {[
            {
              icon: <Phone className="w-6 h-6" />,
              onClick: () => {
                navigator.clipboard.writeText("+97699645862");
                toast.success("Утасны дугаар хуулсан");
              },
              label: "Phone",
              isButton: true,
            },
            {
              icon: <Mail className="w-6 h-6" />,
              href: "mailto:gereltsetseg@nit.edu.mn",
              label: "Email",
            },
            {
              icon: <Github className="w-6 h-6" />,
              href: "https://github.com/Gennie13",
              label: "GitHub",
            },
            {
              icon: <Linkedin className="w-6 h-6" />,
              href: "https://www.linkedin.com/in/gerelee-hurelee-a9871634a/",
              label: "LinkedIn",
            },
          ].map((item, index) => (
            <li key={index}>
              {item.isButton ? (
                <button
                  onClick={item.onClick}
                  aria-label={item.label}
                  className="p-4 rounded-full border border-gray-300 hover:bg-gray-100 transition-all"
                >
                  {item.icon}
                </button>
              ) : (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="p-4 rounded-full border border-gray-300 hover:bg-gray-100 transition-all inline-flex items-center justify-center"
                >
                  {item.icon}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
