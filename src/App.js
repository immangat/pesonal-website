import logo from './logo.svg';
import './App.css';
import Hero from "./components/hero/hero.component";
import About from "./routes/about/about.component";
import Projects from "./routes/projects/projects.component";

function App() {
    return (
        <div className="App">
            <Hero/>
            <About/>
            <Projects />
        </div>
    );
}

export default App;
