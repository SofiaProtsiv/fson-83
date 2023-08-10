import ReactDOM from "react-dom/client";

import "./index.css";

import { Example1, Example2, Example3 } from "./assets/useRef";
import { Example4 } from "./assets/useCallback_useMemo";
import App from "./App";
import { Example5 } from "./assets/useReducer";
import { GlobalContext } from "./contex/stateContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

// ? useRef
// root.render(<Example1 />);
// root.render(<Example2 />);
// root.render(<Example3 />);

// ? useMemo vs useCallback
// root.render(<Example4 />);

// ? useReducer
// root.render(<Example5 />);

// ? useContect
root.render(
  <GlobalContext>
    <App />
  </GlobalContext>
);
