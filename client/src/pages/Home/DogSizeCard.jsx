import React from 'react';

const DogSizeCard = ({ src, alt, title, weight, result }) => {
  return (
    <div className='border border-gray-300 rounded-xl p-4 w-60 shadow-sm hover:shadow-lg transition'>
      <img src={src} alt={alt} className='w-full object-contain rounded-md' />
      <h3 className='text-xl font-semibold mt-3'>{title}</h3>
      <span className='text-gray-600 text-sm'>{weight}</span>
      <p className='text-gray-800 font-medium mt-1'>{result}</p>
    </div>
  );
};

export default DogSizeCard;
