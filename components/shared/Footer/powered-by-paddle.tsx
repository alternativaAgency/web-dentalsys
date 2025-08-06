import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";

const paddleLinks = [
  {
    label: "Portal da Privacidade ",
    href: "/privacy-portal",
  },
  {
    label: "Termos de Uso",
    href: "/terms",
  },
  {
    label: "Política de Privacidade",
    href: "/privacy",
  },
  {
    label: "Política de Cookies",
    href: "/cookies",
  },
  {
    label: "Código de Ética e Conduta",
    href: "/terms",
  },
  {
    label: "Ouvidoria",
    href: "/privacy",
  },
];

export function PoweredByPaddle() {
  return (
    <>
      <Separator className="footer-border" />
      <div className="flex flex-col justify-center items-center gap-2 text-muted-foreground text-sm leading-[14px] py-[24px]">
        <div className="flex justify-center items-center gap-2">
          <span className="text-sm leading-[14px]">A product template by</span>
          <Image src={"logo.svg"} alt={"CPlogo"} width={34} height={14} />
        </div>
        <br />
        <div className="flex justify-center items-center gap-2 flex-wrap md:flex-nowrap">
          <span className="mr-2 text-zinc-700">
            Todos os direitos reservados &copy; {new Date().getFullYear()}
          </span>
          {paddleLinks.map((link) => (
            <Link
              key={link.label}
              className="text-sm leading-[14px]"
              href={link.href}
              target="_blank"
            >
              <span className="flex items-center gap-1">{'/ '}
                {link.label}
                <ArrowUpRight className="text-dodgerblue-500 h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
