import './works.css'
import todoList from '../../assets/todolist.png'
import password from '../../assets/passwordgenerator.png'
import textToSpeech from '../../assets/texttospeech.png'
import weather from '../../assets/weather.png'
import tp from '../../assets/programming.png'


const Works = () => {
    return ( 
        <section id="works">
            <span className="worksTitle">My Projects</span>
            <span className="worksDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem necessitatibus hic voluptates. Perspiciatis, blanditiis. Omnis explicabo nobis neque autem animi placeat expedita, dolor sequi quaerat, libero fugiat eos! Perferendis, quia!</span>
            <div className='projects'>
                <div className="project">
                    <p className='projectTitle'>Todo List</p>
                    <img src={todoList} alt="todoList" className='projectsImg'/>
                    <button className="projectsBtn"  onClick={() => window.open('https://abdellahz0.github.io/To-dolist/todo.html', '_blank', 'noopener,noreferrer')}>more</button>
                </div>
                <div className="project">
                    <p className='projectTitle'>Password generator</p>
                    <img src={password} alt="password" className='projectsImg'/>
                    <button className="projectsBtn"  onClick={() => window.open('https://abdellahz0.github.io/Password-generator/password', '_blank', 'noopener,noreferrer')}>more</button>
                </div>
                <div className="project">
                    <p className='projectTitle'>Text to speech</p>
                    <img src={textToSpeech} alt="text To speech" className='projectsImg'/>
                    <button className="projectsBtn"  onClick={() => window.open('https://abdellahz0.github.io/text-to-speech-convertion/text-to-speech', '_blank', 'noopener,noreferrer')}>more</button>
                </div>
                <div className="project">
                    <p className='projectTitle'>Weather App</p>
                    <img src={weather} alt="weather" className='projectsImg'/>
                    <button className="projectsBtn"  onClick={() => window.open('https://abdellahz0.github.io/Weather-App/weather.html', '_blank', 'noopener,noreferrer')}>more</button>
                </div>
                <div className="project">
                    <p className='projectTitle'>TP C</p>
                    <img src={tp} alt="tp" className='projectsImg'/>
                    <button className="projectsBtn"  onClick={() => window.open('https://github.com/Abdellahz0/TPprimenumbers', '_blank', 'noopener,noreferrer')}>more</button>
                </div>
                {/* <div className="project">
                    <img src={weather} alt="" className='projectsImg'/>
                    <button className="projectsBtn">More</button>
                </div> */}
            </div>
            <button className="worksBtn" onClick={()=> {window.open('https://github.com/Abdellahz0', '_blank' , 'noopener,noreferrer')}}>See more</button>
        </section>
    );
}

export default Works;