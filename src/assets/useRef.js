import { useEffect, useRef, useState } from "react";

// export function Example1() {
//   let a = 0;
//   const ref = useRef(0);
//   const [state, setState] = useState(0);

//   const firstClick = () => {
//     a = 2;
//     console.log("a", a);
//     console.log("ref before", ref);
//     ref.current = 2;
//     console.log("ref after", ref);
//   };

//   const secondClick = () => {
//     setState(2);
//   };

//   return (
//     <div className="App">
//       <h3>a: {a}</h3>
//       <h2>state: {state}</h2>
//       <h1>ref: {ref.current}</h1>
//       <button onClick={firstClick}>First Click</button>
//       <br />
//       <button onClick={() => secondClick(1)}>Second Click</button>
//     </div>
//   );
// }

// export function Example2({ condition = true }) {
//   const inputRef = useRef(null);

//   useEffect(() => {
//     if (condition) {
//       inputRef.current.focus();
//     }
//   }, [condition]);

//   return <input ref={inputRef} />;
// }

// export function Example3() {
//   const aboutRef = useRef(null);
//   const servicesRef = useRef(null);
//   const contactUsRef = useRef(null);

//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         flexDirection: "column",
//       }}
//     >
//       <ul style={{ display: "flex", gap: 30, height: 60 }}>
//         <li
//           onClick={() =>
//             aboutRef.current.scrollIntoView({ behavior: "smooth" })
//           }
//           style={{ cursor: "pointer" }}
//         >
//           About
//         </li>
//         <li
//           onClick={() =>
//             servicesRef.current.scrollIntoView({ behavior: "smooth" })
//           }
//           style={{ cursor: "pointer" }}
//         >
//           Services
//         </li>
//         <li
//           onClick={() =>
//             contactUsRef.current.scrollIntoView({ behavior: "smooth" })
//           }
//           style={{ cursor: "pointer" }}
//         >
//           Contact Us
//         </li>
//       </ul>

//       <section
//         ref={aboutRef}
//         style={{
//           width: "100%",
//           height: "800px",
//           backgroundColor: "lightsalmon",
//         }}
//       >
//         About Section
//       </section>
//       <section
//         ref={servicesRef}
//         style={{
//           width: "100%",
//           height: "800px",
//           backgroundColor: "lightgreen",
//         }}
//       >
//         Services Section
//       </section>
//       <section
//         ref={contactUsRef}
//         style={{ width: "100%", height: "800px", backgroundColor: "lightpink" }}
//       >
//         Contact Us Section
//       </section>
//     </div>
//   );
// }
