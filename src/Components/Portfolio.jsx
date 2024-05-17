

import React from "react";


import image from "../images/aa.avif";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "LUCK GAME 🎉",
    description:
      "It is a game designed in c language that can be played between two users . All instructions for that are mentioned in the start. Both users have to choose even number of boxes with unity and then there will be equal number of terms for each player in which each of them has to choose a box from given no of boxes displayed on the console,to get hidden cash inside the box.Once all the boxes are opened ,the user with greater amount will be declared as Winner",
    url: "https://github.com/Abdulbasit-Samad/LUCK-GAME-PROJECT",
  },
  {
    title: "BOOLEAN RETRIEVAL MODEL",
    description:
      "n this project of Information Retrieval, an information retrieval model called Boolean Information Retrieval Model is implemented. There is a collection of 30 documents on which it is implemented. It can handle a simplified Boolean user query that can only be formed by joining three terms (t1, t2 and t3) with (AND, OR and NOT) Boolean operators.",
    url: "https://github.com/Abdulbasit-Samad/BooleanRetrievalModel",
  },
  {
    title: "Data-Manipulation-Of-Book-Records",
    description:
      "It was the project of Data Structures implemented in c++ language in which I managed around 1GB dataset of books containing 20 attributes (implementation in c++)",
    url: "https://github.com/Abdulbasit-Samad/Data-Manipulation-Of-Book-Records",
  },
  {
    title: "4-BIT-Arithmetic-And-Logic-Unit",
    description:
      "As it is the most important component of C.P.U which is capable of performing all arithmetic and logical operations which inspired and motivated to design this on software as well as hardware level.",
    url: "https://github.com/Abdulbasit-Samad/4-BIT-Arithmetic-And-Logic-Unit",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
