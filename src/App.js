import './App.css';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Strength from './Components/Strength';
import Summary from './Components/Summary';
import Volunteer from './Components/Volunteer';
import Intro from './Components/Intro';

function App() {
    return (
        <div className = "App">
            <Intro/>
            <Summary/>
            <Experience/>
            <Education/>
            <Skills/>
            <Strength/>
            <Volunteer/>
            
        </div>
    );
}

export default App;