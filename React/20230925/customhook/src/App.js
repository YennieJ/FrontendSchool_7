import InputComponent from "./components/InputComponent";
import SubmitComponent from "./components/SubmitComponent";

import useScroll from "./Hooks/useScroll";
import useMouseLocation from "./Hooks/useMouseLocation";

function App() {
  const isBottom = useScroll();
  console.log(isBottom);

  const mouseLocation = useMouseLocation();

  return (
    <div style={{ height: "3000px" }}>
      <div
        style={{
          height: 100,
          width: 100,
          backgroundColor: mouseLocation.y > 100 ? "royalblue" : "hotpink",
        }}
      ></div>
      <SubmitComponent />
    </div>
  );
}
export default App;
