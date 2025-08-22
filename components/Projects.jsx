import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Omnifoods Landing Page",
    desc: "A responsive food-service landing page built with React & Tailwind CSS. Features hero banner, services overview, and clean mobile-first design.",
    href: "https://omnifoods-sg.netlify.app/",
  },
  {
    title: "The Wild Oasis — Admin & Employee Web App",
    desc: "An internal hotel management platform built with React. Used by admins and employees to manage cabins, bookings, and guest details with efficiency.",
    href: "https://the-wild-oasis-ten-vert.vercel.app/",
  },
  {
    title: "The Wild Oasis — Guest Booking Website",
    desc: "A guest-facing booking site built with Next.js & Tailwind CSS. Allows guests to browse cabins, check availability, and make reservations seamlessly.",
    href: "https://the-wild-oasis-website-sg.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-5xl px-4 py-12">
      <h2 className="mb-8 text-center text-3xl font-bold">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{p.desc}</p>
              <Button
                variant="outline"
                size="sm"
                as="a"
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
