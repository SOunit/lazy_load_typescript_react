import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Page 1</div>} />
        <Route path="/2" element={<div>Page 2</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
