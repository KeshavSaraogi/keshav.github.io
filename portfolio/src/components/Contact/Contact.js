import './Contact.css';
import React, { useRef }  from 'react';
import emailjs            from 'emailjs-com';
import githubIcon         from '../../assets/contact-icons/github.png'
import linkedinIcon       from '../../assets/contact-icons/linkedin.png';
import instagramIcon      from '../../assets/contact-icons/instagram.png';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;

    console.log(name, email, message)

    const onSuccess = function(result) {
      console.log(result.text);
      alert('Message sent successfully!');
    };

    const onError = (error) => {
      console.log(error.text);
      alert('Failed to send the message, please try again.');
    };

    emailjs.sendForm('service_acp64sr', 'template_48euqmp', form.current, 'v6eqwQvZjHdU-apNR', {
      from_name: name,
      to_name: email,
      message: message,
    })
    .then(onSuccess, onError);

    e.target.reset();
  };

  return (
    <div className="contact-container">
      <div className="contact-section">
        <h2>Get In Touch</h2>
            <div className="social-media">
              <a href="https://github.com/KeshavSaraogi"><img src={githubIcon} alt="Github" /></a>
              <a href="https://www.linkedin.com/in/keshav-saraogi/"><img src={linkedinIcon} alt="LinkedIn" /></a>
              <a href="https://www.instagram.com/iamkeshavsaraogi/"><img src={instagramIcon} alt="Instagram" /></a>
            </div>
        
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="text" placeholder="Phone Number" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit">SEND NOW</button>
        </form>
      </div>
    </div>  
  );
}

export default Contact; 
