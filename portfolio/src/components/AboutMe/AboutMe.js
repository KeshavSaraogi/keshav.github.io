import "./AboutMe.css";
import React, { useEffect, useState } from 'react';

function AboutMe() {
  const [image, setImage] = useState('');

  useEffect(() => {
    fetch('https://picsum.photos/800')
      .then(response => response.blob())
      .then(imageBlob => {
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImage(imageObjectURL);
      })
      .catch(error => console.error('Error fetching image:', error));
  }, []);

  return (
    <div id="aboutme" className="aboutme-container">
      <img src={image} alt="about me" />
      <div>
        <h1>About Me</h1>
        <p>I am a Graduate Student in Boston University, majoring in Computer Science. </p>
        <p>I am experienced in Full Stack Web Development and Android Mobile Development.</p>
        <p>I worked as a Software Developer Intern for Patton Labs, located in Jacksonville, Florida.</p>
        <p>Currently, I am learning about Data Science and Machine Learning to explore new areas of interest and opportunities.</p>
        <p>I enjoy playing Chess and Stand-up Comedy Shows.</p>
      </div>
    </div>
  );
}

export default AboutMe; 
