import React, { useState } from "react";
import "./CrowdfundingList.css";

const CrowdfundingList = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ name: "", walletAddress: "", donatedAmount: 0 });

  const addProject = () => {
    setProjects([...projects, newProject]);
    setNewProject({ name: "", walletAddress: "", donatedAmount: 0 });
  };

  return (
    <div className="centered-container">
      <h2>Crowdfunding Projects</h2>

      <div>
        <input
          type="text"
          placeholder="Project Name"
          value={newProject.name}
          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
        />
         <input
          type="text"
          placeholder="Description"
          value={newProject.name}
          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Wallet Address"
          value={newProject.walletAddress}
          onChange={(e) => setNewProject({ ...newProject, walletAddress: e.target.value })}
        />
        <input
          type="number"
          placeholder="Donated Amount"
          value={newProject.donatedAmount}
          onChange={(e) => setNewProject({ ...newProject, donatedAmount: parseFloat(e.target.value) || 0 })}
        />
        <button onClick={addProject}>Add Project</button>
      </div>

      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <strong>Project Name:</strong> {project.name}, <strong>Wallet Address:</strong>{" "}
            {project.walletAddress}, <strong>Donated Amount:</strong> {project.donatedAmount} COMDEX
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrowdfundingList;
