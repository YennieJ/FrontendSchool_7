import { useState, useEffect } from "react";

// useEffect(()=>{
//   state가 변경되어 랜더링 될때 실행하는 부분!

//   return()=>{
//     언마운트 또는 다음 이펙트가 일어나기전에 실행하는 부분
//     다시 랜더링을 하기 이전에 컴포넌트를 지우고 다시 그린다.
//     이 과정에서 지우기 전에 실행되는 부분이다! clean-up이라고도 한다.

//   }
// },[/*state값이 들어간다.(들어가지 않으면 최초 1번만 실행된다)*/])

function Counter() {
  const [count, setCount] = useState(0);
  const hadleCountUp = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("effect");

    if (count % 2 === 0) {
      console.log(count, "짝수");
    } else {
      console.log(count, "홀수");
    }

    return () => {
      console.log(count, "이펙트가 일어나기 직전");
    };
  });

  return (
    <>
      <div>{count}</div>
      <button onClick={hadleCountUp}>Up!</button>
    </>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}
export default App;
