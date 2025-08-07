"use client";

import * as React from "react";
import Link from "next/link";
import {
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  UserRound,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Button } from "../ui/button";
import { TransitionLink } from "@/lib/TransitionLink";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

export function NavMenu() {
  return (
    <div className="flex w-full py-4">
      <div className="flex-1 flex justify-center items-center gap-32">
        <Link href="/home" className="flex items-end">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={80} height={80} />
            <span className="text-zinc-700 font-bold text-xl">DentalSys</span>
          </div>
        </Link>
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <TransitionLink
                        className="relative from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md p-6 no-underline outline-hidden select-none focus:shadow-md hover:shadow-lg overflow-hidden"
                        href="/about"
                      >
                        {/* Background layer with blur */}
                        <div
                          className="absolute inset-0 bg-[url('/radio.jpeg')] bg-cover bg-center blur-[0.7px] bg-linear-to-b"
                          aria-hidden="true"
                        />

                        {/* Content layer without blur */}
                        <div className="relative z-10 p-3">
                          {/* Blur background for text */}
                          <div
                            className="absolute inset-0 rounded-md bg-black/5 backdrop-blur-sm"
                            aria-hidden="true"
                          />
                          <div className="relative mt-4 mb-2 text-white text-lg font-medium">
                            shadcn/ui
                          </div>
                          <p className="relative text-white/85 text-sm leading-tight">
                            Beautifully designed components built with Tailwind
                            CSS.
                          </p>
                        </div>
                      </TransitionLink>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/policies" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </ListItem>
                  <ListItem href="/policies" title="Installation">
                    How to install dependencies and structure your app.
                  </ListItem>
                  <ListItem href="/work" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <TransitionLink href="/docs">Docs</TransitionLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>List</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <TransitionLink href="/docs">
                        <div className="font-medium">Components</div>
                        <div className="text-muted-foreground">
                          Browse all components in the library.
                        </div>
                      </TransitionLink>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <TransitionLink href="/docs">
                        <div className="font-medium">Documentation</div>
                        <div className="text-muted-foreground">
                          Learn how to use the library.
                        </div>
                      </TransitionLink>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <TransitionLink href="/docs">
                        <div className="font-medium">Blog</div>
                        <div className="text-muted-foreground">
                          Read our latest blog posts.
                        </div>
                      </TransitionLink>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href="/home">xComponents</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">xDocumentation</Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link href="#">xBlocks</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[200px] gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <TransitionLink
                        href="/docs"
                        className="flex-row items-center gap-2"
                      >
                        <CircleHelpIcon />
                        Backlog
                      </TransitionLink>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <TransitionLink
                        href="/docs"
                        className="flex-row items-center gap-2"
                      >
                        <CircleIcon />
                        To Do
                      </TransitionLink>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <TransitionLink
                        href="/docs"
                        className="flex-row items-center gap-2"
                      >
                        <CircleCheckIcon />
                        Done
                      </TransitionLink>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex gap-2">
          <TransitionLink href="/login">
            <Button className="px-4 py-2 rounded-full bg-dodgerblue-500 text-white text-md hover:bg-dodgerblue-500/80 transition cursor-pointer">
              <UserRound />
              Área do Cliente
            </Button>
          </TransitionLink>
          <TransitionLink href="/about">
            <Button className="px-4 py-2 rounded-full bg-secondary text-primary text-md hover:bg-secondary/50 transition cursor-pointer">
              Saiba Mais
            </Button>
          </TransitionLink>
        </div>
      </div>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
