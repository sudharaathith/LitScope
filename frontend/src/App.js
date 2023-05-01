import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import DomainRoute from "./Pages/Domain/DomainRoute";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="domain/*" element={<DomainRoute/>}/>
      </Routes>
    </Router>
  );
}

export default App;
