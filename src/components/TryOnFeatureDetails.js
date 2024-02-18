import React, { useState } from 'react';

function TryOnFeatureDetails() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div id = "try-on-feature" className="py-10 bg-white text-center">
      <h2 className="text-2xl font-bold">Try On Your Favorite Dress</h2>
      <p className="mt-4">Upload your photo to try on dresses virtually.</p>
      <input type="file" onChange={handleImageChange} className="mt-4" />
      {selectedImage && (
        <div className="mt-4">
          <p>Preview:</p>
          <img src={selectedImage} alt="Preview" className="mx-auto" style={{ height: '200px' }} />
        </div>
      )}
    </div>
  );
}

export default TryOnFeatureDetails;
