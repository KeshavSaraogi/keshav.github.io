import React, { useState, useEffect } from 'react';
import "./Portfolio.css";
import { projects } from "./projects";
import { Modal } from "../animations/index";

function Portfolio() {
  const [currentIdx, setCurrentIdx] = useState(null);
  const [currentImage, setCurrentImage] = useState('');
  const [projectImages, setProjectImages] = useState([]);

  // Function to fetch an image from the URL, ensuring it respects size constraints
  const fetchImage = async (url) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      return imageUrl;
    } catch (error) {
      console.error('Failed to fetch image:', error);
      return '';
    }
  };

  useEffect(() => {
    const fetchProjectImages = async () => {
      const images = await Promise.all(projects.map(async (project) => {
        const imageUrl = await fetchImage(project.image);
        return imageUrl;
      }));
      setProjectImages(images);
    };
    fetchProjectImages();
  }, []);

  const handleClick = (idx) => {
    const project = projects[idx];
    setCurrentIdx(idx);
    setCurrentImage(projectImages[idx]);
  };

  const clearCurrent = () => {
    setCurrentIdx(null);
    setCurrentImage('');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      const prevIdx = currentIdx === 0 ? projects.length - 1 : currentIdx - 1;
      handleClick(prevIdx);
    } else if (event.key === 'ArrowRight') {
      const nextIdx = currentIdx === projects.length - 1 ? 0 : currentIdx + 1;
      handleClick(nextIdx);
    }
  };
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIdx, handleKeyDown]);

  const projectList = projects.map((project, idx) => (
    <div key={idx} onClick={() => handleClick(idx)} className="portfolio-projects-frame">
      <img src={currentIdx === idx ? currentImage : projectImages[idx]} alt={project.title} />
    </div>
  ));

  let currentProject = currentIdx !== null ? projects[currentIdx] : null;

  return (
    <div id="portfolio" className="portfolio-container">
      <h1>Portfolio</h1>
      <div className="portfolio-grid">
        {currentProject && (
          <Modal
            onClick={clearCurrent}
            title={currentProject.title}
            description={currentProject.description}
            image={currentImage}
            url={currentProject.url}
          />
        )}
        {projectList}
      </div>
    </div>
  );
}

export default Portfolio;