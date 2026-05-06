import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Incident Response Checklist Builder",
  description: "Generate custom incident response checklists for your stack. AI-powered playbooks for DevOps, SRE teams, and on-call engineers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="13b7fe68-af78-4210-8fe1-49feee7a3559"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
