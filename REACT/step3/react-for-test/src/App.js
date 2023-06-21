import { useState, useEffect } from "react";

/*** component */
/** 주로 사용하는 형태 */
function HelloV1() {
  useEffect(() => {
    console.log("creacted");

    /** clean up function */
    return () => console.log("destroyed");
  }, []);
  return <h1>Hello</h1>;
}

/** 작게 쪼갠 형태 */
function HelloV2() {

  function byeFn() {
    console.log("Bye :(");
  }

  const hiFn = () => {
    console.log("Hi :)");

    /** clean up function */
    return byeFn;
  }

  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function App() {
  
  /** state */
  const [showing, setShowing] = useState(false);

  /** event */
  const onClick = () => setShowing(prev => !prev);

  return (
    <div>
      {showing ? <HelloV1 /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"} </button>
    </div>
  );
}

export default App;
