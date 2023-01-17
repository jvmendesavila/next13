import Link from "next/link";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="bg-slate-100">
        <nav className="flex items-center justify-between h-20 bg-slate-200 px-8 py-4">
          <p className="font-medium">jvmendesavila</p>
          <ul className="flex min-w-fit">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="ml-8">
              <Link href="/about">Sobre</Link>
            </li>
          </ul>
        </nav>
        <div className="container px-8 pt-8">{children}</div>
      </body>
    </html>
  );
}
