import { TransitionLink } from "@/lib/TransitionLink";
import Image from "next/image";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-3 h-screen">
        <div className="col-span-2 h-full relative">
          <Image
            src="/side-img.jpg"
            alt="logo"
            className="h-full w-full object-cover bg-no-repeat pointer-events-none grayscale"
            width={1000}
            height={1000}
          />
          <div className="absolute bottom-8 left-8 z-10">
            <TransitionLink href="/home">
              <Image
                src="/logo-w.svg"
                alt="Logo"
                width={120}
                height={40}
                className=""
              />
            </TransitionLink>
          </div>
          <div className="absolute top-8 left-8 z-10 flex items-center">
            <TransitionLink href="/home">
              <span className="text-white text-7xl font-bold drop-shadow-lg">
                DentalSys
              </span>
            </TransitionLink>
          </div>
          <div className="absolute inset-0 bg-dodgerblue-500/40 backdrop-blur-2xs pointer-events-none" />
        </div>
        <section className="col-span-1 flex justify-center items-center flex-col py-10 h-full">
          {children}
        </section>
      </div>
    </>
  );
};

export default AuthLayout;
