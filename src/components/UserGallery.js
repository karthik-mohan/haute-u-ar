import React from 'react';

const dresses = [
    { id: 1, image: process.env.PUBLIC_URL + '/Dress1.png', title: 'Dress 1' },
    { id: 2, image: process.env.PUBLIC_URL + '/Dress2.png', title: 'Dress 2' },
    { id: 3, image: process.env.PUBLIC_URL + '/Dress3.png', title: 'Dress 3' },
    { id: 4, image: process.env.PUBLIC_URL + '/Dress4.png', title: 'Dress 4' },
    { id: 5, image: process.env.PUBLIC_URL + '/Dress5.png', title: 'Dress 5' },
    { id: 6, image: process.env.PUBLIC_URL + '/img2.png', title: 'Dress 6' },
    // Add more dresses as needed
  ];

function UserGallery() {
  return (
    <div className="py-10 bg-gray-100">
      <h2 className="text-center text-2xl font-bold">Our Collection</h2>
      <div className="flex flex-wrap justify-center mt-5">
        {dresses.map((dress) => (
          <div key={dress.id} className="m-4">
            <img src={dress.image} alt={dress.title} className="h-64 w-64 object-cover" />
            <p className="text-center mt-2">{dress.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserGallery;
