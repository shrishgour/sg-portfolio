"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xpwjalwo", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="dark mx-4 flex flex-col justify-start gap-4"
    >
      <Input type="text" name="name" placeholder="Your Name" required />
      <Input type="email" name="email" placeholder="Your Email" required />
      <Textarea name="message" placeholder="Your Message" required />

      <Button type="submit" className="w-full">
        Send
      </Button>

      {status === "SUCCESS" && (
        <p className="mt-4 text-center text-2xl text-green-600">
          ✅ Message sent successfully!
        </p>
      )}
      {status === "ERROR" && (
        <p className="mt-4 text-center text-2xl text-red-600">
          ❌ Oops! Something went wrong.
        </p>
      )}
    </form>
  );
}
