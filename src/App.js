import Contact from './components/contact/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Socials from './components/Socials';
import Divider from './components/Divider';
import Copyright from './components/Copyright';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Contact />
      <div className='socials pt-80'>
        <Socials />
      </div>
      <Divider />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
