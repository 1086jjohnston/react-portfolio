import React from 'react';
import headshot from "../assets/images/jj-headshot.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <p>My name is Jordan Johnston and I am a developer focusing on front end applications. On this site you can find some previous projects I've worked on.</p>
      <img src={headshot} className="my-2" style={{ width: "100%" }} alt="cover img" />
    </section>
  );
}

export default About;