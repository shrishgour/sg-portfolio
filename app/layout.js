import "./globals.css";

export const metadata = {
  title: "Shrish Portfolio",
  description: "My personal portfolio website",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="font-sans">
      <body>{children}</body>
    </html>
  );
}
