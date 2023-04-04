
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Forms from './components/input';
import Cards from './components/output';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Forms/>
     <Cards/>
    </div>
  );
}

export default App;
