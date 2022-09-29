import { Route, Routes} from 'react-router-dom'
import AppLayouts from './components/Layout'
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <AppLayouts>
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </AppLayouts>
      
  );
}

export default App;
