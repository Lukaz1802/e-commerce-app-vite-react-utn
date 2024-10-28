
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Home} from './pages/Home'
import {Login} from './pages/Login'
import {Registro} from './pages/Registro'
import { ProductDetail } from './pages/ProductDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;