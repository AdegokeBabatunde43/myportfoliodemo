import About from './component/about/About';
import Contact from './component/contact/Contact';
import Experience from './component/experience/Experience';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Nav from './component/nav/Nav';
import Portfolio from './component/portfolio/Portfolio';
import Service from './component/service/Service';
import Testimonials from './component/testominals/Testimonials';
import './index.css';

function App() {
  return (
    <div className="App">
    <Header />
    <Nav />
    <About />
    <Experience />
    <Service />
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
    
    
    
      </div>
  );
}

export default App;
