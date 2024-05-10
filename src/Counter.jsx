import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter } from "./slice";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    return state.count.counter;
  });

  return (
    <>
      <button onClick={() => dispatch(incrementCounter())}>Increment</button>
      <p>{counter}</p>
      <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
    </>
  );
}

export default Counter;
