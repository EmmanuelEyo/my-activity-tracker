import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import Sidebar, { SidebarItem } from '../components/Sidebar'
import { PiHouseSimple } from "react-icons/pi";
import { MdOutlineTimer } from "react-icons/md";
import { FaRegCalendarAlt, FaRegMap, FaCircleNotch } from "react-icons/fa";
import { RiSettingsLine } from "react-icons/ri";
import { IoMdStopwatch } from "react-icons/io";
import { LiaRunningSolid } from "react-icons/lia";
import BodyPartCard from '../components/BodyPartCard';
import { IoFastFoodOutline } from "react-icons/io5";
import { GiButterflyFlower, GiPathDistance, GiNightSleep, GiRunningShoe } from "react-icons/gi";
import { TbCheese } from "react-icons/tb";
import { FaPersonWalkingArrowLoopLeft } from "react-icons/fa6";
import { MdOutlineWaterDrop, MdOutlineFastfood } from "react-icons/md";
import WeekDatePicker from '../components/WeekDatePicker';
import ProgressBar from '../components/ProgressBar';
import VerticalBar from '../components/VerticalBar';
import BarVertical from '../components/BarVertical';
import TaskProgressTracker from '../components/TaskProgressTracker';

const Page = () => {

  return (
    <div className='flex flex-col items-center justify-between p-24'>
        <div className="flex">
          <div>
            <Sidebar>
              <SidebarItem 
                icon={<PiHouseSimple size={20} />} 
                text="Overview"
                active
              />
               <SidebarItem 
                icon={<MdOutlineTimer size={20} />} 
                text="Timer"
                alert
              />
               <SidebarItem 
                icon={<FaRegCalendarAlt size={20} />} 
                text="Calender"
              />
               <SidebarItem 
                icon={<FaRegMap size={20} />} 
                text="Distances"
                alert
              />
               <SidebarItem 
                icon={<RiSettingsLine size={20} />} 
                text="Settings"
              />
            </Sidebar>
          </div>
          <Header />
          <div class="grid lg:grid-cols-3 lg:grid-rows-4 sm:grid-rows-7 sm:grid-cols-3 gap-4">
            <div class="lg:col-span-1 col-span-3 shadow-xl row-span-1 bg-orange-200 lg:w-full w-[22rem] lg:ml-0 ml-40 text-black p-10 space-y-10 rounded-lg">
              <div className='flex mt-10'>
                <div>
                  <Image src='/sunset_logo.png' width={45} height={45} alt='sunset_logo' />
                </div>
                <div className='mt-1'>
                  <h1 className='text-3xl font-semibold'>Morning Walk</h1>
                </div>
              </div>
              <div className='flex space-x-10'>
                <div className='flex space-x-2'>
                  <LiaRunningSolid size={35} />
                  <div className='block text-xl'>
                    <p>Running</p>
                    <h1 className='font-bold'>130 Cal</h1>
                  </div>
                </div>
                <div className='flex space-x-2'>
                  <IoMdStopwatch size={32} />
                  <div className='block text-xl'>
                    <p>Duration</p>
                    <h1 className='font-bold'>31:12h</h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:col-span-1 col-span-3 row-span-3 lg:w-full w-[22rem] lg:h-full h-[90%] lg:ml-0 ml-40 shadow-xl bg-gray-800 p-4 rounded-lg">
              <BodyPartCard />
              <TaskProgressTracker />
            </div>
            <div class="col-span-1 row-span-1 text-black bg-blue-200 p-7 rounded-lg">
              <div className='flex space-x-32'>
                <div className='block space-y-5 mt-10'>
                  <h1 className='text-3xl font-semibold'>Calories</h1>
                  <div className='text-xl'>
                    <p>Consumed</p>
                    <h1 className='font-bold'>130 Col</h1>
                  </div>
                  <div className='text-xl'>
                    <p>Remaining</p>
                    <h1 className='font-bold'>60 Col</h1>
                  </div>
                </div>
                <div>
                  <Image src='/speedometer.png' width={150} height={150} className='mt-20' alt='speedometer_logo' />
                </div>
              </div>
            </div>
            <div class="col-span-1 row-span-2 shadow-xl bg-gray-800 mt-7 p-4 rounded-lg">
              <div className='grid grid-cols-2 mt-7 grid-rows-4 gap-4'>
                <div className='col-span-1 row-span-1 rounded-lg p-4 pb-6 bg-gray-700 shadow-xl'>
                  <div className='flex space-x-14'>
                    <div className='block'>
                      <p>Protein</p>
                      <h1>130 Cal</h1>
                      <div className='p-4 rounded-sm px-3 py-0 mt-5 bg-gray-400'>9.0kcl</div>
                    </div>
                    <div className='bg-purple-400 rounded-full w-10 h-10 p-4'>
                      <IoFastFoodOutline className='-ml-1.5 -mt-1.5' size={20} />
                    </div>
                  </div>
                </div>
                <div className='col-span-1 row-span-1 rounded-lg p-4 pb-6 bg-gray-700 shadow-xl'>
                  <div className='flex space-x-14'>
                    <div className='block'>
                      <p>Carbs</p>
                      <h1>130 Cal</h1>
                      <div className='p-4 rounded-sm px-3 py-0 mt-5 bg-gray-400'>9.0kcl</div>
                    </div>
                    <div className='bg-green-400 rounded-full w-10 h-10 p-4'>
                      <GiButterflyFlower className='-ml-1.5 -mt-1.5' size={20} />
                    </div>
                  </div>
                </div>
                <div className='col-span-1 row-span-1 rounded-lg p-4 pb-6 bg-gray-700 shadow-xl'>
                  <div className='flex space-x-14'>
                    <div className='block'>
                      <p>Fats</p>
                      <h1>130 Cal</h1>
                      <div className='p-4 rounded-sm px-3 py-0 mt-5 bg-gray-400'>9.0kcl</div>
                    </div>
                    <div className='bg-blue-400 rounded-full w-10 h-10 p-4'>
                      <TbCheese className='-ml-1.5 -mt-1.5' size={20} />
                    </div>
                  </div>
                </div>
                <div className='col-span-1 row-span-1 rounded-lg p-4 pb-6 bg-gray-700 shadow-xl'>
                  <div className='flex space-x-14'>
                    <div className='block'>
                      <p>Water</p>
                      <h1>130 Cal</h1>
                      <div className='p-4 rounded-sm px-3 py-0 mt-5 bg-gray-400'>9.0kcl</div>
                    </div>
                    <div className='bg-pink-400 rounded-full w-10 h-10 p-4'>
                      <MdOutlineWaterDrop className='-ml-1.5 -mt-1.5' size={20} />
                    </div>
                  </div>
                </div>
                <div className='col-span-1 row-span-1 rounded-lg p-4 pb-6 bg-gray-700 shadow-xl'>
                  <div className='flex space-x-14'>
                    <div className='block'>
                      <p>Nutrient</p>
                      <h1>130 Cal</h1>
                      <div className='p-4 rounded-sm px-3 py-0 mt-5 bg-gray-400'>9.0kcl</div>
                    </div>
                    <div className='bg-pink-400 rounded-full w-10 h-10 p-4'>
                      <MdOutlineFastfood className='-ml-1.5 -mt-1.5' size={20} />
                    </div>
                  </div>
                </div>
                <div className='col-span-1 row-span-1 rounded-lg p-4 pb-6 bg-gray-700 shadow-xl'>
                  <div className='flex space-x-14'>
                    <div className='block'>
                      <p>Sleep</p>
                      <h1>56m</h1>
                      <div className='p-4 rounded-sm px-3 py-0 mt-5 bg-gray-400'>9.0kcl</div>
                    </div>
                    <div className='bg-pink-400 rounded-full w-10 h-10 p-4'>
                      <GiNightSleep className='-ml-1.5 -mt-1.5' size={20} />
                    </div>
                  </div>
                </div>
                <div className='col-span-1 row-span-1 rounded-lg p-4 pb-6 bg-gray-700 shadow-xl'>
                  <div className='flex space-x-14'>
                    <div className='block'>
                      <p>Jogging</p>
                      <h1>130 Cal</h1>
                      <div className='p-4 rounded-sm px-3 py-0 mt-5 bg-gray-400'>9.0kcl</div>
                    </div>
                    <div className='bg-pink-400 rounded-full w-10 h-10 p-4'>
                      <GiRunningShoe className='-ml-1.5 -mt-1.5' size={20} />
                    </div>
                  </div>
                </div>
                <div className='col-span-1 row-span-1 rounded-lg p-4 pb-6 bg-gray-700 shadow-xl'>
                  <div className='flex space-x-14'>
                    <div className='block'>
                      <p>Walking</p>
                      <h1>130 Cal</h1>
                      <div className='p-4 rounded-sm px-3 py-0 mt-5 bg-gray-400'>9.0kcl</div>
                    </div>
                    <div className='bg-pink-400 rounded-full w-10 h-10 p-4'>
                      <FaPersonWalkingArrowLoopLeft className='-ml-1.5 -mt-1.5' size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-1 shadow-xl row-span-1 bg-pink-200 text-black p-7 rounded-lg">
              <div className='flex space-x-10'>
                <div className='block space-y-5 mt-10'>
                  <h1 className='text-3xl font-semibold'>Heart</h1>
                  <div className='text-xl'>
                    <p>Today</p>
                    <h1 className='font-bold'>110 Bp</h1>
                  </div>
                  <div className='text-xl'>
                    <p>Yesterday</p>
                    <h1 className='font-bold'>130 Bp</h1>
                  </div>
                </div>
                <div>
                  <Image src='/heart-rate.png' width={300} height={300} className='mt-16' alt='heart_rate__logo' />
                </div>
              </div>
            </div>
            <div class="col-span-1 row-span-1 shadow-xl text-black bg-orange-200 p-7 rounded-lg">
              <div className='flex space-x-32'>
                <div className='block space-y-5 mt-10'>
                  <h1 className='text-3xl font-semibold'>Water</h1>
                  <div className='text-xl'>
                    <p>Consumed</p>
                    <h1 className='font-bold'>6.0L</h1>
                  </div>
                  <div className='text-xl'>
                    <p>Remaining</p>
                    <h1 className='font-bold'>5L</h1>
                  </div>
                </div>
                <div className='mt-20 relative'>
                  <div className=" ml-16 mt-11">
                    <h1 className="font-semibold">6.0L</h1>
                  </div>
                  <FaCircleNotch size={130} className="absolute -top-6 left-0 mt-4 ml-4" />
                </div>
              </div>
            </div>
            <div className='col-span-3 shadow-xl bg-gray-800 text-black rounded-lg'>
              <div className='grid grid-cols-4 p-5 gap-4'>
                <div className='col-span-1 bg-transparent rounded-lg'>
                  <div className='block'>
                    {/* <h1>Activity Tracking</h1>
                    <p>Thursday.22Sep</p> */}
                    <WeekDatePicker />
                    <div className='ml-16'>
                      <Image src='/symmetry.png' width={150} height={150} alt='symmetry_logo' />
                      <p className=' ml-9 text-gray-400 -mt-1 text-sm'>Symmetry</p>
                    </div>
                    <div className=' ml-14'>
                      <ProgressBar />
                    </div>
                  </div>
                </div>
                <div className='col-span-1 bg-gray-600 px-6 py-4 shadow-xl rounded-lg'>
                  <div className='block'>
                    <div className='flex space-x-1'>
                      <div className='text-gray-200 mt-0.5'>
                        <IoMdStopwatch size={20} />
                      </div>
                      <div className='text-gray-400'>
                        <p>Total Time</p>
                      </div>
                    </div>
                    <div className='text-white font-bold text-xl'>
                      <h1>2h 25m</h1>
                    </div>
                  </div>
                  <VerticalBar />
                </div>
                <div className='col-span-1 bg-gray-600 px-6 py-4 shadow-xl rounded-lg'>
                  <div className='block'>
                    <div className='flex space-x-1'>
                      <div className='text-gray-200 mt-0.5'>
                        <GiPathDistance size={23} />
                      </div>
                      <div className='text-gray-400'>
                        <p>Total Distance</p>
                      </div>
                    </div>
                    <div className='text-white font-bold text-xl'>
                      <h1>10 km</h1>
                    </div>
                  </div>
                  <div className='mt-10 relative'>
                    <div className="ml-24 top-2 left-2 text-white absolute mt-11">
                      <h1 className="font-semibold">5,6 Km</h1>
                    </div>
                    <FaCircleNotch size={150} className="absolute -top-6 left-10 mt-4 ml-4" />
                  </div>
                </div>
                <div className='col-span-1 px-6 py-4 bg-gray-600 shadow-xl rounded-lg'>
                <div className='block'>
                    <div className='flex space-x-1'>
                      <div className='text-gray-200 mt-0.5'>
                        <GiPathDistance size={23} />
                      </div>
                      <div className='text-gray-400'>
                        <p>Average Speed</p>
                      </div>
                    </div>
                    <div className='text-white font-bold text-xl'>
                      <h1>20 km/h</h1>
                    </div>
                  </div>
                  <BarVertical />
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Page