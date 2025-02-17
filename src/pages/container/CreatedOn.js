// src/pages/Container/CreatedOn/CreatedOn.js
import React from 'react';

const CreatedOn = ({ createdDate }) => {
  return <p>Created: {new Date(createdDate).toLocaleString()}</p>;
};

export default CreatedOn;
