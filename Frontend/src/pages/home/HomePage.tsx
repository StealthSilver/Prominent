import OpenAccount from "../../components/OpenAccount";
import Awards from "./Awards";
import Education from "./Education";
import Hero from "./Hero";

import Pricing from "./Pricing";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}
