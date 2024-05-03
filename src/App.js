import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import NavTabs from "./components/NavTabs";
import Contact from "./pages/Contact";
import Footer from './components/Footer'
import 'aos/dist/aos.css';

const App = () =>
  <>
    <NavTabs />
    <About />
    <Portfolio />
    <Contact />
    <Footer />
  </>
  ;

export default App;