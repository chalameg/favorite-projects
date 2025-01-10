import React, { createContext, useState } from 'react';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: 'Project Alpha',
      description: 'A sample project description.',
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      manager: 'John Doe',
    },
    {
      id: 2,
      name: 'Project Beta',
      description: 'Another sample project description.',
      startDate: '2023-02-01',
      endDate: '2023-10-15',
      manager: 'Jane Smith',
    },
  ]);

  const updateProject = (updatedProject) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      )
    );
  };

  return (
    <ProjectContext.Provider value={{ projects, updateProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
