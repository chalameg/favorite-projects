import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProjectContext } from '../context/FavoriteContext';
import { TextField, Button, Box } from '@mui/material';

const ProjectEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects, updateProject } = useContext(ProjectContext);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const currentProject = projects.find((p) => p.id === parseInt(id, 10));
    if (currentProject) {
      setProject(currentProject);
    }
  }, [id, projects]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  const handleSave = () => {
    if (project) {
      updateProject(project);
      navigate('/');
    }
  };

  if (!project) return <p>Loading...</p>;

  return (
    <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '100%' }, maxWidth: 500 }}>
      <TextField
        label="Project ID"
        value={project.id}
        InputProps={{ readOnly: true }}
        variant="outlined"
        name="id"
      />
      <TextField
        label="Project Name"
        value={project.name}
        onChange={handleInputChange}
        variant="outlined"
        name="name"
      />
      <TextField
        label="Project Description"
        value={project.description}
        onChange={handleInputChange}
        variant="outlined"
        name="description"
      />
      <TextField
        label="Start Date"
        type="date"
        value={project.startDate}
        onChange={handleInputChange}
        variant="outlined"
        name="startDate"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="End Date"
        type="date"
        value={project.endDate}
        onChange={handleInputChange}
        variant="outlined"
        name="endDate"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Project Manager"
        value={project.manager}
        onChange={handleInputChange}
        variant="outlined"
        name="manager"
      />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </Box>
  );
};

export default ProjectEdit;
