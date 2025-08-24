import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2 } from "lucide-react"; // fallback icon
import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  demo,
  github,
}) {
  return (
    <Card className="border-border/40 flex flex-col overflow-hidden rounded-xl shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
      {/* Conditional rendering for screenshot or fallback */}
      {image ? (
        <div className="relative h-48 w-full">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      ) : (
        <div className="bg-muted flex h-48 w-full items-center justify-center">
          <Code2 className="text-muted-foreground h-12 w-12" />
        </div>
      )}

      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col justify-between">
        <div>
          <p className="text-muted-foreground mb-3">{description}</p>
          <div className="mb-4 flex flex-wrap gap-2">
            {tech.map((t, i) => (
              <span
                key={i}
                className="bg-muted rounded-md px-2 py-1 text-xs font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto flex gap-3">
          {demo && (
            <Button asChild>
              <a href={demo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
          )}
          {github && (
            <Button variant="outline" asChild>
              <a href={github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
