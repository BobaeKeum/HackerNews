import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AskStories from "./pages/AskStories";
import JobStories from "./pages/JobStories";
import NewStories from "./pages/NewStories";
import ShowStories from "./pages/ShowStories";
import TopStories from "./pages/TopStories";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ask" element={<AskStories />} />
        <Route path="/job" element={<JobStorvbies />} />
        <Route path="/new" element={<NewStories />} />
        <Route path="/show" element={<ShowStories />} />
        <Route path="/" element={<TopStories />} />
      </Routes>
    </Router>
  );
}

export default App;
