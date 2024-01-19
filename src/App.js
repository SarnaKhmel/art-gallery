import { Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";
import ItemPage from "./pages/ItemPage";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="*" element={<HomePage />} /> */}
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/art/:id" element={<ItemPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
