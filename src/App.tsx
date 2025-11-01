import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';

function App() {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
          <Hero />
          <About />
          <Skills />
        </div>
    );
}
export default App
