import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import axios from "axios";
// import "./Contact.css"; // Make sure to import the CSS file

const Contact = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
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
      setFormData({ name: "", email: "", message: "" });

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
    <div className="relative contact max-w-[60%] bg-blue-400 mx-auto my-5 rounded-2xl p-2">
      <div
        className={`absolute -top-0 -left-0 rounded-2xl w-full h-full bg-red-200 transition-all duration-500 ${
          isOverlayVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-4xl text-center">
            INTERESTED IN WORKING TOGETHER?
          </p>
          <button
            className="p-2 bg-slate-200 rounded-lg"
            onClick={() => setIsOverlayVisible(false)}
          >
            GET IN TOUCH
          </button>
        </div>
      </div>

      <h1 className="flex text-4xl my-5 font-bold">GET IN TOUCH</h1>

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
            rows={1}
            id="message"
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={isSending}
            className="border px-3 py-1 rounded-xl"
          >
            Submit
          </button>

          <div>
            <ul className="flex space-x-2 lg:space-x-4 text-2xl">
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaGithub />
              </li>
              <li>
                <FaEnvelope />
              </li>
            </ul>
          </div>
        </div>

        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default Contact;
