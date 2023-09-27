import { useState, useMemo } from "react";

function 부하() {
  // console.time();
  let s = 0;
  for (let i = 0; i < 10000; i++) {
    s += 1;
  }
  // console.timeEnd();
  return s;
}

function App() {
  const [count, setCount] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const handleCountUp = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleCountUpTwo = (e) => {
    setCountTwo(countTwo + 1);
    console.log(countTwo);
  };

  let result = useMemo(() => {
    return 부하();
  }, []);
  return (
    <div>
      <h1>결과 계산 : {result}</h1>
      <div>{count}</div>
      <div>{countTwo}</div>

      <button onClick={handleCountUp}>up!</button>
      <button onClick={handleCountUpTwo}>up2!</button>
    </div>
  );
}
export default App;
