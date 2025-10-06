import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/10 to-blue-900/10">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
