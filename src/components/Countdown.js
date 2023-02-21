import React from "react";
import { useEffect, useRef, useState } from "react";
import "./CountdownStyle.css";
export default function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let interval = useRef();

  // to use inteval as a reference to render the value.

  const startTimer = () => {
    const countdownDate = new Date("Dec 31, 2023 00:00:00").getTime();
    // This is countdown date untill 31 DEC 2023.
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const Days = Math.floor(distance / (1000 * 60 * 60 * 24));
      // Here we divide the days left by the numbers which we get from one day.
      const Hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const Minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const Seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDays(Days);
        setHours(Hours);
        setMinutes(Minutes);
        setSeconds(Seconds);
      }
    }, 1000);
  };
  // use Effect is to refresh the page after each change at the page.
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="countdown">
      <span>{days}</span>
      <span>Days</span>
      <span>{hours}</span>
      <span>Hours</span>
      <span>{minutes}</span>
      <span>Minutes</span>
      <span>{seconds} </span>
      <span>Seconds</span>
    </div>
  );
}
