import "./globals.css";


import { ReactNode } from "react";
import { Navbar } from "./components/Navbar/Navbar.jsx";

type Props = { children: ReactNode };

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}

