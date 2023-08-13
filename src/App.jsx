import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SinglePage } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single-page/:name" element={<SinglePage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
