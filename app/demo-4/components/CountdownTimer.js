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
          <span className="md:w-[75px]">{zeroPad(days)}</span>
          <span className="text-xs md:text-sm uppercase tracking-wider font-bold">
            <span>Days</span>
          </span>
        </span>
        <span className="flex flex-col">
          <span className="md:w-[90px]">{zeroPad(hours)}</span>
          <span className="text-xs md:text-sm uppercase tracking-wider font-bold">
            <span>Hours</span>
          </span>
        </span>
        <span className="flex flex-col">
          <span className="md:w-[90px]">{zeroPad(minutes)}</span>
          <span className="text-xs md:text-sm uppercase tracking-wider font-bold">
            <span className="hidden sm:block">Minutes</span>
            <span className="block sm:hidden">Mins</span>
          </span>
        </span>
        <span className="flex flex-col">
          <span className="md:w-[90px]">{zeroPad(seconds)}</span>
          <span className="text-xs md:text-sm uppercase tracking-wider font-bold">
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