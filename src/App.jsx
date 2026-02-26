import Hero from './components/Hero';
import StoryMessage from './components/StoryMessage';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import FloatingPetals from './components/FloatingPetals';
import './App.css';

function App() {
  return (
    <div className="app">
      <FloatingPetals />
      <main>
        <Hero />
        <StoryMessage />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
