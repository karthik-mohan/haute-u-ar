import React, { useState } from 'react';

const dresses = [
  { id: 1, image: process.env.PUBLIC_URL + '/texture1.png', title: 'Dress 1' },
  { id: 2, image: process.env.PUBLIC_URL + '/texture2.png', title: 'Dress 2' },
  { id: 3, image: process.env.PUBLIC_URL + '/texture3.png', title: 'Dress 3' },
  { id: 4, image: process.env.PUBLIC_URL + '/texture4.png', title: 'Dress 4' },

  // Add more dresses as needed
];

function CollectionsShowcase() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-center text-2xl font-bold">Our Collection</h2>
      <div className="flex flex-wrap justify-center mt-5">
        {dresses.map((dress) => (
          <div key={dress.id} className="m-4">
            <img
              src={dress.image}
              alt={dress.title}
              className="h-64 w-64 object-cover cursor-pointer"
              onClick={() => setSelectedImage(dress.image)}
            />
            <p className="text-center mt-2">{dress.title}</p>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} alt="Selected" className="max-h-full max-w-full p-4" />
        </div>
      )}
    </div>
  );
}

export default CollectionsShowcase;