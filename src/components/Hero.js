import React from "react";
import HeroButton from "./HeroButton";
import HeroPhoto from "./HeroPhoto";
import logo from "./../images/hero.jpg";

function Hero() {
  return (
    <section className="relative">
        <HeroPhoto className="mx-auto absolute" img={logo} />
        <div className="absolute 
                top-1/2 
                left-1/2 
                transform 
                -translate-x-1/2 
                -translate-y-1/2
                text-center">
            <p className="
                text-4xl
                font-semibold 
                text-gray-200
                mb-4">Dahyun is so cute!</p>
            <HeroButton title="Good" />
        </div>
    </section>
  );
}

export default Hero;
