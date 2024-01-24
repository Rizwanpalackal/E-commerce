import { useState}  from 'react'
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { SignupPage } from './routes';
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/signup" element={<SignupPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App