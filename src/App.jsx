import React, { useEffect, useMemo, useState } from "react";
import TodoRedux from "./todoRedux/TodoRedux";
import Cup from "./Components/Cup";

const App = () => {
  // let cnt1 = 0;
  // console.log("hi")
  // let [cnt, setCnt] = useState(0);

  // const handleClick = () => {
  //   cnt1++;
  //   console.log(cnt1);
  //   // setCnt(cnt+1);
  // };

  const [items, setItems] = useState(["a", "b", "c"]);

  const user = useMemo(() => (
    {
      name: "pritesh",
      email: "pranoliya82@gmail.com",
    }
  ), []);

  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={() => setItems(items.filter((i) => i !== "b"))}>
        Remove B
      </button>
      {items.map((item, index) => (
        <div key={item}>
          <input defaultValue={item} />
        </div>
      ))}
      <Cup/>
    </div>
  );
};

export default App;
