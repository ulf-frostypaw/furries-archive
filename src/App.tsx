import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/forms/login'
import Register from './pages/forms/register'
import Map from './pages/Map'
import Users from './pages/users';

import Error404 from './pages/error404'

function App() {
  return (
	  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/users" element={<Users />} />
        <Route path="/topics" element={<Users />} />
        <Route path="/topics/:name" element={<Users />} />

        <Route path="/user/:name" element={<Users />} />
        <Route path="/user/:name/about" element={<Users />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
