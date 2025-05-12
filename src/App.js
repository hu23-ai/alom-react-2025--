import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hyunseo from "./assignments/hyunseo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>/hyunseo 경로로 이동해보세요.</div>} />
        <Route path="/hyunseo" element={<Hyunseo />} /> 
      </Routes>
    </Router>
  );
}

export default App;
