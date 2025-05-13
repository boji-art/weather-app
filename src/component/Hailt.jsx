import {Search} from 'lucide-react'
export const Hailt=()=>{
    return(
        <div className='flex p-5'>
            <Search className='mt-3'/>
            <input type="search" placeholder="Search" className=" border-0 h-10 w-120 rounded-full bg-amber-50" ></input>
        </div>
    )
}