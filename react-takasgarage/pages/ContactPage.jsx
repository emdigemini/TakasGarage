export function ContactPage() {
  return (
    <div className="contact">
      <div className="contact__header"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="600"
      >
        <h1 className="contact__title">Get in Touch</h1>
        <p className="contact__description">
          Have questions about our cars or customization services? 
          We're here to help you find your perfect ride.
        </p>
      </div>

      <div className="contact__cards">
        <div className="contact__card"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="300"
        >
          <div className="contact__card-icon email">
            <i className="bi bi-envelope"></i>
          </div>
          <p className="contact__card-title">Email Us</p>
          <p className="contact__card-text">support@gmail.com</p>
          <p className="contact__card-text">sales@gmail.com</p>
        </div>
        <div className="contact__card"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="400"
        >
          <div className="contact__card-icon">
            <i className="bi bi-telephone"></i>
          </div>
          <p className="contact__card-title">Call Us</p>
          <p className="contact__card-text">+63 912 345 6789</p>
          <p className="contact__card-text">+63 923 456 7890</p>
        </div>
        <div className="contact__card"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500"
        >
          <div className="contact__card-icon location">
            <i className="bi bi-geo-alt"></i>
          </div>
          <p className="contact__card-title">Visit Us</p>
          <p className="contact__card-text">123 Tanay, Rizal</p>
          <p className="contact__card-text">Brgy. Wawa</p>
        </div>
        <div className="contact__card"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="600"
        >
          <div className="contact__card-icon">
            <i className="bi bi-clock"></i>
          </div>
          <p className="contact__card-title">Business Hours</p>
          <p className="contact__card-text">Monday - Friday: 9AM - 6PM</p>
          <p className="contact__card-text">Saturday - Sunday: 10AM - 4PM</p>
        </div>
      </div>

      <div className="contact__form-section"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="contact__send-message">
          <p>Send us a Message</p>
          <div className="send-message__full-name">
            <div className="first-name">
              <label htmlFor="first_name">First Name</label>
              <input type="text" placeholder="John" />
            </div>
            <div className="last-name">
              <label htmlFor="last_name">Last Name</label>
              <input type="text" placeholder="Cena" />
            </div>
          </div>

          <div className="send-message__email">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="john.cena@example.com" />
          </div>

          <div className="send-message__phone">
            <label htmlFor="phone">Phone</label>
            <input 
              type="tel" 
              placeholder="+63" 
              pattern="\+63[0-9]{9}" 
              maxLength="13" 
              title="Enter a valid Philippine phone number starting with +63" 
            />
          </div>

          <div className="send-message__subject">
            <label htmlFor="subject">Subject</label>
            <select name="" id="subject">
              <option value="">Select a subject</option>
              <option value="purchase inquiry">Purchase Inquiry</option>
              <option value="customization question">Customization Question</option>
              <option value="technical support">Technical Support</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="send-message__leave-message">
            <label htmlFor="message">Message</label>
            <div 
              id="message"
              contentEditable={true}
              className="message-box inactive"
              onInput={leaveMessage}
            ></div>
          </div>

          <button className="send-message">
            <i className="bi bi-send"></i>
            Send Message
          </button>

        </div>

        <div className="contact__quick-help">
          <div className="contact__quick-help-box">
            <p className="quick-help__title">Quick Help</p>
            <div className="quick-help__card">
              <p>How long does delivery take?</p>
              <p>7-10 business days for standard delivery</p>
            </div>
            <div className="quick-help__card">
              <p>Can I customize any car?</p>
              <p>Sports and JDM cars are customizable</p>
            </div>
            <div className="quick-help__card">
              <p>What payment methods do you accept?</p>
              <p>Credit cards, financing, and wire transfers</p>
            </div>
            <div className="quick-help__card">
              <p>Do you offer warranties?</p>
              <p>Yes, all vehicles come with comprehensive warranties</p>
            </div>
          </div>
          <div className="contact__emergency-support">
            <p>24/7 Emergency Support</p>
            <p>
              For urgent matters regarding your vehicle or order, our emergency hotline is available around the clock.
            </p>
            <div className="contact-number">
              <i className="bi bi-telephone"></i>
              +63 912 345 6789
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

function leaveMessage(e){
  const messageBox = document.querySelector('.message-box');
  if(e.currentTarget.textContent.length > 0){
    messageBox.classList.remove('inactive');
  } else {
    messageBox.classList.add('inactive');
  }
}