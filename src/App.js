
import {Route, Routes} from "react-router-dom";
import './App.css';
import Createaccount from './pages/createaccount';
import ForgotPass from './pages/forgotpass';
import Login from './pages/login';
import NotFound from "./pages/notfound";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Createaccount />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/forgotpass' element={<ForgotPass />}/>
        <Route path='/*' element={<NotFound />}/>
      </Routes>
    </>
    
  );
}

export default App;
