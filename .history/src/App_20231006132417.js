import './App.css';
import { Routes,Route, NavLink } from 'react-router-dom';
import  Home  from "./components/Home";
import  Footer  from "./components/Footer";
import  Candidates  from "./components/Candidates";
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
          <NavLink to="/Candidates">Candidates</NavLink>
          </li>
        </ul> 
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader/>}>
        <Route index element={<Home/>}/>
        <Route path="/browse" element={<Browse/>} />
        <Route path="/candidates" element={<Candidates/>} />
        <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
