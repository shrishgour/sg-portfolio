import { Card, CardContent } from "@/components/ui/card";
import Contact from "./Contact";

export default function ProcessCTA() {
  return (
    <section className="py-10 sm:py-20" id="process-contact">
      <div className="container mx-auto px-6">
        <Card className="overflow-hidden shadow-md">
          <CardContent className="grid grid-cols-1 gap-24 md:grid-cols-2">
            {/* Left: Process */}
            <div className="sm:p-8">
              <h2 className="text-secondary-foreground mx-2 mb-6 text-2xl font-semibold tracking-[0.125rem] uppercase">
                How I Work
              </h2>

              <div className="grid grid-cols-1 items-center justify-items-stretch gap-4 sm:grid-cols-2">
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="mb-2 text-xl font-semibold">1. Understand</h3>
                  <p className="text-muted-foreground text-base">
                    I listen to your idea and clarify your goals.
                  </p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="mb-2 text-xl font-semibold">2. Design</h3>
                  <p className="text-muted-foreground text-base">
                    I plan the structure and look of your site.
                  </p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="mb-2 text-xl font-semibold">3. Build</h3>
                  <p className="text-muted-foreground text-base">
                    I develop using Next.js and modern tools.
                  </p>
                </div>
                <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="mb-2 text-xl font-semibold">4. Deliver</h3>
                  <p className="text-muted-foreground text-base">
                    I launch your site, fast and responsive.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact */}
            <div className="bg-foreground -m-8 p-8 sm:p-16">
              <h2 className="text-primary-foreground mx-4 mb-6 text-2xl font-semibold tracking-[0.125rem] uppercase">
                Get in Touch
              </h2>
              <Contact />

              <div className="my-6 flex items-center">
                <div className="bg-border h-px flex-grow"></div>
                <span className="text-muted-foreground px-4 text-sm">OR</span>
                <div className="bg-border h-px flex-grow"></div>
              </div>

              {/* Fiverr Button */}

              <a
                href="https://www.fiverr.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 mx-4 block rounded-md px-6 py-3 text-center font-medium shadow-md transition hover:shadow-lg"
              >
                Hire Me on Fiverr
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
