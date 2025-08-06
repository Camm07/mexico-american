// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import CompanyPage from "./pages/CompanyPage";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<CompanyPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
export default App;
