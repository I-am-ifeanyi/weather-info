import React from "react";
import Side from "./side.css";
import { AsyncPaginate } from "react-select-async-paginate";
import mapLine from "../images/MapPinLine.png";
import { MdOutlineHeight } from "react-icons/md";
import {RiWindyFill} from "react-icons/ri"
import {WiHumidity} from "react-icons/wi"

const SideComponent = () => {
  return (
    <div className="basis-1/3 p-5 side">
      <AsyncPaginate placeholder="Search City" className="rounded" />
      <div className="bg-blue w-full h-auto my-5 rounded-2xl p-3 ">
        <div className="flex flex-row gap-1 items-center">
          <img src={mapLine} alt="location icon" className="w-5" />
          <h2>Abuja</h2>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-3">
            <img src="icons/02n.png" alt="weather" className="" />
            <p>Today, 14 April</p>
            <p className="text-4xl">17&deg;C</p>
            <p>Sunny</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-row items-center gap-2 my-2">
              <RiWindyFill /> <h1 className="text-sm">Wind</h1>{" "}
              <MdOutlineHeight className="h-5" />
              <h1 className="text-sm">19km/h</h1>
            </div>
            <div className="flex flex-row items-center gap-2 my-2">
              <WiHumidity /> <h1 className="text-sm">Hum</h1>{" "}
              <MdOutlineHeight className="h-5" />
              <h1 className="text-sm">19km/h</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideComponent;
