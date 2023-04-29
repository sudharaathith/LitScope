import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Domain from './Pages/Domain/Domain';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="domain/*" element={<Domain/>}/>
      </Routes>
    </Router>
  );
}

export default App;
