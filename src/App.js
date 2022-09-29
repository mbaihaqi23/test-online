import { Route, Routes} from 'react-router-dom'
import AppLayouts from './components/Layout'
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <AppLayouts>
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </AppLayouts>
      
  );
}

export default App;
