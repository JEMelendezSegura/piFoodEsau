import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./components/views/landing/landing";
import Home from './components/views/home/home';


function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
