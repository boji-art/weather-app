import { Heart, House, MapPin, User } from "lucide-react";

export const Day = (props) => {
  console.log(props.weather);
  return (
    <div>
      <div className="border h-180 w-fit p-5 rounded-2xl">
        <p className="text-amber-50 text-2xl">
          {props?.weather?.current?.last_updated}
        </p>
        <h2 className="text-5xl">{props?.weather?.location?.name}</h2>
        <img src="sun.png" className="h-100 w-100" />
        <h1 className="text-7xl">{props?.weather?.current?.temp_c}</h1>
        <p className="text-orange-400 text-2xl">
          {props?.weather?.current?.condition?.text}
        </p>

        <div className="flex justify-between px-5">
          <House />
          <MapPin />
          <Heart />
          <User />
        </div>
      </div>
    </div>
  );
};
