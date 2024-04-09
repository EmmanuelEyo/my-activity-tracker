import React from 'react'

const ProgressBar = () => {
  return (

<div className=' leading-3'>
    <div class="flex items-center gap-x-3 whitespace-nowrap">
      <div class="flex w-36 h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div class="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{width: '25%'}}></div>
      </div>
      <div class="w-10 text-end">
        <span class="text-sm text-gray-800 dark:text-white">25%</span>
      </div>
    </div>
    
    <div class="flex items-center gap-x-3 whitespace-nowrap">
      <div class="flex w-36 h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        <div class="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{width: '50%'}}></div>
      </div>
      <div class="w-10 text-end">
        <span class="text-sm text-gray-800 dark:text-white">50%</span>
      </div>
    </div>
    
    <div class="flex items-center gap-x-3 whitespace-nowrap">
      <div class="flex w-36 h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
        <div class="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{width: '75%'}}></div>
      </div>
      <div class="w-10 text-end">
        <span class="text-sm text-gray-800 dark:text-white">75%</span>
      </div>
    </div>
    
    <div class="flex items-center gap-x-3 whitespace-nowrap">
      <div class="flex w-36 h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
        <div class="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{width: '100%'}}></div>
      </div>
      <div class="w-10 text-end">
        <span class="text-sm text-gray-800 dark:text-white">100%</span>
      </div>
    </div>
</div>
  )
}

export default ProgressBar