import Globe from "react-globe.gl";
import Button from "../components/Button";
import React, { useState } from "react";

const About = () => {
  const [hasCopy, setHasCopy] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("mprabhanjan18@gmail.com");
    setHasCopy(true);

    setTimeout(() => {
      setHasCopy(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Introduction Section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid1.png"
              className="w-full sm:h-[276px] h-fit object-contain"
              alt="Profile"
            />
            <div>
              <p className="grid-headtext">Hi, I am Prabhanjan</p>
              <p className="grid-subtext">
                With 1 year of experience, I have created many projects and
                worked with various clients, delivering projects effectively.
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="assets/grid2.png"
              alt="Tech Stack"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                Specialized in JavaScript, React, Three.js
              </p>
            </div>
          </div>
        </div>

        {/* Globe Section */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[362px] h-fit flex justify-center items-center flex-col">
              <Globe
                height={362}
                width={362}
                backgroundColor="rgba(0,0,0,0)"
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 40,
                    lng: -100,
                    text: "I am here",
                    color: "red",
                    size: 100,
                    key: "location-label",
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">I work remotely worldwide</p>
              <p className="grid-subtext">Currently working at HackerRoom</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        {/* Love for Coding Section */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid3.png"
              height={276}
              width={276}
              alt="Coding Love"
            />
            <div>
              <p className="grid-headtext">Love for Coding</p>
              <p className="grid-subtext">Learning from debugging things</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="Contact Me"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div className="space-y-2">
              <p className="grid-subtext">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <Button name={hasCopy ? "Copied!" : "Copy Email"} isBeam />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
