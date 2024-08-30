import './intro.css'
import bg from '../../assets/Red Abstract Fire Letter A Logo (3).png'
import {Link} from 'react-scroll'
import hireme from '../../assets/hireme.png'

const Intro = () => {
    return ( 
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm
                    <span className="introName"> Abdellah</span> <br /> Web Developer
                </span>
                <p className="introPara">Second year CS student , fullstack developer still learning more about<br /> web dev. Passionate with Ai especially machine learning
                </p>
                <Link><button className='Btn'><img src={hireme} alt="Hire me" className='hireimg'/>Hire me</button></Link>
            </div>
            <img src={bg} alt="" className="bg" />
        </section> 
    );
}

export default Intro;