import ProjectCard from "./ProjectCard";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Projects() {
  const projects = [
    {
      title: "OmniFoods",
      description:
        "A responsive landing page for a food delivery startup, designed mobile-first with smooth animations.",
      image: "/project-1.png",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://omnifoods-sg.netlify.app/",
      github: "https://github.com/shrishgour/07-Omnifood-Desktop",
    },
    {
      title: "The Wild Oasis (Admin App)",
      description:
        "An internal dashboard for hotel staff to manage bookings, rooms, and guests efficiently.",
      image: "/project-2.png",
      tech: ["React", "Supabase", "Context API", "Styled Components"],
      demo: "https://the-wild-oasis-ten-vert.vercel.app/",
      github: "https://github.com/shrishgour/17-the-wild-oasis",
    },
    {
      title: "The Wild Oasis (Guest App)",
      description:
        "A guest-facing hotel booking site built with Next.js, offering a seamless booking experience.",
      image: "/project-3.png",
      tech: ["Next.js", "Tailwind", "Supabase", "Vercel"],
      demo: "https://the-wild-oasis-website-sg.vercel.app/",
      github: "https://github.com/shrishgour/21-the-wild-oasis-website",
    },
    {
      title: "Shrish | My Thought Pages",
      description:
        "A clean, content-driven blog built with Next.js — showcasing your web development insights and writing about UI, React, CSS, and design.",
      image: "/project-4.png",
      tech: ["Next.js", "Tailwind", "Contentful", "Vercel"],
      demo: "https://shrish-mythoughtpages.vercel.app/",
      github: "https://github.com/shrishgour/sg-blog",
    },
    // {
    //   title: "Shrinkster",
    //   description:
    //     "Casual arcade game where you shrink objects to solve puzzles.",
    //   tech: ["Unity", "C#"],
    //   github: "https://github.com/your-repo/shrinkster",
    // },
    // {
    //   title: "Boardmaster",
    //   description: "Board game project with strategic mechanics.",
    //   tech: ["Unity", "Photon"],
    // },
  ];

  return (
    <section id="projects" className="py-10 sm:py-20">
      <Card className="max-w-7xl rounded-2xl border-transparent px-8 pb-8">
        <CardHeader className="text-center">
          <CardTitle className="text-secondary-foreground text-4xl font-semibold tracking-[0.125rem] uppercase">
            Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
