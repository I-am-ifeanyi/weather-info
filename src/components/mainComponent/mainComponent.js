import React from "react";
import { useState } from "react";
import morning from "../images/morning.png";
import cloud from "../images/sky.jpg";
import mapLine from "../images/MapPinLine.png";
import main from "./mainComponent.css";

const MainComponent = () => {
  const [lightMode, setLightMode] = useState(true);
  const changeMode = () => setLightMode((current) => !current);

  return (
    <section className="flex flex-col gap-10 basis-2/3 mx-5">
      <div className="flex flex-row justify-between first-section">
        <div className="flex flex-col gap-2">
          <h1>07:32 AM</h1>
          <p>Wednesday, 14 April, 2022</p>
          <div className="flex flex-row gap-2 greetings">
            <img src={morning} alt="weather" />
            <span>
              Good Morning, <b>Florish!</b>
            </span>
          </div>
        </div>
        <div
          className={lightMode ? "light-mode" : "light-mode2"}
          onClick={changeMode}
        >
          <div
            className={lightMode ? "dark-mode" : "dark-mode2"}
            onClick={changeMode}
          ></div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap week-days justify-between	gap-2">
        <div className="flex flex-col bg-blue rounded justify-center	items-center h-auto w-20 shadow-xl">
          <img src="icons/01d.png" alt="weather" className="w-12" />
          <p>Today</p>
          <h1>17&deg;C</h1>
        </div>
        <div className="flex flex-col bg-blue rounded justify-center	items-center h-auto w-20 shadow-xl">
          <img src="icons/01n.png" alt="weather" className="w-12" />
          <h4>Sun</h4>
          <h4>17&deg;C</h4>
        </div>
        <div className="flex flex-col bg-blue rounded justify-center	items-center h-auto w-20 shadow-xl">
          <img src="icons/02d.png" alt="weather" className="w-12" />
          <h4>Sun</h4>
          <h4>17&deg;C</h4>
        </div>
        <div className="flex flex-col bg-blue rounded justify-center	items-center h-auto w-20 shadow-xl">
          <img src="icons/02n.png" alt="weather" className="w-12" />
          <h4>Sun</h4>
          <h4>17&deg;C</h4>
        </div>
        <div className="flex flex-col bg-blue rounded justify-center	items-center h-auto w-20 shadow-xl">
          <img src="icons/03d.png" alt="weather" className="w-12" />
          <h4>Sun</h4>
          <h4>17&deg;C</h4>
        </div>
        <div className="flex flex-col bg-blue rounded justify-center	items-center h-auto w-20 shadow-xl">
          <img src="icons/11n.png" alt="weather" className="w-12" />
          <h4>Sun</h4>
          <h4>17&deg;C</h4>
        </div>
        <div className="flex flex-col bg-blue rounded justify-center	items-center h-auto w-20 shadow-xl">
          <img src="icons/10n.png" alt="weather" className="w-12" />
          <h4>Sun</h4>
          <h4>17&deg;C</h4>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between weather-description">
        <div className="flex flex-col basis-2/4 gap-2 first-description">
          <div className="flex flex-col bg-blue hover:bg-gray-light transition-all duration-500 rounded p-2 shadow-xl">
            <span className="text-center my-2 bg-orange rounded">
              Looks sunny
            </span>
            <div className="flex flex-row flex-wrap justify-between gap-5">
              <div className="my-3">
                <p className="opacity-75 text-sm text-center">Pressure</p>
                <p className="bg-head rounded text-center text-orange p-1 shadow-lg">
                  18pns
                </p>
              </div>
              <div className="my-3">
                <p className="opacity-75 text-sm text-center">Pressure</p>
                <p className="bg-head rounded text-center text-orange p-1 shadow-lg">
                  18pns
                </p>
              </div>
              <div className="my-3">
                <p className="opacity-75 text-sm text-center">Pressure</p>
                <p className="bg-head rounded text-center text-orange p-1 shadow-lg">
                  18pns
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-between gap-5">
              <div className="my-3">
                <p className="opacity-75 text-sm text-center">Pressure</p>
                <p className="bg-head rounded text-center text-orange p-1 shadow-lg">
                  18pns
                </p>
              </div>
              <div className="my-3">
                <p className="opacity-75 text-sm text-center">Pressure</p>
                <p className="bg-head rounded text-center text-orange p-1 shadow-lg">
                  18pns
                </p>
              </div>
              <div className="my-3">
                <p className="opacity-75 text-sm text-center">Pressure</p>
                <p className="bg-head rounded text-center text-orange p-1 shadow-lg">
                  18pns
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={cloud} alt="cloud" className="w-full rounded h-24" />
          </div>
        </div>
        <div className="grid justify-items-center basis-2/5 gap-1 second-description bg-green p-2 rounded">
          <h1 className="text-center my-2 bg-orange rounded p-1">
            Cities Around You
          </h1>
          <div className="bg-head p-1 mx-5 rounded w-full flex flex-col gap-2">
            <div className="flex flex-row gap-1 items-center">
              <img src={mapLine} alt="location icon" className="w-5" />
              <p>Abuja</p>
            </div>
            <div className="flex flex-row gap-3">
              <h1 className="bg-orange p-1 rounded">17&deg;C</h1>
              <span>Looks Sunny</span>
            </div>
          </div>
          <div className="bg-head p-1 mx-5 rounded w-full flex flex-col gap-2">
            <div className="flex flex-row gap-1 items-center">
              <img src={mapLine} alt="location icon" className="w-5" />
              <p>Abuja</p>
            </div>
            <div className="flex flex-row gap-3">
              <h1 className="bg-orange p-1 rounded">17&deg;C</h1>
              <span>Looks Sunny</span>
            </div>
          </div>
          <div className="bg-head p-1 mx-5 rounded w-full flex flex-col gap-2">
            <div className="flex flex-row gap-1 items-center">
              <img src={mapLine} alt="location icon" className="w-5" />
              <p>Abuja</p>
            </div>
            <div className="flex flex-row gap-3">
              <h1 className="bg-orange p-1 rounded">17&deg;C</h1>
              <span>Looks Sunny</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainComponent;
