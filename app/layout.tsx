import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.scss";
import ReactQueryProvider from "@/utils/ReactQueryProvider";
export const metadata: Metadata = {
  title: "View Source Test",
  description: "View Source's test project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
