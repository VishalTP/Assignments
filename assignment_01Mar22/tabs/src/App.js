import './App.css';
import Body from './components/Body';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App d-flex">
      <div className="container">
        <Navbar />
        <Body />
      </div>
    </div>
  );
}

export default App;
