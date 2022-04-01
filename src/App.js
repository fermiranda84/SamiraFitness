import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Programas} from "./components/Programas";
import {Main} from "./components/Main"
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="" element={<Main />} />
            <Route path="programas" element={<Programas />} />
          </Route>
        </Routes>

      </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
