import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
const SmallEventBox = (props) => {
  return (
    <div>
      <div className="container flex justify-between items-center my-3 space-x-5 w-full border-2 px-6 rounded-xl py-2">
        <div className="Event-name flex flex-col">
          <h2 className="text-lg font-semibold text-white">{props.EventName}</h2>
        </div>
        <div  className="timming">
            <h1 className="text-sm text-slate-200">Timming:</h1>
            <p className="text-xs text-slate-300">{props.EventTime}</p>
        </div>
        <div className="cancel">
            <button>
            <FontAwesomeIcon icon={faXmark} className="text-2xl text-red-600" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default SmallEventBox;
