import React from 'react'

const VerticalBar = () => {
  return (
    <div className='flex space-x-6 mt-10'>
        <div>
            <div class="flex h-36 w-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{transform: 'rotate(180deg)'}}>
                <div class="flex flex-col justify-end rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{height: '25%', width: '100%', transform: 'rotate(180deg)'}}></div>
            </div>
            <div class="mb-2 flex justify-between items-center -ml-2">
                <h3 class="text-sm font-semibold text-gray-800 dark:text-white">Mon</h3>
            </div>
        </div>
        <div>
            <div class="flex h-36 w-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{transform: 'rotate(180deg)'}}>
                <div class="flex flex-col justify-end rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{height: '50%', width: '100%', transform: 'rotate(180deg)'}}></div>
            </div>
            <div class="mb-2 flex justify-between items-center -ml-2">
                <h3 class="text-sm font-semibold text-gray-800 dark:text-white">Tue</h3>
            </div>
        </div>
        <div>
            <div class="flex h-36 w-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{transform: 'rotate(180deg)'}}>
                <div class="flex flex-col justify-end rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{height: '75%', width: '100%', transform: 'rotate(180deg)'}}></div>
            </div>
            <div class="mb-2 flex justify-between items-center -ml-2">
                <h3 class="text-sm font-semibold text-gray-800 dark:text-white">Wed</h3>
            </div>
        </div>
        <div>
            <div class="flex h-36 w-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{transform: 'rotate(180deg)'}}>
                <div class="flex flex-col justify-end rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{height: '100%', width: '100%', transform: 'rotate(180deg)'}}></div>
            </div>
            <div class="mb-2 flex justify-between items-center -ml-2">
                <h3 class="text-sm font-semibold text-gray-800 dark:text-white">Thu</h3>
            </div>
        </div>
        <div>
            <div class="flex h-36 w-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{transform: 'rotate(180deg)'}}>
                <div class="flex flex-col justify-end rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{height: '60%', width: '100%', transform: 'rotate(180deg)'}}></div>
            </div>
            <div class="mb-2 flex justify-between items-center -ml-2">
                <h3 class="text-sm font-semibold text-gray-800 dark:text-white">Fri</h3>
            </div>
        </div>
        <div>
            <div class="flex h-36 w-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{transform: 'rotate(180deg)'}}>
                <div class="flex flex-col justify-end rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{height: '45%', width: '100%', transform: 'rotate(180deg)'}}></div>
            </div>
            <div class="mb-2 flex justify-between items-center -ml-2">
                <h3 class="text-sm font-semibold text-gray-800 dark:text-white">Sat</h3>
            </div>
        </div>
        <div>
            <div class="flex h-36 w-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{transform: 'rotate(180deg)'}}>
                <div class="flex flex-col justify-end rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{height: '80%', width: '100%', transform: 'rotate(180deg)'}}></div>
            </div>
            <div class="mb-2 flex justify-between items-center -ml-2">
                <h3 class="text-sm font-semibold text-gray-800 dark:text-white">Sun</h3>
            </div>
        </div>
    </div>
  )
}

export default VerticalBar