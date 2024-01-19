import { Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
// import ItemPage from "./pages/ItemPage";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="*" element={<HomePage />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />

        {/* <Route path="/art/:id" element={<ItemPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
