import { useState, useEffect } from "react";
export default function QuestionTimer({ timeout, onTimeOut, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("setting timeout");
    const timer = setTimeout(() => {
      onTimeOut();
    }, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeOut]);
  useEffect(() => {
    console.log("setting timeinterval");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress max={timeout} value={remainingTime} className={mode} />;
}
