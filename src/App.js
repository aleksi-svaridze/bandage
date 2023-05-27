import Contact from './components/contact/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Socials from './components/Socials';
import Divider from './components/Divider';
import Copyright from './components/Copyright';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Contact />
      <Socials />
      <Divider />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
