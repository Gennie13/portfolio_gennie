"use client";
import React, { useCallback } from "react";
import { Mail, Phone, Github, Linkedin, Copy, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const contactData = [
  {
    icon: Phone,
    onClick: async () => {
      try {
        await navigator.clipboard.writeText("+97699645862");
        toast.success("Phone number copied to clipboard!", {
          description: "+976 9964 5862",
          duration: 3000,
        });
      } catch (error) {
        toast.error("Failed to copy phone number");
        console.error("Copy failed:", error);
      }
    },
    label: "Phone",
    isButton: true,
    color: "from-green-500 to-emerald-500",
    hoverColor: "hover:shadow-green-500/25",
    description: "+976 9964 5862",
  },
  {
    icon: Mail,
    href: "mailto:gereltsetseg@nit.edu.mn",
    label: "Email",
    color: "from-blue-500 to-cyan-500",
    hoverColor: "hover:shadow-blue-500/25",
    description: "gereltsetseg@nit.edu.mn",
  },
  {
    icon: Github,
    href: "https://github.com/Gennie13",
    label: "GitHub",
    color: "from-gray-700 to-gray-900",
    hoverColor: "hover:shadow-gray-500/25",
    description: "View my repositories",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/gerelee-hurelee-a9871634a/",
    label: "LinkedIn",
    color: "from-blue-600 to-blue-800",
    hoverColor: "hover:shadow-blue-600/25",
    description: "Connect with me",
  },
];

type ContactItemProps = {
  item: (typeof contactData)[number];
  index: number;
};


const ContactItem = React.memo(({ item, index }: ContactItemProps) => {
  const IconComponent = item.icon;
  
  const buttonClass = `
    group relative p-6 rounded-2xl border border-gray-200/50 
    bg-gradient-to-br ${item.color} text-white
    hover:scale-105 hover:shadow-xl ${item.hoverColor}
    transition-all duration-300 ease-out
    flex flex-col items-center justify-center
    min-h-[120px] w-full
  `;

  const content = (
    <>
      <div className="relative mb-3">
        <IconComponent className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
        {item.isButton && (
          <Copy className="w-4 h-4 absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
        {!item.isButton && (
          <ExternalLink className="w-4 h-4 absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </div>
      <span className="text-sm font-semibold mb-1">{item.label}</span>
      <span className="text-xs opacity-80 text-center px-2">{item.description}</span>
    </>
  );

  return (
    <motion.li
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
      className="flex-1 min-w-[200px]"
    >
      {item.isButton ? (
        <button
          onClick={item.onClick}
          aria-label={`${item.label}: ${item.description}`}
          className={buttonClass}
        >
          {content}
        </button>
      ) : (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${item.label}: ${item.description}`}
          className={buttonClass}
        >
          {content}
        </a>
      )}
    </motion.li>
  );
});

ContactItem.displayName = "ContactItem";

export default function Contact() {
  const handlePhoneClick = useCallback(async () => {
    try {
      await navigator.clipboard.writeText("+97699645862");
      toast.success("Утасны дугаар хуулсан", {
        description: "+976 9964 5862",
        duration: 3000,
      });
    } catch (error) {
      // Fallback for older browsers
      toast.error("Хуулахад алдаа гарлаа");
      console.error("Copy failed:", error);
    }
  }, []);

  return (
    <section 
      id="contact" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl relative z-10 mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-3xl font-black mb-6 text-gray-900 dark:text-white"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent dark:text-white">
              Contact
            </span>
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl dark:text-gray-300 "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Let's connect and discuss opportunities, collaborations, or just have a friendly chat!
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <motion.ul 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-[10vh]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {contactData.map((item, index) => (
            <ContactItem key={item.label} item={item} index={index} />
          ))}
        </motion.ul>

        
      </div>
    </section>
  );
}