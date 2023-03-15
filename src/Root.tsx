import { useState } from "react";

const Root = () => {
  const [counter, setCounter] = useState<number>(0);
  return (
    <div className="App">
      <h2> {counter} </h2>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  );
};

export default Root;
