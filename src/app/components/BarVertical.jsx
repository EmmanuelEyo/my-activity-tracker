import React from 'react'

const BarVertical = () => {
  return (
    <div className='flex space-x-6 mt-14'>
        <div>
            <div class="flex h-10 w-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{transform: 'rotate(180deg)'}}>
                <div class="flex flex-col justify-end rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{height: '0', width: '100%', transform: 'rotate(180deg)'}}></div>
            </div>
        </div>
        <div>
        <div class="flex h-10 w-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{transform: 'rotate(180deg)'}}>
                <div class="flex flex-col justify-end rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{height: '0', width: '100%', transform: 'rotate(180deg)'}}></div>
            </div>
        </div>
        <div>
            <div class="flex h-14 w-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{transform: 'rotate(180deg)'}}>
                <div class="flex flex-col justify-end rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{height: '', width: '100%', transform: 'rotate(180deg)'}}></div>
            </div>
        </div>
        <div>
            <div class="flex h-16 w-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{transform: 'rotate(180deg)'}}>
                <div class="flex flex-col justify-end rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{height: '', width: '100%', transform: 'rotate(180deg)'}}></div>
            </div>
        </div>
        <div>
            <div class="flex h-20 w-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{transform: 'rotate(180deg)'}}>
                <div class="flex flex-col justify-end rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{height: '', width: '100%', transform: 'rotate(180deg)'}}></div>
            </div>
        </div>
        <div>
            <div class="flex h-24 w-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100" style={{transform: 'rotate(180deg)'}}>
                <div class="flex flex-col justify-end rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{height: '', width: '100%', transform: 'rotate(180deg)'}}></div>
            </div>
        </div>
        <div>
            <div class="flex h-28 w-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{transform: 'rotate(180deg)'}}>
                <div class="flex flex-col justify-end rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{height: '', width: '100%', transform: 'rotate(180deg)'}}></div>
            </div>
        </div>
        <div>
            <div class="flex h-32 w-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{transform: 'rotate(180deg)'}}>
                <div class="flex flex-col justify-end rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style={{height: '', width: '100%', transform: 'rotate(180deg)'}}></div>
            </div>
        </div>
    </div>
  )
}

export default BarVertical