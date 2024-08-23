import React from "react";

export default function WeatherCard({
  day,
  date,
  city,
  temp,
  icon,
  description,
  humidity,
  windSpeed,
  windDir,
}) {
  return (

      <div className="bg-teal-900 hover:bg-teal-700 duration-500 rounded-lg p-2">
        <div className="flex justify-between text-white">
          <p className="m-3 font-extrabold text-xl">{day}</p>
          <p className="m-3">{date}</p>
        </div>
        <div className="text-white">
          <h2 className="pt-3 mx-3">{city}</h2>
          <div className="flex justify-between">
            <p className="text-4xl mt-4 mx-3 font-bold">
              {temp}
              <sup>o</sup>C
            </p>
            <img className="w-1/4" src={`https:${icon}`} alt="weather icon" />
          </div>
          <div className="text-yellow-500 mx-3">{description}</div>
          <div className="mx-3 py-2">
            <i className="fas fa-umbrella pr-1 text-white me-2">{humidity}%</i>
            <i className="fas fa-wind px-3 text-white">{windSpeed} km/h</i>
            <i className="far fa-compass px-3 text-white">{windDir}</i>
          </div>
        </div>
      </div>

  );
}
