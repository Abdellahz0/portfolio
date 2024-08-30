import './contact.css'
import { useRef } from 'react'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm('service_ryma45k', 'template_qf1591e', form.current,'9bxKUVYMb8WZIOHVv',)
            .then(
            () => {
                console.log('SUCCESS!');
                e.target.reset();
                alert("Email Sent !");
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
            );
        };
    return ( 
        <section className="contactPage">
            <div id='clients'>
                <h1 className="contactPageTitle">My clients</h1>
                <p className='clientDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas temporibus quasi nulla dolorum recusandae eos laudantium possimus! Ea, numquam. Voluptatem porro accusamus deleniti provident enim deserunt odio odit quidem eaque?</p>
                {/* <div className="clientImgs">
                    <img src={} alt="" className="clientImg" />
                    <img src={} alt="" className="clientImg" />
                    <img src={} alt="" className="clientImg" />
                    <img src={} alt="" className="clientImg" />
                </div> */}
            </div>
            <div id='contact'>
                    <h1 className="contactPageTitle">Contact Me</h1>
                    <p className='contactDesc'>Please fill out the form below to discuss any work opportunities.</p>
                    <form className='contactForm' ref={form} onSubmit={sendEmail}>
                        <input type="text" className="name" placeholder='Your Name' name= 'from_name'/>
                        <input type="email" className="email" placeholder='Your Email' name= 'from_email'/>
                        <textarea name="message" rows="5" placeholder='Your Message' className='msg'></textarea>
                        <button type='submit' value='send' className="submitBtn">Submit</button>
                        <div className="links">
                            <img src={facebook} alt="Facebook" className="link" onClick={()=>{window.open('https://www.facebook.com/profile.php?id=100085695937645&mibextid=LQQJ4d', '_blank' , 'noopener,noreferrer')}}/>
                            <img src={instagram} alt="instagram" className="link" onClick={()=>{window.open('https://www.instagram.com/abdellah_zeghmar?igsh=MXJ3OGd6bXhxNjZwbQ%3D%3D&utm_source=qr', '_blank' , 'noopener,noreferrer')}}/>
                            <img src={linkedin} alt="Linkedin" className="link" onClick={()=>{window.open('https://www.linkedin.com/in/abdellah-zeghmar-55a914292/', '_blank' , 'noopener,noreferrer')}}/>
                            <img src={github} alt="github" className="link" onClick={()=>{window.open('https://github.com/Abdellahz0', '_blank' , 'noopener,noreferrer')}}/>
                        </div>
                    </form>
            </div>
        </section>
    );
}
export default Contact;