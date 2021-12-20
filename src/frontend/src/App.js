import './App.css';
import { TeamPage } from './pages/TeamPages';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { MatchPage } from './pages/MatchPages';

function App() {
  return (
    <div className="App">
      <h1>IPL Dashboard</h1>
      <Router>
        <Routes>
            <Route path='/teams/:teamName/matches/:year' element={<MatchPage/>}/>
            <Route path='/teams/:teamName' element={<TeamPage/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
