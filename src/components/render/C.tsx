import { memo, useState } from "react";

const C = () => {
  console.log("C component is rendered");
  const [value, setValue] = useState(0);
  return (
    <div>
      C : <button onClick={() => setValue(value + 1)}>Click {value}</button>
    </div>
  );
};

export default memo(C);
