
import './App.css';
import Navbar from './components/Navbar';
import Admin from './pages/Admin';
import MainRoutes from './pages/MainRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
    </div>
  );
}

export default App;
