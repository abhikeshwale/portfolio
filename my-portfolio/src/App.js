import './App.css';
import About from './Components/About';
import Head from './Components/Head';
import Home from './Components/Home';
import MainContainer from './Components/MainContainer';

function App() {
  return (
    <div className="overflow-hidden ">
    <Head></Head>
    <Home></Home>
    <About/>
    <MainContainer/>
    </div>
  );
}
export default App;
