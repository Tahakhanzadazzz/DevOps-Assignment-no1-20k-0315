
import React, { useState } from 'react';


const Projects = () => {

  const projectData = [
    { name: 'Texttutils', tech: 'React js' },
    { name: 'News Monkey', tech: 'Java' },
    { name: 'My Resume', tech: 'Node.js, React js ,javascript,html,Css' },
    { name: 'Sorting Visualizer', tech: 'Node.js, React js' },
    // Add more projects as needed
  ];

  const [filterInput, setFilterInput] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projectData);

  const handleFilterChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setFilterInput(inputValue);

    const filtered = projectData.filter((project) =>
      project.tech.toLowerCase().includes(inputValue)
    );
    setFilteredProjects(filtered);
  };
  

  return (
    <div >
        
      
        
        <section className="projects" >
          <input
            type="text"
            id="filterInput"
            placeholder="Filter by technology..."
            value={filterInput}
            onChange={handleFilterChange}
          />
          <ul id="projectList">
            {filteredProjects.map((project, index) => (
              <li key={index} data-tech={project.tech}>
                {project.name} ({project.tech})
              </li>
            ))}
          </ul>
        </section>
      </div>

  );
};

export default Projects;
