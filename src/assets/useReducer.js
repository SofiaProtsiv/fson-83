import { useEffect, useReducer, useRef } from "react";

const initialState = {
  time: 0,
  isOn: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "start":
      return { ...state, isOn: true };
    case "stop":
      return { ...state, isOn: false };
    case "reset":
      return { ...state, isOn: false, time: 0 };
    case "tick":
      return { ...state, time: state.time + 1 };
    default:
      break;
  }
};

export function Example5() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!state.isOn) return;

    timerRef.current = setInterval(() => dispatch({ type: "tick" }), 1000);

    return () => {
      clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [state.isOn]);

  return (
    <div>
      <h2>{state.time}s</h2>
      <br />
      <button
        onClick={() => dispatch({ type: "start" })}
        style={{ border: "1px solid black", padding: 5, marginRight: 20 }}
      >
        Start
      </button>
      <button
        onClick={() => dispatch({ type: "stop" })}
        style={{ border: "1px solid black", padding: 5, marginRight: 20 }}
      >
        Stop
      </button>
      <button
        onClick={() => dispatch({ type: "reset" })}
        style={{ border: "1px solid black", padding: 5, marginRight: 20 }}
      >
        Reset
      </button>
    </div>
  );
}
