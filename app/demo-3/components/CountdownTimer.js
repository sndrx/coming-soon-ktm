"use client"

import dynamic from "next/dynamic";
import { zeroPad } from 'react-countdown';
const Countdown = dynamic(() => import('react-countdown'), { ssr: false });

const countdownRender = ({ days, hours, minutes, seconds, completed }) => {
  // if (completed) {
  //   return (
  //     <p className="text-3xl uppercase mb-8">00 Days Left!</p>
  //   );
  // } else {
    return (
      <>
        <span className="flex flex-col">
          <span className="md:min-w-[90px] mb-3">{zeroPad(days)}</span>
          <span className="text-xs uppercase tracking-wider">
            <span>Days</span>
          </span>
        </span>
        <div className="divider flex items-center -mt-7 lg:-mt-10 text-xs md:text-2xl">:</div>
        <span className="flex flex-col">
          <span className="md:w-[90px] mb-3">{zeroPad(hours)}</span>
          <span className="text-xs uppercase tracking-wider">
            <span>Hours</span>
          </span>
        </span>
        <div className="divider flex items-center -mt-7 lg:-mt-10 text-xs md:text-2xl">:</div>
        <span className="flex flex-col">
          <span className="md:w-[90px] mb-3">{zeroPad(minutes)}</span>
          <span className="text-xs uppercase tracking-wider">
            <span className="hidden sm:block">Minutes</span>
            <span className="block sm:hidden">Mins</span>
          </span>
        </span>
        <div className="divider flex items-center -mt-7 lg:-mt-10 text-xs md:text-2xl">:</div>
        <span className="flex flex-col">
          <span className="md:w-[90px] mb-3">{zeroPad(seconds)}</span>
          <span className="text-xs uppercase tracking-wider">
            <span className="hidden sm:block">Seconds</span>
            <span className="block sm:hidden">Secs</span>
          </span>
        </span>
      </>
    );
  // }
};

const CountdownTimer = ({ date }) => {
  return (
    <Countdown date={date} renderer={countdownRender} />
  )
}

export default CountdownTimer