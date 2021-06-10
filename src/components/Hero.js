import React from "react";
import HeroButton from "./HeroButton";
import HeroPhoto from "./HeroPhoto";
import logo from "./../images/hero.jpg";

function Hero() {
  return (
    <section>
        <HeroPhoto img={logo} />
        <p className="text-lg font-semibold text-red-400">GGddG</p>
        <HeroButton title="Good" />
        <HeroButton />
    </section>
  );
}

export default Hero;
