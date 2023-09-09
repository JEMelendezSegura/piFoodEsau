import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from "./components/views/landing/landing";
import Home from './components/views/home/home';
import Detail from './components/detail/detail';
import NavBar from './components/navBar/navBar';


function App() {
  const {pathname} = useLocation();


  return (
    <div>
      {pathname !== '/' && <NavBar/>}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
