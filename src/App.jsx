import { Routes, Route, useLocation } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import Comp1 from "./components/Comp1/Comp1.jsx";
import Storage from "./components/Storage/Storage.jsx";
import AddPhone from "./components/AddPhone/AddPhone.jsx";
import Search from "./components/Search/Search"
function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/" ? null : <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/comp1" element={<Comp1 />} />
        <Route path="/storage" element={<Storage />} />
        <Route path="/addphone" element={<AddPhone />} />
        <Route path="/recherche" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
