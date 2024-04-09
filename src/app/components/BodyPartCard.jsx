'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const BodyPartCard = () => {
  const [activePart, setActivePart] = useState('');

  const highlightBodyPart = (part) => {
    setActivePart(part);
  };

  // SVG path coordinates for connecting lines
  const lines = {
    Chest: "M300,200 L150,150",
    Shoulder: "M70,130 L300,200",
    Abs: "M120,200 L250,200",
    Legs: "M100,450 L250,210",
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg text-white">
      <div className="flex justify-between mb-4">
        {['Chest', 'Shoulder', 'Abs', 'Legs'].map((part) => (
          <button
            key={part}
            className={`p-2 ${activePart === part ? 'bg-gray-900' : 'bg-gray-800'} rounded-full px-4`}
            onClick={() => highlightBodyPart(part)}
          >
            {part}
          </button>
        ))}
      </div>
      <div className='flex'>
        <div className=" lg:mt-[27rem] mt-80 space-y-10">
          <div className='leading-5'>
            <p className='text-gray-500'>Height</p>
            <p>5ft 4inch</p>
          </div>
          <div className='leading-5'>
            <p className='text-gray-500'>Weight</p>
            <p>120 lbs</p>
          </div>
        </div>
        <div className="relative">
          <Image src='/anatomy.png' width={250} height={250} alt='anatomy' className='lg:w-auto lg:h-auto w-52' />
          {activePart && (
            <div className={`absolute inset-0 flex items-center justify-center text-4xl transition-all font-bold`}>
              <div className=' ml-64 -mt-40 text-gray-300 text-xl'>
                {activePart}
              </div>
              {/* SVG line connecting active body part */}
              <svg className="absolute inset-0" width="100%" height="100%">
                <path d={lines[activePart]} stroke="#fff" strokeWidth="2" fill="none" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BodyPartCard;

