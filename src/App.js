import './App.css';
import Header from './component/Header';
import Nav from './component/Nav';
import Projects from './component/pages/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Profile from './component/Profile';


function App() {
  return (
    <div className="App py-4">
      <Router>
        <Header />

        <div className='flex'>
          <Nav />
          <Routes>
            <Route exact path="/component/pages/Projects" id='Projects' element={<Projects />} />
            <Route exact path="/component/Profile" id='Profile' element={<Profile />} />

          </Routes>
        </div>
      </Router>
    </div>
  );
}






export default App;
