import { HouseIcon, MapPin, Heart, User } from "lucide-react";

export const Night = (props) => {
  return (
    <div className="border h-180 w-fit bg-black p-5 rounded-2xl">
      <p className="text-amber-50 text-2xl">   {props?.weather?.current?.last_updated}</p>
      <h2 className="text-amber-100 text-5xl">{props?.weather?.location?.name}</h2>
      <img src="moon.png" className="h-90 w-90" />
      <h1 className="text-amber-100 text-6xl">{props?.weather?.forecast?.forecastday[0]?.day?.mintemp_c}</h1>
      <p className="text-4xl text-indigo-100 ">{props?.weather?.forecast?.forecastday[0]?.day?.condition?.text}</p>
      <div className="flex gap-20 pt-15">
        <HouseIcon className="text-emerald-500" />
        <MapPin className="text-emerald-500" />
        <Heart className="text-emerald-500" />
        <User className="text-emerald-500" />
      </div>
    </div>
  );
};
