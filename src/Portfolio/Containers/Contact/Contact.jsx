import React, { useState, useRef } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_mzl2fc8',
        'template_docr8l6',
        formRef.current,
        '5uMJDE1rEuEhPtPnn'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          setTimeout(() => {
            setSent(false);
            setFormData({ name: '', email: '', message: '' });
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact_container">
        <h1>Contact Me</h1>
        <hr className="section-divider" />
        <p>Have a question or want to work together? Reach out!</p>

        <div className="contact_content">
          <form ref={formRef} className="contact_form" onSubmit={handleSubmit}>
            <div className="form_group">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name" 
                required 
              />
            </div>
            <div className="form_group">
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email" 
                required 
              />
            </div>
            <div className="form_group">
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message" 
                rows="5" 
                required
              ></textarea>
            </div>

            <button type="submit" className={`button ${sent ? 'sent' : ''}`}>
              <span className="button_content">
                {!sent ? (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Send Message
                  </>
                ) : (
                  <>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Message Sent!
                  </>
                )}
              </span>
            </button>
          </form>

          <div className="contact_info">
            <h2>Get in Touch</h2>
            <p>If you prefer, you can also reach me through the information below.</p>
            <ul>
              <li><strong>Email:</strong> yourname@example.com</li>
              <li><strong>Phone:</strong> +123 456 7890</li>
              <li><strong>Location:</strong> Your City, Country</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
