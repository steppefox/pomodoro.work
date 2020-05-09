import React, { useEffect, useCallback } from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import "./styles.css";

import Keybindings from "./components/footer/Keybindings";
import Notifications from "./components/footer/Notifications";
import Code from "./components/footer/Code";
import Steps from "./components/Steps";
import Cta from "./components/Cta";
import { formatTime } from "./utils/time";
import { startTimer, resetTimer, notificationsRequest } from "./store/actions";

export default function App() {
  const state = useSelector(state => state);
  const { time, isBreak, count, maxCount, isActive, notifications } = state;
  const dispatch = useDispatch();

  const onStart = useCallback(() => {
    dispatch(startTimer());
  }, [dispatch]);

  const onReset = useCallback(() => {
    dispatch(resetTimer());
  }, [dispatch]);

  const handleKeyUp = useCallback(
    e => {
      switch (e.code) {
        case "Space":
          onStart();
          break;
        case "KeyR":
          onReset();
          break;
        default:
          break;
      }
    },
    [onReset, onStart]
  );

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);

    dispatch(notificationsRequest());

    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [dispatch, handleKeyUp]);

  const handleNotificationsClick = e => {
    e.preventDefault();
    dispatch(notificationsRequest());
  };

  return (
    <div
      className={classNames({
        container: true
      })}
    >
      <div>
        <div className="box">
          <div className="timer">{formatTime(time)}</div>
          <Cta
            title={isActive ? "Pause" : isBreak ? "Break" : "Work"}
            onClick={onStart}
          />
          <Cta title={"Reset"} onClick={onReset} />
          <Steps current={count} max={maxCount} />
        </div>

        <div className="links hide-mobile">
          <div className="link">
            <Keybindings />
          </div>
          <span className="spacer">|</span>

          <Notifications
            notifications={notifications}
            onClick={handleNotificationsClick}
          />

          <Code />
        </div>
      </div>
    </div>
  );
}
