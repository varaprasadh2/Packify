// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import packaing_wizard from './Pages/PackingWizard';
import ProtectedDashboard from './Pages/private/ProtectedDashboard';
import ProtectedLanding from './Pages/private/ProtectedLanding';




function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route element={<ProtectedLanding/>}>
            <Route path='' element={<LandingPage />}/>
          </Route>
          <Route element={<ProtectedDashboard/>}>
            <Route path='/packaing_wizard' element={<LandingPage />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
