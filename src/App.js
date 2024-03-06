import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginWithImage from './components/LoginWithImage';
import GoogleSignIn from './components/GoogleSignIn';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define routes for your components */}
          <Route path="/" element={<LoginWithImage />} />
          <Route path="/googlesignin" element={<GoogleSignIn />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
