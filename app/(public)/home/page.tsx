import { CustomCard } from "@/components/sections/BlockInTextCard";
import ShuffleHero from "@/components/sections/Hero";
import HoverDevCards from "@/components/sections/HoverCards";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_10px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-10">
      <main className="flex flex-col gap-[32px] row-start-2 items-center">
        <ShuffleHero />



        <HoverDevCards />
      </main>
    </div>
  );
}
