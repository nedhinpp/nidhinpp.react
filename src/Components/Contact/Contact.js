import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import ModalPopup from '../Modal/Modal';


function Contact() {
    const [showModal, setShowModal] = useState(false);
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ygt4eet', 'template_lrh5q7c', form.current, 'user_zzr0QA1lFFjCJt88woE2O')
        .then((result) => {
          setShowModal(true);
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
    
    return (
        <div>
              <section className="contact_area section_gap" id="contactme">
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="contact_info">
            <div className="info_item">
              <i className="lnr lnr-home"></i>
              <h6>Kerala, India</h6>
              <p>Vadakara, Calicut</p>
            </div>
            <div className="info_item">
              <i className="lnr lnr-phone-handset"></i>
              <h6><a href="#">(+91) 6238 4481 04</a></h6>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
            <div className="info_item">
              <i className="lnr lnr-envelope"></i>
              <h6><a href="#">nedhinpp@gmail.com</a></h6>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
        <div className="col-lg-9">
          <form className="row contact_form" onSubmit={sendEmail} ref={form} method="post" id="contactForm">
            <div className="col-md-6">
              <div className="form-group">
                <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" id="email" name="email" placeholder="Enter email address" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <textarea className="form-control" name="message" id="message" rows="1"
                  placeholder="Enter Message"></textarea>
              </div>
            </div>
            <div className="col-md-12 text-right">
              <button type="submit" value="submit" className="primary_btn">
                <span>Send Message</span>
              </button>
              <ModalPopup show={showModal}  close={() => setShowModal(false)} />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

        </div>
    )
    
}

export default Contact
