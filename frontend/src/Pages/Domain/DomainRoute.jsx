import Create from "./Create";
import Domain from "./Domain";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function DomainRoute() {
  return (

      <Routes>
        <Route path="/" element={<Domain/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/edit/:domain" exact element={<Create/>}/>
      </Routes>

  );
}

export default DomainRoute;