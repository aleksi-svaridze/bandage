import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Socials from './components/Socials';
import Copyright from './components/Copyright';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Contact />
      <Socials />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
