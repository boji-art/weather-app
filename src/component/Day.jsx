import { Heart, House, MapPin, User } from "lucide-react";
import { useState } from "react";

export const Day = () => {
  const [weather, setWeather] = useState({});
  console.log(weather);
  const [location, setLocation] = useState({});
  console.log(location);

  const cityUrl = `https://api.api-ninjas.com/v1/city?name=Tokyo`;

  const getCity = async () => {
    try {
      const response = await fetch(cityUrl, {
        headers: {
          "X-APi-Key": process.env.NEXT_PUBLIC_CITY_API_KEY,
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const getWeather = async () => {
    try {
      const cityLocation = await getCity();
      console.log(cityLocation);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${cityLocation[0].latitude}&lon=${cityLocation[0].longitude}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
      );

      const data = await response.json();
      console.log(data);
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border h-180 w-fit p-5 rounded-2xl">
      <button onClick={getWeather}> weather</button>
      <h2 className="text-5xl">{weather.name}</h2>
      <img src="sun.png" className="h-100 w-100" />
      <h1 className="text-7xl">{weather?.main?.temp}°</h1>
      <p className="text-orange-400 text-2xl">Bright</p>

      <div className="flex justify-between px-5">
        <House />
        <MapPin />
        <Heart />
        <User />
      </div>
      <button onClick={getCity}>city </button>
    </div>
  );
};
