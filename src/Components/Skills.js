import '../App.css';
import SoftSkills from '../Components/SoftSkills';

function Skills(){
    return(
        <div className='content'>
            <h1>SKills</h1>
            <div className='contents-area'>
                <h4>Stack</h4>
                <div className='lang'>
                    <p>W <br/> <span>Web</span></p>
                    <p>M<br/> <span>Mobile</span></p>
                    <p>F <br/> <span>Fullstack</span></p>
                    
                </div>
                <h4>Languages</h4>
                <div className='lang'>
                    <p>Koor <br/> <span>Limted</span></p>
                    <p>English <br/> <span>Full</span></p>
                    <p>Amharic <br/> <span>Native</span></p>
                    
                </div>
                <SoftSkills/>
            </div>
        </div>
    )
}

export default Skills;