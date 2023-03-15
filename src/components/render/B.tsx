import { memo, useState } from "react";
import C from "./C";

const B = () => {
  console.log("B component is rendered");
  const [value, setValue] = useState(0);
  return (
    <div>
      B : <button onClick={() => setValue(value + 1)}>Click {value}</button>
      <C />
    </div>
  );
};

export default memo(B);
