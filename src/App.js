/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
// import Projects from "./Components/Projects";
import "./styles.css";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import Certifications from "./Components/Certifications";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Abdul Basit",
  title: "Front End Developer at Zenkoders",
  email: "k200333@nu.edu.pk",
  gitHub: "Abdulbasit-Samad",
  instagram: "basitsamad_/",
  linkedIn: "abdul-basit-34645a22b/",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Projects/>
      <Education/>
      <Certifications/>
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
