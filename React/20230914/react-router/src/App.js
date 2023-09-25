import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
      </Routes>
    </BrowserRouter>
  );
}

function Index() {
  return <h1>hello world0</h1>;
}

function One() {
  return <h1>hello world1</h1>;
}

function Two() {
  return <h1>hello world2</h1>;
}

function Three() {
  return <h1>hello world3</h1>;
}

export default App;
