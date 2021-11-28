import './App.css';
import { Routes, Route } from "react-router-dom";
import LoginComponent from './Components/Login/LoginComponent';
import SignUpComponent from './Components/Login/SignUp/SignUpComponent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/signup" element={<SignUpComponent />} />
      </Routes>
    </div>
  );
}

export default App;
