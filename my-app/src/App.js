import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/Login";
import ProductPage from "./pages/Product";
import SearchPage from "./pages/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="product" element={<ProductPage />}>
            <Route path=":id" element={<ProductPage />} />
          </Route>
          <Route path="search" element={<SearchPage />}>
            <Route path=":id" element={<SearchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
