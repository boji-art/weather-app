import { Day } from "@/component/Day";
import { Hailt } from "@/component/Hailt";
import { Night } from "@/component/Night";

import { Search } from "lucide-react";
import { useState } from "react";
export default function Home(){
  return (
    <div>
      <Hailt />

      <div className="flex w-full gap-0.5">
        <Day />
        <Night />
      </div>
    </div>
  );
}
