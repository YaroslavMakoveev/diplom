import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AuthCheck from './components/middleware/AuthCheck';
import Lk from './pages/lk';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/lk' element={
            <AuthCheck>
              <Lk />
            </AuthCheck>
          }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;