import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.scss"
import Header from "./components/Header/Header.jsx"
import HomePage from "./components/HomePage/HomePage.jsx"
import Comp1 from "./components/Comp1/Comp1.jsx"
import Footer from "./components/Footer/Footer.jsx"



function App() {


  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/comp1" element={<Comp1/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
