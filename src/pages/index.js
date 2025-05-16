import { Day } from "@/component/Day";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Night } from "@/component/Night";

export default function Home() {
  const [weather, setWeather] = useState({});
  const [searchCity, setSearchCity] = useState("Ulaanbaatar");
  const [searchValue, setSearchValue]=useState("");
  const [error,setError]=useState("");

  const getWeather = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${searchCity}`
      );

      const data = await response.json();

      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };
  const getCities = async ()=>{
    try{
      const response =await fetch(
        "https://countriesnow.space/api/v0.1/countries"
      );console.log(getCities);
      
      const data = await response.json();
     const result =data?.data?.filter((city)=>{
      const findCities = city.cities.find((findCitie)=>findcitie==searchValue);
      return findCities;
     })
     const city = result[0].cities.find((city) => city===searchValue);
     setSearchValue(city);
     }catch (error){
      setError("No location found")
      
      
     }
  }

  // useEffect(()=>{
  //   getWeather ()
  //   getCities ()
  // })
 


  return (
    <div>
      <div className="flex p-5 relative">
        <Search className="mt-3" />
        <input
          type="search"
          placeholder="Search"
          value={searchCity}
          onChange={(event) => {
            const value = event.target.value;
            setSearchCity(value);
          }}
          className=" border-0 h-10 w-120 rounded-full bg-amber-50 "
        ></input>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={getWeather}
        >
          Search
        </button>
      </div>
      <div className="flex w-full gap-0.5">
        <Day weather={weather} />
        <Night weather={weather} />
      </div>
    </div>
  );
}
