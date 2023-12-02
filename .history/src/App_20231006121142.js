import './App.css';
import { Routes,Route, NavLink } from 'react-router-dom';
import  Home  from "./components/Home";
import  About  from "./components/About";
import  Candidates  from "./components/Candidates";
import  Labs  from "./components/Labs";
import  NotFound  from "./components/NotFound";
import Browse from './components/Browse';
// import {Link} from 'react-router-dom'
import MainHeader from './components/MainHeader';

function App() {
  return (
    <div className="App">
      <nav >
        <ul id='navbar'>
          <li>
          <NavLink to="/">Home</NavLink>
          </li>
          <li>
          <NavLink to="/Browse">Browsejob</NavLink>
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
        <Route path="/browse" element={<Browse/>} />
        <Route path="/about" element={<Abou/>} />
        <Route path="/labs" element={<Labs/>} />
        <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
