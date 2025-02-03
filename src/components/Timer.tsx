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
        <p className="mt-[3rem] text-center text-[#414444]">
          Didn’t receive the code?{" "}
          {timer > 0 ? (
            <span className="font-[600] text-[#12725b]">{timer}s</span>
          ) : (
            <span className="cursor-pointer font-[600] text-[#12725b]">
              Resend
            </span>
          )}
        </p>
      </>
    );
}
export default Timer;