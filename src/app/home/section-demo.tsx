import React from "react";

import { cn } from "@/lib/utils";

interface SectionDemo {
  className?: string;
}

const SectionDemo = ({ className }: SectionDemo) => {
  return (
    <div
      className={cn(
        "w-full aspect-video h-max border-secondary rounded-2xl overflow-clip relative",
        className,
      )}
    >
      <iframe
        // eslint-disable-next-line max-len
        src="https://www.loom.com/embed/6340a7841328414f989cdcfcefd7185c?sid=a52465cd-7ee7-46b0-bd45-9de350e4e526?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true"
        width={"100%"}
        height={"100%"}
        allowFullScreen
        className=""
      ></iframe>
    </div>
  );
};

export default SectionDemo;
