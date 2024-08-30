import './skill.css'
import js from '../../assets/js.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import nodejs from '../../assets/nodejs.png'
import problemSolving from '../../assets/problemsolving.png'
import reactlib from '../../assets/react.png'


const Skill = () => {
    return ( 
        <section id='skills'>
            <span className="skillTitle">What I do </span><br />
            <span className="skillDesc">Second year CS student , fullstack developer still learning more about<br /> web dev. Passionate with Ai especially machine learning</span>
            <div className="skillBox">
                <div className="skillBar">
                    <img src={html} alt="html" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>HTML</h2>
                        <p>this has to be filled</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={css} alt="css" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>CSS</h2>
                        <p>this has to be filled</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={js} alt="javascript" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>javascript</h2>
                        <p>this has to be filled</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={reactlib} alt="react" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>React js</h2>
                        <p>this has to be filled</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={nodejs} alt="node js" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Backend developement</h2>
                        <p>this has to be filled</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={problemSolving} alt="problem solving" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Problem Solving</h2>
                        <p>this has to be filled</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skill;