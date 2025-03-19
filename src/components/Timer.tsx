import { useEffect, useState } from "react";
const Timer = () => {
    const [timer, setTimer] = useState<number>(30);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev: number) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer]);
    return (
      <>
        <p className="mt-[1rem] text-center text-neutral-700 font-[500]">
          Didn’t receive the code?{" "}
          {timer > 0 ? (
            <span className="font-[600] text-brand-base">{timer}s</span>
          ) : (
            <span className="cursor-pointer font-[600] text-brand-base">
              Resend
            </span>
          )}
        </p>
      </>
    );
}
export default Timer;