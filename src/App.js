import logo from './logo.svg';
import './App.css';
import Hero from "./components/hero/hero.component";
import About from "./routes/about/about.component";

function App() {
    return (
        <div className="App">
            <Hero/>
            <About/>
        </div>
    );
}

export default App;
