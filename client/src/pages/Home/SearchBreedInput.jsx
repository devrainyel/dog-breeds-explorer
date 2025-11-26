import React, { useState, useEffect } from 'react';
import BreedModal from '../../components/layout/Modal/BreedModal'
import { X } from 'lucide-react'


const SearchBreedInput = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [showDropdown, setShowDropdown] = useState(false);
  const [dogBreeds, setDogBreeds] = useState([]);
  const [currentBreed, setCurrentBreed] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const dogApiKey = import.meta.env.VITE_DOG_API;

        if (!dogApiKey) {
          throw new Error('Api key is not set.')
        }

        const res = await fetch('https://api.thedogapi.com/v1/breeds', {
          headers: {
            'x-api-key': dogApiKey,
          },
        }); 

        if (!res.ok) {
          throw new Error(`Failed to fetch breeds. Status: ${res.status} ${res.statusText}`)
        }

        const data = await res.json();
        console.log(data);
        
        // const breedNames = data.map(breed => breed.name).sort();
        setDogBreeds(data);
      } catch (err) {
        console.log('Error fetching breeds', err);
        setError(err.message);
        setDogBreeds([]);
      } finally {
        setIsLoading(false);
      }
    }
    fetchBreeds();
  }, [])

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  };

  const handleReset = () => {
    setSearchTerm('')
  }

  const filteredBreeds = dogBreeds.filter(breed =>
    breed.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOptionClick = (breedName) => {
    const breedData = dogBreeds.find(b => b.name === breedName);
    setCurrentBreed(breedData)
    setSearchTerm(breedName);
    setShowDropdown(false);
    setShowModal(true);
  }; 

  return (
    <>
    <div className="flex justify-center mt-5">
      <div className='relative w-full max-w-md'>
        <input
          onChange={handleChange}
          value={searchTerm}
          type='text'
          placeholder={isLoading ? 'Fetching breeds...' : 'Search a dog breed...'}
          disabled={isLoading}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setShowDropdown(false)}
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
        {searchTerm && !isLoading && (<button onClick={handleReset} className="absolute right-0 top-1/2 -translate-1/2 p-1 hover:scale-125"><X size={20} /></button>)}
        {showDropdown && !isLoading && !error && filteredBreeds.length > 0 && (
          <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-300 bg-slate-200 shadow-lg text-start">
            {filteredBreeds.map((breed) => (
              <li
                key={breed.id}
                onMouseDown={() => handleOptionClick(breed.name)}
                className="cursor-pointer px-4 py-2 hover:bg-amber-100"
              >
                {breed.name}
              </li>
            ))}
          </ul>
        )}
        {showDropdown && !isLoading && !error && filteredBreeds.length === 0 && searchTerm && (
          <div className="absolute z-10 mt-1 w-full rounded-md border border-gray-300 bg-slate-200 p-2 text-sm text-gray-600">
          No breeds found matching "{searchTerm}"
        </div>
        )}
        {showModal && <BreedModal setShowModal={setShowModal} breed={currentBreed} />}

      </div>
      </div>
    </>
  );
};

export default SearchBreedInput;
