// "use client";
// import { useEffect, useState } from "react";
// import ForecastCard from "../components/forecastCard/page";
// import NoData from "../components/noData/page";
// import WeatherCard from "../components/weatherCard/page";

// export default function Weather() {
//   const getDay = () => days[new Date().getDay()];
//   const getMonth = () => months[new Date().getMonth()];
//   const todayDate = () => new Date().getDate();
//   const [city, setCity] = useState("Cairo");
//   const [response, setResponse] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   useEffect(() => {
//     getWeather(city);
//     getCoordinates();
//   }, []);

//   const getWeather = async (city) => {
//     setLoading(true);
//     try {
//       const response = await fetch(
//         `https://api.weatherapi.com/v1/forecast.json?key=19d50d0356d34e2bb9551335222410&q=${
//           city || "Cairo"
//         }&days=2`
//       );
//       //handle failed response
//       if (!response.ok) {
//         let error = await response.json();
//         return setError(error?.error?.message);
//       }

//       const data = await response.json();
//       setResponse(data);
//       setError(null);
//     } catch (err) {
//       setError("Failed to get weather data.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getCoordinates = () => {
//     navigator.geolocation.getCurrentPosition(success, error, {
//       enableHighAccuracy: true,
//       timeout: 5000,
//       maximumAge: 0,
//     });

//     function success(pos) {
//       const crd = pos.coords;
//       getCity([crd.latitude.toString(), crd.longitude.toString()]);
//     }

//     function error(err) {
//       console.warn(`ERROR(${err.code}): ${err.message}`);
//     }
//   };

//   const getCity = async (coordinates) => {
//     const [lat, lng] = coordinates;
//     try {
//       const response = await fetch(
//         `https://us1.locationiq.com/v1/reverse.php?key=pk.f54576c3e793cd7f56a9febae96e27ed&lat=${lat}&lon=${lng}&format=json`
//       );
//       const data = await response.json();
//       setCity(data.address.city);
//     } catch (err) {
//       console.error("Failed to fetch city name.");
//     }
//   };

//   const handleSearch = (event) => {
//     getWeather(event.target.value);
//   };

//   return (
//     <div
//       style={{ background: "linear-gradient(315deg,#41B06E 20%, #141E46 70%)" }}
//       className=" w-full"
//     >
//       <div className=" w-11/12 m-auto">
//         <div className=" sm:h-[100vh] lg:overflow-hidden w-full">
//           <div className="flex items-end h-52 justify-center">
//             <div className="search">
//               <input
//                 type="text"
//                 onChange={handleSearch}
//                 className="search__input"
//                 placeholder="City"
//               />
//               <button
//                 onClick={() => {
//                   getWeather(city);
//                 }}
//                 className="search__button"
//               >
//                 <svg
//                   className="search__icon"
//                   aria-hidden="true"
//                   viewBox="0 0 24 24"
//                 >
//                   <g>
//                     <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
//                   </g>
//                 </svg>
//               </button>
//             </div>
//           </div>

//           <div className="display-weather">
//             {loading ? (
//               <div className="flex items-center justify-center text-white h-52 w-full">
//                 <div className="container">
//                   <div className="loader">
//                     <div className="crystal"></div>
//                     <div className="crystal"></div>
//                     <div className="crystal"></div>
//                     <div className="crystal"></div>
//                     <div className="crystal"></div>
//                     <div className="crystal"></div>
//                   </div>
//                 </div>
//               </div>
//             ) : error ? (
//               <div className="flex items-center justify-center">
//                 <div className="w-[30%] text-center font-bold">
//                   <NoData />
//                   <p className="text-white text-xl">{error}</p>
//                 </div>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 w-full py-8">
//                 <WeatherCard
//                   day={getDay()}
//                   date={`${todayDate()} ${getMonth()}`}
//                   city={response?.location?.name}
//                   temp={response?.current?.temp_c}
//                   icon={response?.current?.condition.icon}
//                   description={response?.current?.condition?.text}
//                   humidity={response?.current?.humidity}
//                   windSpeed={response?.current?.wind_mph}
//                   windDir={response?.current?.wind_dir}
//                 />

