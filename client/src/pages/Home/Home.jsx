import React from 'react';
import SearchBreedInput from './SearchBreedInput';
import DogSizeCard from './DogSizeCard';

const dogCards = [
  {
    title: 'Extra Small',
    weight: 'Weighing below 9 lb',
    result: '14 results',
    src: './extrasmalldog.png',
    alt: 'extrasmalldog'
  },
  {
    title: 'Small',
    weight: 'Weighing below 9 lb',
    result: '14 results',
    src: './smalldog.png',
    alt: 'smalldog'
  },
  {
    title: 'Medium',
    weight: 'Weighing 10–25 lb',
    result: '14 results',
    src: './mediumdog.png',
    alt: 'mediumdog'
  },
  {
    title: 'Large',
    weight: 'Weighing 26–97 lb',
    result: '14 results',
    src: './largedog.png',
    alt: 'largedog'
  },
  {
    title: 'Very Large',
    weight: 'Weighing over 98 lb',
    result: '14 results',
    src: './verylargedog.png',
    alt: 'verylargedog'
  },
];

const Home = () => {
  return (
    <section className='flex flex-col items-center min-h-screen pt-20 px-2'>
      <div className='max-w-5xl text-center'>
        <h1 className='font-bold text-7xl text-blue-950'>
          Search & Explore Different Dog Breeds
        </h1>
        <p className='text-xl mt-3'>
          There are more breeds than you know, you can explore by searching and
          filtering below
        </p>
        <SearchBreedInput />
      </div>
      <div className='mt-15'>
        <h2 className='font-bold text-4xl text-gray-700 text-center'>
          There are different sizes of dogs
        </h2>
        <div className='flex flex-wrap justify-center gap-6 mt-10'>
          {dogCards.map((dogCard, index) => (
            <DogSizeCard key={index} {...dogCard} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
