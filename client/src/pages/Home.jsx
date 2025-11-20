import React from 'react';

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
    <section className='flex flex-col items-center min-h-screen pt-20'>
      <div className='max-w-5xl px-2 text-center'>
        <h1 className='font-bold text-7xl text-blue-950'>
          Search & Explore Different Dog Breeds
        </h1>
        <p className='text-xl mt-3'>
          There are more breeds than you know, you can explore by searching and
          filtering below
        </p>
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
      </div>
      <div className='mt-15'>
        <h2 className='font-bold text-4xl text-gray-700 text-center'>
          There are different sizes of dogs
        </h2>
        <div className='flex flex-wrap justify-center gap-6 mt-10'>
          {dogCards.map((dogCard, index) => (
            <div key={index} className='border border-gray-300 rounded-xl p-4 w-60 shadow-sm hover:shadow-lg transition'>
              <img
                src={dogCard.src}
                alt={dogCard.alt}
                className='w-full object-contain rounded-md'
              />
              <h3 className='text-xl font-semibold mt-3'>{dogCard.title}</h3>
              <span className='text-gray-600 text-sm'>{dogCard.weight}</span>
              <p className='text-gray-800 font-medium mt-1'>{dogCard.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
