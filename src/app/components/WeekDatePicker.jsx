'use client'
import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const WeekDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentWeek, setCurrentWeek] = useState(1)

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
  ];

  const handlePrevWeek = () => {
    setCurrentWeek(prevWeek => Math.max(prevWeek - 1, 1))
    setSelectedDate(null)
  }

  const handleNextWeek = () => {
    setCurrentWeek(prevWeek => Math.min(prevWeek + 1, dates.length))
    setSelectedDate(null)
  }

  return (
    <div className="flex justify-between p-4 rounded-lg">
      <button onClick={handlePrevWeek} className='-ml-7 mt-5'>
        <FaArrowCircleLeft size={25} className='text-gray-600' />
      </button>
      {days.map((day, index) => (
        <div key={day} className="text-center">
          <div className={`text-${selectedDate === dates[currentWeek - 1][index] ? 'black' : 'gray-500'}`}>{day}</div>
          <button
            className={`text-${selectedDate === dates[currentWeek -1][index] ? 'black' : 'white'} rounded-full p-2 ${selectedDate === dates[currentWeek - 1][index] ? 'bg-white' : 'bg-gray-700'}`}
            onClick={() => setSelectedDate(dates[currentWeek - 1][index])}
          >
            {dates[currentWeek - 1][index]}
          </button>
        </div>
      ))}
      <button onClick={handleNextWeek} className='mt-5 lg:-mr-5 -mr-3'>
        <FaArrowCircleRight size={25} className='text-gray-600' />
      </button>
    </div>
  );
};

export default WeekDatePicker;




