import React, { useState } from 'react';

const ContactUs = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Your WhatsApp number (including country code, no spaces)
    const whatsappNumber = '9027176496'; // Replace with your WhatsApp number

    // Construct the WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    )}`;

    // Open the WhatsApp chat in a new tab
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="card w-full max-w-lg shadow-xl bg-white p-6 rounded-3xl">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Message Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24 w-full"
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-4">
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
