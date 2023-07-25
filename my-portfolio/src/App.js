import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Head from "./Components/Head";
import Home from "./Components/Home";
import Resume from "./Components/Resume";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div className="overflow-hidden scroll-smooth">
         <ScrollToTop />
 
      <Home></Home>
      <About />
      <Resume />
      <Contact />
      <Footer />
   
    </div>
  );
}
export default App;