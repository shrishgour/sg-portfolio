import ProjectCard from "./ProjectCard";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Projects() {
  const projects = [
    {
      title: "OmniFoods",
      description: "Landing page for a modern food delivery service.",
      image: "/project-1.png",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://omnifoods-sg.netlify.app/",
      github: "https://github.com/shrishgour/07-Omnifood-Desktop",
    },
    {
      title: "The Wild Oasis (Admin App)",
      description: "React app for hotel management, employee & admin use.",
      image: "/project-2.png",
      tech: ["React", "Supabase"],
      demo: "https://the-wild-oasis-ten-vert.vercel.app/",
      github: "https://github.com/shrishgour/17-the-wild-oasis",
    },
    {
      title: "The Wild Oasis (Guest App)",
      description: "Next.js + Tailwind guest-facing app for bookings.",
      image: "/project-3.png",
      tech: ["Next.js", "Tailwind", "Supabase"],
      demo: "https://the-wild-oasis-website-sg.vercel.app/",
      github: "https://github.com/shrishgour/21-the-wild-oasis-website",
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
    <section id="projects" className="py-20">
      <Card className="mx-auto rounded-2xl border-transparent px-8 pb-8">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold tracking-tight uppercase">
            Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
