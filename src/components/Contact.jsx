import React, { useState, useEffect } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { name, email, message } = formData;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    setIsFormValid(name !== "" && isEmailValid && message !== "");
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div
      className="px-6 max-w-[1000px] mx-auto glass grid md:grid-cols-2 place-items-center"
      id="contact"
    >
      <ul className="my-auto pr-6">
        <li>
          <h3 className="text-xl font-bold text-gray-200">Contact</h3>
          <p className="text-gray-400">Mobile: +36 70 236 2034</p>
          <p className="text-gray-400">Email: r.makadi@gmail.com</p>
        </li>

        <li className="flex">
          <a
            href="https://www.linkedin.com/in/rekamakadi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin className="w-[70px] h-auto text-gray-300 transform transition-transform hover:scale-105 hover:shadow-lg" />
          </a>
          <a
            href="https://www.github.com/rekamakadi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="w-[70px] h-auto text-gray-300 transform transition-transform hover:scale-105 hover:shadow-lg" />
          </a>
        </li>
      </ul>
      <form
        action="https://getform.io/f/lajklvob"
        method="POST"
        className="max-w-6xl p-5 md:p-12"
        id="form"
      >
        <input
          type="text"
          id="name"
          placeholder="Your Name ..."
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
          required
        />
        <input
          type="email"
          id="email"
          placeholder="Your Email ..."
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          required
        />
        <textarea
          name="message"
          id="textarea"
          cols="30"
          rows="4"
          placeholder="Your Message ..."
          value={formData.message}
          onChange={handleChange}
          className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4"
          required
        />

        <button
          type="submit"
          className={`w-full transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 mt-6 p-2 bg-gradient-to-r from-[#9333ea] via-[#DE7AFF] to-[#61BAAD] rounded-xl ${!isFormValid ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={!isFormValid}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
