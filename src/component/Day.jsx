import { Heart, House, MapPin, User } from "lucide-react";
export const Day = () => {
  return (
    <div className="border h-180 w-fit p-5 rounded-2xl">
      <h2 className="text-5xl">Ulaanbaatar</h2>
      <img src="sun.png" className="h-100 w-100" />
      <h1 className="text-7xl">26°</h1>
      <p className="text-orange-400 text-2xl">Bright</p>
      <div className="flex justify-between px-5">
      <House/>
      <MapPin/>
      <Heart/>
      <User/>
      </div>
    </div>
  );
};