//                 {response?.forecast?.forecastday.map((forecast, i) => (
//                   <ForecastCard
//                     key={i}
//                     day={days[new Date(forecast.date).getDay()]}
//                     icon={forecast.day.condition.icon}
//                     maxTemp={forecast.day.maxtemp_c}
//                     minTemp={forecast.day.mintemp_c}
//                     description={forecast.day.condition.text}
//                   />
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// Weather.js
"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather, setCity } from "../redux/slices/weatherSlice";
import ForecastCard from "../components/forecastCard/page";
import NoData from "../components/noData/page";
import WeatherCard from "../components/weatherCard/page";

export default function Weather() {
  const dispatch = useDispatch();
  const { city, weatherData, loading, error } = useSelector(
    (state) => state.weather
  );

  useEffect(() => {
    dispatch(fetchWeather(city));
    getCoordinates();
  }, [city, dispatch]);

  const getCoordinates = () => {
    navigator.geolocation.getCurrentPosition(success, handleError, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    });

    function success(pos) {
      const crd = pos.coords;
      getCity([crd.latitude.toString(), crd.longitude.toString()]);
    }

    function handleError(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
  };

  const getCity = async (coordinates) => {
    const [lat, lng] = coordinates;
    try {
      const response = await fetch(
        `https://us1.locationiq.com/v1/reverse.php?key=pk.f54576c3e793cd7f56a9febae96e27ed&lat=${lat}&lon=${lng}&format=json`
      );
      const data = await response.json();
      dispatch(setCity(data.address.city));
    } catch (err) {
      console.error("Failed to fetch city name.");
    }
  };

  const handleSearch = (event) => {
    dispatch(fetchWeather(event.target.value));
  };

  const getDay = () => ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date().getDay()];
  const getMonth = () => ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][new Date().getMonth()];
  const todayDate = () => new Date().getDate();

  return (
    <div
      style={{ background: "linear-gradient(315deg,#41B06E 20%, #141E46 70%)" }}
      className="w-full"
    >
      <div className="w-11/12 m-auto">
        <div className="md:h-[100vh] h-full md:overflow-hidden w-full">
          <div className="flex items-end h-52 justify-center">
            <div className="search">
              <input
                type="text"
                onChange={handleSearch}
                className="search__input"
                placeholder="City"
              />
              <button
                onClick={() => {
                  dispatch(fetchWeather(city));
                }}
                className="search__button"
              >
                <svg
                  className="search__icon"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>

          <div className="display-weather">
            {loading ? (
              <div className="flex items-center justify-center text-white h-52 w-full">
                <div className="container">
                  <div className="loader">
                    <div className="crystal"></div>
                    <div className="crystal"></div>
                    <div className="crystal"></div>
                    <div className="crystal"></div>
                    <div className="crystal"></div>
                    <div className="crystal"></div>
                  </div>
                </div>
              </div>
            ) : error ? (
              <div className="flex items-center justify-center">
                <div className="w-[30%] text-center font-bold">
                  <NoData />
                  <p className="text-white text-xl">{error}</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 w-full py-8">
                <WeatherCard
                  day={getDay()}
                  date={`${todayDate()} ${getMonth()}`}
                  city={weatherData?.location?.name}
                  temp={weatherData?.current?.temp_c}
                  icon={weatherData?.current?.condition.icon}
                  description={weatherData?.current?.condition?.text}
                  humidity={weatherData?.current?.humidity}
                  windSpeed={weatherData?.current?.wind_mph}
                  windDir={weatherData?.current?.wind_dir}
                />

                {weatherData?.forecast?.forecastday.map((forecast, i) => (
                  <ForecastCard
                    key={i}
                    day={getDay(new Date(forecast.date).getDay())}
                    icon={forecast.day.condition.icon}
                    maxTemp={forecast.day.maxtemp_c}
                    minTemp={forecast.day.mintemp_c}
                    description={forecast.day.condition.text}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
