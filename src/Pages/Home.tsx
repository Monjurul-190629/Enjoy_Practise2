import React, { useMemo, useState } from "react";

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  const result = useMemo(() => count * 2, [count]);
  return (
    <div className="flex flex-col justify-center items-center">
      <p>Count : {count}</p>
      <p>Result: {result}</p>
      <div className="flex gap-3 ">
        <button
          onClick={() => setCount(count + 1)}
          className="border-2 bg-green-700 mt-5 text-white px-5 py-2 rounded-md"
        >
          Increase to double
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="border-2 bg-red-700 mt-5 text-white px-5 py-2 rounded-md"
        >
          Decrease to double
        </button>
      </div>
    </div>
  );
};

export default Home;
