import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/login' element={<LoginPage />}/>

        </Routes>
      </Router>
    </>
  );
}

export default App;