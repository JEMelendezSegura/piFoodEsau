import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from "./components/views/landing/landing";
import Home from './components/views/home/home';
import Detail from './components/detail/detail';


function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
