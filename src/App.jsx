import './App.css';
import { Route, Routes } from "react-router-dom";

//Components imported
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
