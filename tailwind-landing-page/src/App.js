import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import Details from './components/Details';
import CustomerStories from './components/CustomerStories';
import Build from './components/Build';
import Plans from './components/Plans';
import Faq from './components/Faq';
import Footer from './components/Footer';
function App() {
  return (
    <div className="text-4xl font-bold">
      <Navbar/>
      <Header/>
      <HowItWorks/>
      <Details/>
      <CustomerStories/>
      <Build/>
      <Plans/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
