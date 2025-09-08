import { Github, Linkedin, Mail, SmartphoneIcon } from "lucide-react";
import Logo from "./NavLogo";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 bg-gray-900 py-6 text-gray-400">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center justify-between gap-4">
          <Logo />
          <h2 className="text-sm font-semibold tracking-wider text-white">
            SHRISH
          </h2>
        </div>

        <div className="flex gap-5">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4 transition hover:text-white" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-4 w-4 transition hover:text-white" />
          </a>
          <a href="mailto:yourmail@example.com">
            <Mail className="h-4 w-4 transition hover:text-white" />
          </a>
          <a href="tel:+919828081466">
            <SmartphoneIcon className="h-4 w-4 transition hover:text-white" />
            {/* <span>(+91) 9828081466 </span> */}
          </a>
        </div>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Shrish Gour
        </p>
      </div>
    </footer>
  );
}
