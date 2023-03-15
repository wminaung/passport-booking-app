import { memo, useState } from "react";
import B from "./B";

const A = () => {
  console.log("A component is rendered");
  const [value, setValue] = useState(0);
  return (
    <div>
      A : <button onClick={() => setValue(value + 1)}>Click {value}</button>
      <B />
    </div>
  );
};

export default memo(A);
