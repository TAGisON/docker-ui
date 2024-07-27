// src/pages/Image/ImageList/ImageList.js
import React, { useEffect } from 'react';
import { useImageContext } from '../context/ImageContext';
import RunButton from './image/RunButton';
import DeleteButton from './image/DeleteButton';
import './ImageList.css'
const ImageList = () => {
  const { state, fetchImages } = useImageContext();

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <div className="image-list">
      <h2>Images</h2>
      <div className="card-container">
        {state.images.map(image => (
          <div className="card" key={image.ID}>
            <h3>{image.Repository}</h3>
            <p>ID: {image.ID}</p>
            <p>Created: {image.CreatedSince}</p>
            <p>Size: {image.Size}</p>
            <RunButton imageId={image.ID} />
            <DeleteButton imageId={image.ID} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageList;
