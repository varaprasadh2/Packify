// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import packaing_wizard from './pages/PackingWizard';
import AuthComponent from './pages/private/AuthComponent';
import DashBoard from './pages/private/Dashboard/Index';
import LoadPlan from './pages/private/LoadPlan';
import LoadPlans from './pages/private/LoadPlan/Components/LoadPlans/LoadPlans';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='' element={<LandingPage />}/>
          <Route element={<AuthComponent />}>
            <Route path='/dashboard' element={<DashBoard/>}/>
            <Route path='/loadPlan' element={<LoadPlan/>}/>
            <Route path='/loadPlans/:id' element={<LoadPlans/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
