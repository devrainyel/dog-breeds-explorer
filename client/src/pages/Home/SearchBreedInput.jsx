import React, { useState } from 'react';
import { X } from 'lucide-react'

const dogBreeds = [
  'Beagle',
  'Bulldog',
  'Dachshund',
  'German Shepherd',
  'Golden Retriever',
  'Labrador',
  'Poodle',
  'Shih Tzu',
];

const SearchBreedInput = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [showDropdown, setShowDropdown] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  };

  const handleReset = () => {
    setSearchTerm('')
  }

  const filteredBreeds = dogBreeds.filter(breed =>
    breed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOptionClick = (breed) => {
    setSearchTerm(breed);
    setShowDropdown(false);
  }; 

  return (
    <>
    <div className="flex justify-center mt-5">
      <div className='relative w-full max-w-md'>
        <input
          onChange={handleChange}
          value={searchTerm}
          type='text'
          placeholder='Search a dog breed...'
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
          className='
          w-full
          px-5 py-3 
          rounded-full
          border-2 border-amber-600
          bg-amber-100
          placeholder-amber-700
          text-gray-900
          focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-amber-900
          transition
          duration-200
          placeholder-opacity-80
          '
        />
        {searchTerm && (<button onClick={handleReset} className="absolute right-0 top-1/2 -translate-1/2 p-1 hover:scale-125"><X size={20} /></button>)}
        {showDropdown && filteredBreeds.length > 0 && (
          <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-300 bg-slate-200 shadow-lg text-start">
            {filteredBreeds.map((breed) => (
              <li
                key={breed}
                onClick={() => handleOptionClick(breed)}
                className="cursor-pointer px-4 py-2 hover:bg-amber-100"
              >
                {breed}
              </li>
            ))}
          </ul>
        )}
      </div>
      </div>
    </>
  );
};

export default SearchBreedInput;
