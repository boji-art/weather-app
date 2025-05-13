import { HouseIcon, MapPin,Heart, User } from "lucide-react"

export const Night= ()=>
{
    return(
        <div className="border h-180 w-fit bg-black p-5 rounded-2xl">
            <p className="text-amber-50 text-2xl">May 13,2025</p>
        <h2 className="text-amber-100 text-4xl">Ulaanbaatar</h2>
        <img src="moon.png" className="h-90 w-90"/>
        <h1 className="text-amber-100 text-6xl">17°</h1>
        <p className="text-4xl text-indigo-100 ">Rainy</p>
        <div className="flex gap-20">
            <HouseIcon className="text-emerald-500"/>
            <MapPin className="text-emerald-500"/>
           <Heart className="text-emerald-500"/>
            <User className="text-emerald-500"/>

        </div>

        </div>
    )
}