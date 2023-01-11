import React from "react";
import { useEffect, useRef, useState } from "react";
import "./CountdownStyle.css";
export default function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("Dec 31, 2023 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const Days = Math.floor(distance / (1000 * 60 * 60 * 24));
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
      <span>{seconds}</span>
      <span>Seconds</span>
    </div>
  );
}
