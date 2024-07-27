// src/pages/Container/StoppedContainers/StoppedContainers.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ToggleSwitch from './container/ToggleSwitch';
import StopButton from './container/StopButton';
import RestartButton from './container/RestartButton';
import DeleteButton from './container/DeleteButton';
import Status from './container/Status';
import CreatedOn from './container/CreatedOn';
import './StoppedContainers.css';

const StoppedContainers = () => {
  const [containers, setContainers] = useState([]);

  useEffect(() => {
    const fetchContainers = async () => {
      try {
        const response = await axios.get('http://192.168.100.148:3230/api/container/fetch?status=stopped');
        setContainers(response.data);
      } catch (error) {
        console.error('Error fetching stopped containers:', error);
      }
    };
    fetchContainers();
  }, []);

  return (
    <div className="container-list">
      <h2>Stopped Containers</h2>
      <div className="card-container">
        {containers.map(container => (
          <div className="card" key={container.Id}>
            <h3>{container.Name}</h3>
            <Status containerId={container.Id} />
            <CreatedOn createdDate={container.Created} />
            <ToggleSwitch containerId={container.Id} initialStatus={container.State.Status} />
            <StopButton containerId={container.Id} />
            <RestartButton containerId={container.Id} />
            <DeleteButton containerId={container.Id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoppedContainers;
