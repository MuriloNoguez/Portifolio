
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col gap-20">
        <Hero />
        <About />
  <Skills />
  <Portfolio />
      </main>
    </>
  );
}

export default App;
