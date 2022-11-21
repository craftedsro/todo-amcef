import { useEffect, useState } from "react";
import { getReturnValues } from "../../helpers/countdown";
import { CountDownPropsType, NumberType } from "../types";

const CountDown = ({ deadline, className }: CountDownPropsType) => {
  const countDownDate = new Date(deadline).getTime();

  const [countDown, setCountDown] = useState<NumberType>(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  const [days, hours, minutes, seconds] = getReturnValues(countDown);

  // @ts-ignore
  return (
    <div className={`flex gap-5 ${className}`}>
      <div>
        <span className="countdown font-mono text-2xl">
          <span style={{ "--value": days }}>{days}</span>
        </span>
        days
      </div>
      <div>
        <span className="countdown font-mono text-2xl">
          <span style={{ "--value": hours }}></span>
        </span>
        hours
      </div>
      <div>
        <span className="countdown font-mono text-2xl">
          <span style={{ "--value": minutes }}></span>
        </span>
        min
      </div>
      <div>
        <span className="countdown font-mono text-2xl">
          <span style={{ "--value": seconds }}></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default CountDown;
