import './App.css';
import { Routes, Route } from "react-router-dom";
import LoginComponent from './Components/Login/LoginComponent';
import SignUpComponent from './Components/Login/SignUp/SignUpComponent';
import ForgotPasswordComponent from './Components/Login/ForgotPassword/ForgotPasswordComponent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/signup" element={<SignUpComponent />} />
        <Route path="/forgotPassword" element={<ForgotPasswordComponent />} />
      </Routes>
    </div>
  );
}

export default App;
