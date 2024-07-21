import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import Home from './Pages/Home';

function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/signIn' element={<SignIn/>}/>
      <Route path='/home' element={<Home/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
