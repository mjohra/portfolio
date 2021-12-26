import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/" element={<Home></Home>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
