import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import MCCF from "./pages/MCCF.jsx";
import PYCCF from "./pages/PYCCF.jsx";
import JAVELIN from "./pages/JAVELIN.jsx";
import ZDCF from "./pages/ZDCF.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <NavigationBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/methods/mccf" element={<MCCF />} />
          <Route path="/methods/pyccf" element={<PYCCF />} />
          <Route path="/methods/javelin" element={<JAVELIN />} />
          <Route path="/methods/zdcf" element={<ZDCF />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
