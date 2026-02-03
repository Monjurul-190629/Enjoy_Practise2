import { practiseCounter } from "@/store/useCounterStore1";
import React from "react";

const Contact: React.FC = () => {
  const { count, increase, decrease } = practiseCounter();

  return (
    <div className="flex flex-col justify-center items-center">
      <p>{count}</p>
      <div className="flex gap-5">
        <button onClick={() => increase()}>Increase</button>
        <button onClick={() => decrease()}>Decrease</button>
      </div>
    </div>
  );
};

export default Contact;
