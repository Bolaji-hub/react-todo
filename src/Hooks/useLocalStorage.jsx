import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
  let value = initialValue;
  try {
    value = JSON.parse(localStorage.getItem(key)) || initialValue;
  } catch (error) {}

  const [state, setState] = useState(value);

  const persistValue = (v) => {
    localStorage.setItem(key, JSON.stringify(v));
    setState(v);
  };
  console.log(state, "---- here");
  return [state, persistValue];
}
