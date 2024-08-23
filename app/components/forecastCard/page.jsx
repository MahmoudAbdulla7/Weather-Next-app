import React from 'react'

export default function ForecastCard({ day, icon, maxTemp, minTemp, description }) {
  return (

    <div className="bg-sky-900 hover:bg-sky-700 duration-500 rounded-lg">
      <div className="text-center text-white">
        <p className="mt-2 font-extrabold text-xl">{day}</p>
      </div>
      <div className="text-white">
        <div className="text-center my-3">
          <div className='w-full flex items-center justify-center'>
          <img className="mt-2 w-[15%]" src={`https:${icon}`} alt="weather icon" />
          </div>
          <p className="text-4xl mx-2 font-bold">{maxTemp}<sup>o</sup>C</p>
          <p className="text-center">{minTemp}<sup>o</sup>C</p>
        </div>
        <div className="text-yellow-500 text-center pb-4 mx-2">{description}</div>
      </div>
    </div>

  )
}
