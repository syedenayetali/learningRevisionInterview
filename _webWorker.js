import React, { useState } from "react";

//creating Blob
const workerBlob = new Blob(
  [
    `
  onmessage = (ev) => {
    if (ev.data.action === "start") {
      let myNumber = 1;
      for (let i = 1; i <= 10000000; i++) {
        myNumber = myNumber + i + ev.data.count;
      }
      postMessage(myNumber);
    }
  };
`,
  ],
  { type: "application/javascript" }
);

const worker = new Worker(URL.createObjectURL(workerBlob)); // creating worker

const App = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1);

  const finalRes = () => {
    worker.postMessage({ action: "start", count });
    worker.onmessage = (ev) => {
      setNumber(ev.data);
      worker.terminate();
    };
  };

  return (
    <div>
      <h1>Sum of Numbers:</h1>
      {count}
      <button onClick={() => setCount((prev) => prev + 1)}>Add +1</button>
      <button onClick={finalRes}>The final Result</button>

      <div>The final number is {number}</div>
    </div>
  );
};

export default App;
