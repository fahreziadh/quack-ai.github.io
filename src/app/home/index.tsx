import React from "react";

import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";

import SectionBackedBy from "./section-backed-by";
import SectionDemo from "./section-demo";
import SectionHeader from "./section-header";
import SectionHowItWorks from "./section-how-it-works";

const HomePage = () => {
  return (
    <div className="container">
      <Navbar />
      <SectionHeader className="mt-28" />
      <SectionDemo className="mt-16" />
      <SectionBackedBy />
      <SectionHowItWorks />
      <Footer />
    </div>
  );
};

export default HomePage;
