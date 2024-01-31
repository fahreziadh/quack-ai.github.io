"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MainLogo {
  type?: "full" | "logo-only";
}

const MainLogo = ({ type = "full" }: MainLogo) => {
  return (
    <Link href={"/"} className="flex items-center w-max gap-3">
      <Image src={"/quack.png"} width={32} height={32} alt={"Quack AI Logo"} />
      <motion.h1
        initial={{ opacity: 1, x: 0 }}
        animate={{
          opacity: type === "full" ? 1 : 0,
          x: type === "full" ? 0 : -70,
        }}
        transition={{
          duration: 0.5,
        }}
        className="text-xl font-semibold text-primary"
      >
        Quack AI
      </motion.h1>
    </Link>
  );
};

export default MainLogo;
