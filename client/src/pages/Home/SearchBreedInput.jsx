import React, { useState } from 'react';
import { X } from 'lucide-react'

const SearchBreedInput = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  };

  const handleReset = () => {
    setSearchTerm('')
  }

  return (
    <>
    <div className="flex justify-center mt-5">
      <div className='relative w-full max-w-md'>
        <input
          onChange={handleChange}
          value={searchTerm}
          type='text'
          placeholder='Search a dog breed...'
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
      </div>
      </div>
    </>
  );
};

export default SearchBreedInput;
