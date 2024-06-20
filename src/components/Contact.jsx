import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await axios.post(
        "https://felix-portfolio-two.vercel.app/send-email",
        formData
      );

      setMessage(response.data);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setMessage("");
        setIsSending(false);
      }, 3000);
    } catch (error) {
      setMessage("Error sending email");

      setTimeout(() => {
        setMessage("");
        setIsSending(false);
      }, 3000);
    }
  };

  return (
    <div className="contact">
      <h1
        id="contact"
        className="contact__header"
      >
        CONTACT
      </h1>

      <form
        onSubmit={handleSubmit}
        className="contact__form"
        id="contact"
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSending}
        >
          Submit
        </button>

        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default Contact;
