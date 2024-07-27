// src/pages/Container/AllContainers/AllContainers.js
import React, { useEffect } from 'react';
import { useContainerContext } from '../context/ContainerContext';
import ToggleSwitch from './container/ToggleSwitch';
import StopButton from './container/StopButton';
import RestartButton from './container/RestartButton';
import DeleteButton from './container/DeleteButton';
import Status from './container/Status';
import CreatedOn from './container/CreatedOn';
import './AllContainers.css';

const AllContainers = () => {
  const { state, fetchContainers } = useContainerContext();

  useEffect(() => {
    fetchContainers();
  }, [fetchContainers]);

  return (
    <div>
      <div className="card-container">
        {state.containers.map(container => (
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

export default AllContainers;
