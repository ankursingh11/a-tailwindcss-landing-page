import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import Details from './components/Details';
import CustomerStories from './components/CustomerStories';
function App() {
  return (
    <div className="text-4xl font-bold">
      <Navbar/>
      <Header/>
      <HowItWorks/>
      <Details/>
      <CustomerStories/>
    </div>
  );
}

export default App;
