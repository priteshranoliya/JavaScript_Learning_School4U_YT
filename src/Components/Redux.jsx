import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, decrementByAmount, increment, incrementByAmount } from "../Redux/features/counter/counterSlice";

const Redux = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex flex-col">
        <div className="p-10 m-10 flex-column">
          <h1 className="">
            <strong>Counter Using Redux....</strong>
          </h1>
          <h2>{counter}</h2>
        </div>
        <div className="flex gap-5 p-5">
          <div className="flex mb-5">
            <button
              className="border-2 border-r-amber-600 p-3 font-bold text-white-100 bg-emerald-600"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
          </div>
          <div>
            <button
              className="border-2 border-r-amber-600 p-3 font-bold text-white-100 bg-emerald-600"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
          </div>
          <div>
            <button
              className="border-2 border-r-amber-600 p-3 font-bold text-white-100 bg-emerald-600"
              onClick={() => dispatch(incrementByAmount(2))}
            >
              Increment By 2
            </button>
          </div>
          <div>
            <button
              className="border-2 border-r-amber-600 p-3 font-bold text-white-100 bg-emerald-600"
              onClick={() => dispatch(decrementByAmount(10))}
            >
              Decrement By 10
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Redux;
