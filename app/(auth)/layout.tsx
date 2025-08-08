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
        <div className="col-span-2 h-full relative overflow-hidden">
          <Image
            src="/side-image.jpg"
            alt="logo"
            className="h-screen w-full object-cover bg-no-repeat pointer-events-none grayscale object-[center_45%]"
            width={1920}
            height={1080}
            priority
            quality={100}
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
          <div className="absolute inset-0 bg-zinc-900/60 backdrop-blur-5xs pointer-events-none" />
          {/* <div className="absolute inset-0 bg-dodgerblue-800/50 backdrop-blur-2xs pointer-events-none" /> */}
        </div>
        <section className="col-span-1 flex justify-center items-center flex-col py-10 h-full">
          {children}
        </section>
      </div>
    </>
  );
};

export default AuthLayout;
