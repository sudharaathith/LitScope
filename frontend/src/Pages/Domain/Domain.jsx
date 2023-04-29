import Create from "./Create";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function Domain() {
  return (

      <Routes>
        {/* <Route path="/" element={<div>hi</div>}/> */}
        <Route path="/" element={<Create/>}/>
      </Routes>

  );
}

export default Domain;