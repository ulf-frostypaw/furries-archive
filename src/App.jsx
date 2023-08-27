import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import Error404 from './pages/error404'
import Login from './pages/forms/login'
import Register from './pages/forms/register'
import Map from './pages/Map'
import Play from './pages/Play'
function App() {
  return (
	  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/play" element={<Play />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
