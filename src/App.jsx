import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home'
import Error404 from './pages/error404'
import Login from './pages/forms/login'
import Register from './pages/forms/register'
import Map from './pages/Map'
import Users from './pages/users';
import Play from './pages/Play'
import Landing from './pages/pre-register';
function App() {
  return (
	  <BrowserRouter>
      <Routes>
        {/*<Route path="/" element={<Home />} />*/}
        <Route path='/' element={ <Navigate to="/landing" /> }/>
        <Route path="/map" element={<Map />} />
        <Route path="/users" element={<Users />} />
        <Route path="/play" element={<Play />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
