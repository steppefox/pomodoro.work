import { useState, useCallback, useRef, useEffect } from "react";
import { notification } from "../utils/notification";

const INTERVALS = {
  workTime: 1 * 60 * 1000, // 25 min
  breakTime: 5 * 60 * 1000
};

export const endTimer = () => {
  let { count, isBreak } = {};

  if (count === 4) {
    // isFinale = true;
  }

  const cycle = isBreak ? "Break" : "Work";
  const action = isBreak ? "work" : "relax";

  notification(`${cycle} has ended, time to ${action}!`);
};

export const useTimer = () => {
  const [targetTime, setTargetTime] = useState(0);
  const intervalRef = useRef(null);
  const [time, setTime] = useState(INTERVALS.workTime);
  const [isBreak, setIsBreak] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (targetTime && isActive && !intervalRef.current) {
      intervalRef.current = setInterval(() => {
        const timeDiff = Math.round(targetTime - Date.now());

        if (timeDiff <= 0) {
          setTime(0);
          setTargetTime(0);
          clearInterval(intervalRef.current);
          intervalRef.current = null;

          return endTimer();
        }

        setTime(timeDiff);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [targetTime, isActive]);

  const startTimer = () => {
    if (isActive) {
      setIsActive(false);
      setIsPaused(true);
    } else {
      if (isPaused) {
        setTargetTime(Date.now() + time);
      } else {
        setTargetTime(Date.now() + INTERVALS.workTime);
      }

      setIsPaused(false);
      setIsActive(true);
    }
  };

  const resetTimer = () => {
    setTargetTime(0);
    setTime(INTERVALS.workTime);
    setIsActive(false);
    setIsPaused(false);
  };

  return {
    time,
    startTimer,
    resetTimer,
    isBreak,
    isActive
  };
};
