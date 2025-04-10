"use client"
import * as React from "react";
import { useRouter } from "next/router";
import { Progress } from "@/components/ui/progress";

export default function ProjectItem() {
  const router = useRouter();
  const { group, title } = router.query;
  const [progress, setProgress] = React.useState()
  
  if(!group || !title) {
    React.useEffect(() => {
      const timer = setInterval(() => setProgress(60),500)
      return () => clearInterval(timer);
    }, [])
  }
  return (
    <div className="max-w-3xl mx-auto py-12 px-16 mt-8">
      <main className="flex flex-col space-y-6">
        <h1 className="text-3xl font-bold mb-6 sm:text-2xl">{title}</h1>
        <p className="text-lg text-gray-700">
          This is a detailed description of the {group} project titled "{title}".
        </p>
      </main>
    </div>
  );
}