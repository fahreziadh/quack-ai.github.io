"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import { useScrollPosition } from "@/hooks/use-scroll-position";
import { cn } from "@/lib/utils";

import MainLogo from "./main-logo";
import { Button } from "./ui/button";

interface NavbarProps {
  className?: string;
}

const Links = [
  {
    href: "https://docs.quackai.com/",
    label: "Documentation",
  },
  {
    href: "https://discord.com/invite/E9rY3bVCWd",
    label: "Discord",
  },
  {
    href: "https://docs.quackai.com/community/roadmap",
    label: "Roadmap",
  },
  // {
  //   href: "",
  //   label: "Blog",
  // },
];

export const Navbar = ({ className }: NavbarProps) => {
  const { scrollPosition } = useScrollPosition();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        width: scrollPosition > 10 ? "70%" : "100%",
        boxShadow:
          scrollPosition > 10
            ? "0 0 2px #5f4a2e14, 0 2px 3px #5f4a2e0a, 0 4px 6px #5f4a2e0a, 0 20px 32px -12px #5f4a2e1f"
            : "0 0 0px #5f4a2e14, 0 0px 0px #5f4a2e0a, 0 0px 0px #5f4a2e0a, 0 0px 0px 0px #5f4a2e1f",
        paddingLeft: scrollPosition > 10 ? "16px" : "8px",
        paddingRight: scrollPosition > 10 ? "16px" : "8px",
      }}
      transition={{
        type: "spring",
        bounce: 20,
        damping: 20,
        duration: 0.5,
      }}
      className={cn(
        "sticky top-4 grid grid-cols-2 md:grid-cols-3 bg-background py-4 rounded-2xl mx-auto z-50 overflow-clip min-w-full md:min-w-0",
        className,
      )}
    >
      <MainLogo type={scrollPosition > 10 ? "logo-only" : "full"} />
      <div className="place-self-center hidden md:flex items-center gap-2">
        {Links.map(({ href, label }) => (
          <Link href={href} key={label}>
            <Button size={"tab"} variant={"ghost"} className=" font-normal">
              {label}
            </Button>
          </Link>
        ))}
      </div>
      <div className="place-self-end">
        <Button variant={"secondary"}>Login</Button>
      </div>
    </motion.div>
  );
};
