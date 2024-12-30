// import Logo from "./components/Logo";
import LandingPage from "./pages/LandingPage";
import Products from "./pages/Products";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Logo /> */}
          <Route path="/" element={<LandingPage/>} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
