


import React, {useState} from 'react';
import '../styles/Contact.css'; // linking styles



const Contact = () => {
  // State to manage form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    setIsSubmitting(true); // Set loading state
    setSubmissionStatus(''); // Clear any previous status message
    const formData = new FormData(event.target);

    try {
      const response = await fetch('https://1f5n45xe74.execute-api.ap-southeast-2.amazonaws.com/prod/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });

      if (response.ok) {
        setSubmissionStatus('Message sent successfully!');
        event.target.reset(); // Clear form fields upon successful submission
      } else {
        setSubmissionStatus('Error sending message.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmissionStatus('Error sending message.');
    } finally {
      setIsSubmitting(false); // Reset loading state
    }
  };

  return (
    <section id="contact" className="contact-section">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-box">
          <form id="contact-form" onSubmit={handleSubmit} method="POST">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" placeholder="Enter your message" required></textarea>

            <button type="submit" className="btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
          </form>

          {/* Show submission status */}
          {submissionStatus && <p className="submission-status">{submissionStatus}</p>}

        </div>
      </section>
  );
};


export default Contact;