import Image from "next/image";
import Script from "next/script";
import { FC } from "react";

import waveBot from "../../public/wave-bottom.svg";
import Backers from "../components/old-ui/Backers";
import Footer from "../components/old-ui/Footer";
import Hero from "../components/old-ui/Hero";
import Navbar from "../components/old-ui/Navbar";
import Workflow from "../components/old-ui/Workflow";
import styles from "../styles/Home.module.css";

const wideStyle = {
  width: "100%",
};

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Script src="https://buttons.github.io/buttons.js" async defer></Script>
      <main>
        <Hero />
        <Workflow />
        <div className="wave-bottom">
          <Image src={waveBot} alt="Wave graphics" style={wideStyle} />
        </div>
        <Backers />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
