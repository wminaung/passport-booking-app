import { useState } from "react";
import A from "./A";

const Main = () => {
  const [value, setValue] = useState(0);
  console.log("Main component rendered");
  return (
    <div>
      Main : <button onClick={() => setValue(value + 1)}>Click {value}</button>
      <A main-value={value} />
    </div>
  );
};

export default Main;
