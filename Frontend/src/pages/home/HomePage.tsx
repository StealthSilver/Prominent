import Footer from "../../components/Footer";
import OpenAccount from "../../components/OpenAccount";
import Awards from "./Awards";
import Education from "./Education";
import Hero from "./Hero";
import Navbar from "../../components/Navbar";
import Pricing from "./Pricing";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Awards />
      <Pricing />
      <Education />
      <OpenAccount />
      <Footer />
    </>
  );
}
