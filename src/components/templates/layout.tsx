import { ReactNode } from "react";
import Navbar from "../modules/navbar";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-xl mx-auto px-2 py-3">{children}</main>
    </>
  );
}
