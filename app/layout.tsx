import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Code Reviewer for Tech Interviews",
  description: "Get instant AI-powered feedback on your coding interview solutions. Improve code quality, performance, and interview best practices."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b42936a2-e77f-4728-ad52-4f1a42f94d8c"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
