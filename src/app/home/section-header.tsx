import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";
import { TbBrandVscode } from "react-icons/tb";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  className?: string;
}

const SectionHeader = ({ className }: SectionHeaderProps) => {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <Link href={"https://github.com/quack-ai/quack-companion-vscode"}>
        <Button variant={"secondary"}>
          <Github size={14} className="mr-2" /> Star us on Github
        </Button>
      </Link>
      <h1 className="font-semibold text-3xl md:text-5xl text-center mt-6 text-[#37322F] leading-tight">
        AI <span className="text-primary">companion</span> <br /> for software
        team alignment
      </h1>
      <h3 className="mt-4 max-w-[500px] text-[#525252] text-center text-sm md:text-lg">
        Give shape & consistency to your developer {`team's`} expectations with
        our VSCode extension.
      </h3>

      <Link
        href={
          "https://marketplace.visualstudio.com/items?itemName=QuackAI.quack-companion"
        }
      >
        <Button variant={"default"} size={"lg"} className="mt-10">
          <TbBrandVscode size={16} className="mr-2" /> Install Extension
        </Button>
      </Link>
    </div>
  );
};

export default SectionHeader;
