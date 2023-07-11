import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Head from './Components/Head';
import Home from './Components/Home';
import Resume from './Components/Resume';

function App() {
  return (
    <div className="overflow-hidden ">
      <Head></Head>
      <Home></Home>
      <About />
      <Resume />
      <Contact />
    </div>
  );
}
export default App;
