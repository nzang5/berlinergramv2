import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from './pages/homepage';
import LoginPage from './components/auth/login';
import SignUpPage from './components/auth/signup';
import Feedpage from './pages/feedpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route  path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/feedpage" element={<Feedpage />} />  
      </Routes>
    </BrowserRouter>

  );
}

export default App;
