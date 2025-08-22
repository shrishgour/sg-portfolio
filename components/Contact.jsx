import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <section id="contact" className="w-full max-w-xl px-4">
      <h2 className="mb-6 text-center text-3xl font-bold">Contact Me</h2>
      <form className="flex flex-col gap-4">
        <Input type="text" placeholder="Your Name" />
        <Input type="email" placeholder="Your Email" />
        <Textarea placeholder="Your Message" />
        <Button type="submit">Send</Button>
      </form>
    </section>
  );
}
