import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const linkedin =
    "https://www.linkedin.com/in/uyuoukoh-udoh-305a782b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
  const email =
    "mailto:uyuoukoh@gmail.com?subject=Lets%20Work&body=Hey%2C%20Good%20day%2C%20My%20name%20is...";
  const github = "https://github.com/Felixx-jnr";

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
    <div
      className="relative contact w-[90%] sm:w-[70%] bg-red-200 mx-auto my-5 rounded-2xl p-2"
      id="contact"
    >
      <div
        className={`absolute -top-0 -left-0 rounded-2xl w-full h-full bg-red-200 transition-all duration-500 ${
          isOverlayVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center">
          <p className="sm:text-4xl text-2xl text-center font-bold my-4">
            INTERESTED IN WORKING TOGETHER?
          </p>
          <button
            className=" text-sm sm:text-2xl p-2 bg-red-300 hover:bg rounded-lg font-bold hover:bg-red-400 hover:text-white  "
            onClick={() => setIsOverlayVisible(false)}
          >
            GET IN TOUCH
          </button>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="contact__form lg:w-[70%] w-full mx-auto px-3 py-3"
        id="contact"
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name . . ."
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
            placeholder="Email . . ."
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
            placeholder="Your message . . ."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={isSending}
            className="border px-3 py-1 rounded-xl text-sm md:text-xl my-2 bg-red-300 hover:bg font-semibold hover:bg-red-400 hover:text-white"
          >
            Submit
          </button>

          <div>
            <ul className="flex space-x-2 md:space-x-5 text-xl md:text-2xl">
              <li>
                <a
                  href={linkedin}
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href={github}
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href={email}
                  target="_blank"
                >
                  <FaEnvelope />
                </a>
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
