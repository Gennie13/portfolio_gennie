export const projects = [
  {
    id: "examly",
    title: "Examly — Online Exam Monitoring System",
    description:
      "This system helps teachers and exam organizers track student performance in real time. It displays participants' names, submission status, scores, and submission time in a single dashboard. The platform supports exporting results in PDF, Excel, and Word formats, and also allows email delivery. Teachers can select exams and manage detailed results easily, making monitoring fast and efficient.",
    technologies: [
      "Next.js (TypeScript)",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "html2canvas",
      "jsPDF",
      "Node.js",
      "Express",
      "MongoDB",
      "Nodemailer",
      "REST API",
    ],
    image: [
        "/examly1.png",
        "/examly2.png",
        "/examly3.png",
    ],
    links: [
      { label: "Frontend Code", url: "https://github.com/Bumjargall/Exam-Frontend" },
      { label: "Backend Code", url: "https://github.com/Bumjargall/Exam-Backend" },
    ],
  },
  {
    id: "mednote",
    title: "MedNote — Medical Management System",
    description:
      "A comprehensive system designed to digitize hospital operations including patient registration, clinical modules, diagnostics, pharmacy, appointment scheduling, billing, and access control. The system aims to automate workflows, speed up service, and centralize patient data securely. Currently under active development.",
    technologies: [
      "React / Next.js",
      "Tailwind CSS",
      "Node.js",
      "NestJS",
      "MongoDB",
      "PostgreSQL",
      "JWT",
      "Docker",
      "Vercel",
    ],
    image: [
        "/medNote1.png",
        "/medNote2.png",
        "/medNote3.png",
        "/medNote4.png",
        "/medNote5.png",
    ],
    links: [
      { label: "Frontend Code", url: "https://github.com/Gennie13/MedNote-Frontend" },
    ],
  },
];