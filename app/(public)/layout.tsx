import { Footer } from "@/components/shared/Footer/Footer";
import { NavMenu } from "@/components/shared/Navbar";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const PublicLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <NavMenu />
      <section className="flex flex-1 justify-center items-center flex-col py-2">
        {children}
      </section>
      <Footer />
    </>
  );
};

export default PublicLayout;
