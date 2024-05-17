

import React from "react";

import image from "../images/bb.avif";

const imageAltText = "purple and blue abstract background";


const description =
  "I'm a CS student studying at National University of Computer and Emerging Sciences.Also a frontend developer at Zenkoders a software Company";

const skillsList = [
  "Font End Developer",
  "Nest JS",
  "Next JS",
  "Python",
  "C++",
  "C",
  "Python"
];

const detailOrQuote =
  "I am a dedicated computer science student with a passion for development. Eager to explore and contribute to the ever-evolving field of technology, I thrive on turning ideas into innovative and functional solutions. My journey involves continuous learning and a commitment to creating impactful software that addresses real-world challenges.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
