// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import packaing_wizard from './pages/PackingWizard';
import ProtectedDashboard from './pages/private/ProtectedDashboard';
import ProtectedLanding from './pages/private/ProtectedLanding';
import DashBoard from './pages/private/Dashboard/Index';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route element={<ProtectedLanding/>}>
            <Route path='' element={<LandingPage />}/>
          </Route>
          {/* <Route element={<ProtectedDashboard/>}> */}
            <Route path='/packaing_wizard' element={<LandingPage />}/>
            <Route path='/dashboard' element={<DashBoard />}/>
          {/* </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
