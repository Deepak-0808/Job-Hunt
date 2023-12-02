import './App.css';
import { Routes,Route, NavLink } from 'react-router-dom';
import  Home  from "./components/Home";
import  About  from "./components/About";
import  Support  from "./components/Support";
import  Labs  from "./components/Labs";
import  NotFound  from "./components/NotFound";
import Browse from './components/Browse';
// import {Link} from 'react-router-dom'
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
          <NavLink to="/">Home</NavLink>
          </li>
          <li>
          <NavLink to="/Support">Browsejo</NavLink>
          </li>
          <li>
          <NavLink to="/About">About</NavLink>
          </li>
          <li>
          <NavLink to="/Labs">Labs</NavLink>
          </li>
        </ul> 
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader/>}>
        <Route index element={<Home/>}/>
        <Route path="/support" element={<Support/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/labs" element={<Labs/>} />
        <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
