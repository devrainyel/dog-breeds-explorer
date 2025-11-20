import React from 'react'

const SearchBreedInput = () => {
  return (
    <>
    <input
          type='text'
          placeholder='Search a dog breed...'
          className='
          w-full max-w-md
          px-5 py-3 mt-5
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
    </>
  )
}

export default SearchBreedInput