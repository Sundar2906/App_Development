import React from 'react';
import './My-plants.css'; // Import your CSS file

const plantsData = [
  {
    name: 'Potato',
    location: 'FrontYard',
    imageSrc: './plant1.webp',
  },
  {
    name: 'Tomato',
    location: 'BackYard',
    imageSrc: 'plant2.jpg',
  },
  {
    name: 'Ladys Finger',
    location: 'BackYard',
    imageSrc: 'plant2.jpg',
  },
  {
    name: 'Beetroot',
    location: 'BackYard',
    imageSrc: 'plant2.jpg',
  },
  {
    name: 'Carrot',
    location: 'BackYard',
    imageSrc: 'plant2.jpg',
  },
  {
    name: 'Beans',
    location: 'BackYard',
    imageSrc: 'plant2.jpg',
  },
  {
    name: 'Bottleguard',
    location: 'BackYard',
    imageSrc: 'plant2.jpg',
  },
  // Add more plant data as needed
];

function PlantGallery() {
  return (
    <div className="plant-gallery">
      {plantsData.map((plant, index) => (
        <div key={index} className="plant-card">
          <img src={plant.imageSrc} className="plant-image" />
          <div className="plant-details">
            <h2 className="plant-name">{plant.name}</h2>
            <p className="plant-location">{plant.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PlantGallery;
