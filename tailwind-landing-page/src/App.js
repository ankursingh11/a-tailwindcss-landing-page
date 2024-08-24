import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import Details from './components/Details';
function App() {
  return (
    <div className="text-4xl font-bold">
      <Navbar/>
      <Header/>
      <HowItWorks/>
      <Details/>
    </div>
  );
}

export default App;
