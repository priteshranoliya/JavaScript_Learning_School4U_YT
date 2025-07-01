import React from "react";

function Cup1() {
  let count = 0;
  count++;
  return <h2>Cup #{count}</h2>;
}

export default function Cup() {
  return (
    <>
      <Cup1 />
      <Cup1 />
      <Cup1 />
    </>
  );
}
