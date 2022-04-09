import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

// no lazy load
// import { Page1 } from "./components/page-1";
// import { Page2 } from "./components/page-2";
// import { Page3 } from "./components/page-3";
// import { Page4 } from "./components/page-4";
import "./App.css";
import React, { Suspense } from "react";

// const Page1 = React.lazy(() =>
//   import("./components/page-1").then(({ Page1 }) => ({ default: Page1 }))
// );
// const Page2 = React.lazy(() =>
//   import("./components/page-2").then(({ Page2 }) => ({ default: Page2 }))
// );
// const Page3 = React.lazy(() =>
//   import("./components/page-3").then(({ Page3 }) => ({ default: Page3 }))
// );
// const Page4 = React.lazy(() =>
//   import("./components/page-4").then(({ Page4 }) => ({ default: Page4 }))
// );

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavLink to="/1" style={{ padding: 10 }}>
          1
        </NavLink>
        <NavLink to="/2" style={{ padding: 10 }}>
          2
        </NavLink>
        <NavLink to="/3" style={{ padding: 10 }}>
          3
        </NavLink>
        <NavLink to="/4" style={{ padding: 10 }}>
          4
        </NavLink>
      </div>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/1" element={<Page1 />} />
          <Route path="/2" element={<Page2 />} />
          <Route path="/3" element={<Page3 />} />
          <Route path="/4" element={<Page4 />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
