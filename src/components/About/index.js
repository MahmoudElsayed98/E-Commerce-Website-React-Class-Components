// import React, { Component } from "react";
// import "./index.css";

// class About extends Component {
//   render() {
//     return <div className="about text-center py-4">About</div>;
//   }
// }

// export default About;

import axios from "axios";
import React, { useReducer, useEffect } from "react";
import "./index.css";

const initialState = {
  post: {},
  error: "",
  loading: true,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        post: action.payload,
        loading: false,
        error: "",
      };
    case "FETCH_FAILED":
      return {
        post: {},
        error: "Something Went Wrong",
        loading: false,
      };
    default:
      return state;
  }
};

function About() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/5")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch(() => {
        dispatch({ type: "FETCH_FAILED" });
      });
  }, []);
  return (
    <div className="about py-4 text-center">
      About
      <p>
        {state.loading ? "loading" : state.post.title}
        {state.error ? state.error : null}
      </p>
    </div>
  );
}

export default About;

// import axios from "axios";
// import React, { useEffect, useReducer } from "react";
// import "./index.css";
// const initialState = {
//   loading: true,
//   error: "",
//   post: {},
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "FETCH_SUCCESS":
//       return {
//         loading: false,
//         error: "",
//         post: action.payload,
//       };
//     case "FETCH_ERROR":
//       return {
//         loading: false,
//         error: "Something went wrong",
//         post: {},
//       };
//     default:
//       return state;
//   }
// };
// function About() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   useEffect(() => {
//     console.log("use effect hook");
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts/50")
//       .then((res) => dispatch({ type: "FETCH_SUCCESS", payload: res.data }))
//       .catch((err) => {
//         dispatch({ type: "FETCH_ERROR" });
//       });
//   }, []);
//   console.log(state.loading);
//   return (
//     <div className="about py-4 text-center">
//       {state.loading ? "loading" : state.post.title}
//       {state.error ? state.error : null}
//     </div>
//   );
// }

// export default About;
// import React, { useReducer } from "react";
// import "./index.css";

// const initialValue = {
//   firstCounter: 0,
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return { firstCounter: state.firstCounter + 1 };
//     case "decrement":
//       return { firstCounter: state.firstCounter - 1 };
//     case "reset":
//       return initialValue;
//     default:
//       return state;
//   }
// };

// function About() {
//   const [count, dispatch] = useReducer(reducer, initialValue);
//   return (
//     <div className="about text-center p-5">
//       <h1> useReducer</h1>
//       <h4>count {count.firstCounter}</h4>
//       <div className="mt-3">
//         <button
//           className="btn btn-primary me-2"
//           type="button"
//           onClick={() => dispatch({ type: "increment" })}
//         >
//           increment
//         </button>
//         <button
//           className="btn btn-primary me-2"
//           type="button"
//           onClick={() => dispatch({ type: "decrement" })}
//         >
//           decrement
//         </button>
//         <button
//           className="btn btn-primary me-2"
//           type="button"
//           onClick={() => dispatch({ type: "reset" })}
//         >
//           reset
//         </button>
//       </div>
//     </div>
//   );
// }

// export default About;
// import React, { useReducer } from "react";
// import "./index.css";

// const initialState = {
//   firstCounter: 0,
//   secondCounter: 10,
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         ...state,
//         firstCounter: state.firstCounter + action.value,
//       };
//     case "decrement":
//       return {
//         ...state,
//         firstCounter: state.firstCounter - action.value,
//       };
//     case "increment2":
//       return {
//         ...state,
//         secondCounter: state.secondCounter + action.value,
//       };
//     case "decrement2":
//       return {
//         ...state,
//         secondCounter: state.secondCounter - action.value,
//       };
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };
// function About() {
//   const [count, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div className="about text-center py-4">
//       <h4>First Counter {count.firstCounter}</h4>
//       <h4>Second Counter {count.secondCounter}</h4>
//       <button
//         className="btn btn-primary me-2"
//         onClick={() => dispatch({ type: "increment", value: 1 })}
//       >
//         Increment
//       </button>
//       <button
//         className="btn btn-primary me-2"
//         onClick={() => dispatch({ type: "decrement", value: 1 })}
//       >
//         Decrement
//       </button>
//       <button
//         className="btn btn-primary me-2"
//         onClick={() => dispatch({ type: "increment", value: 5 })}
//       >
//         Increment5
//       </button>
//       <button
//         className="btn btn-primary me-2"
//         onClick={() => dispatch({ type: "decrement", value: 5 })}
//       >
//         Decrement5
//       </button>
//       <button
//         className="btn btn-primary me-2"
//         onClick={() => dispatch({ type: "increment2", value: 10 })}
//       >
//         Increment2
//       </button>
//       <button
//         className="btn btn-primary me-2"
//         onClick={() => dispatch({ type: "decrement2", value: 10 })}
//       >
//         Decrement2
//       </button>
//       <button
//         className="btn btn-primary"
//         onClick={() => dispatch({ type: "reset", value: 5 })}
//       >
//         Reset
//       </button>
//     </div>
//   );
// }

// export default About;
