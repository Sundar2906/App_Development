import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './PlantIdentification.css'
function PlantIdentification() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [results, setResults] = useState(null);
  // const navigate = useNavigate();
  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/res");
  };


  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    try {
      const formData = new FormData();
      formData.append('image', file);

      // Replace 'http://localhost:5000' with your backend API endpoint
      const response = await axios.post('http://localhost:5000/api/process-image', formData);

      setResults(response.data);
    } catch (error) {
      console.error('Error processing image:', error);
    }
  };

  // const RedirectToResultPage = () => {
  //   navigate('/result');
  // };

  return (
    <div className='head-plant'>
      <h1>Plant Identification</h1>
      <br></br>
      <input className='imggg'
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
      {selectedImage && (
        <div className='image'>
          <h2>Selected Image</h2>
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" className='imgg' />
          <button onClick={handleClick}>Search Plant</button>
        </div>
      )}
      {results && (
        <div>
          <h2>Identification Results</h2>
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default PlantIdentification;
