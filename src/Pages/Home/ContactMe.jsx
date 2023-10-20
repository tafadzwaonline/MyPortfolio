import React from 'react';


export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div className="contact--content">
        <h2 className="section-title">Contact Me</h2>
        <p className="sub--title">Don't be shy! Hit me up! 👇</p>
        <p className="section-description">
          I'm here to help you. If you have any questions or inquiries, please feel free to reach out to me.
        </p>
      </div>

      <div className="contact-info">
        <div className="contact-info-item">
          <h3>Location</h3>
          <p>Harare, Zimbabwe</p>
          <br></br>
        </div>
        <div className="contact-info-item">
          <h3>Mail</h3>
          <p>
            <a href="mailto:kahwaitafadzwa@gmail.com">kahwaitafadzwa@gmail.com</a>
          </p>
          <br></br>
        </div>
        <div className="contact-info-item">
          <h3>Mobile</h3>
          <p>
            <a>+263 784 706 556</a>
          </p>
        </div>
      </div>
    </section>
  );
}
