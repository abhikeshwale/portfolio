import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        Contact
        <h1>Contact</h1>
        <p>Get in Touch</p>
        <span className="border border-teal-500 w-5"></span>
      </div>
      <div>
        left div
        <div>address</div>
        <div>
          Follow me
          <ul>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>FaceBook</li>
            <li>GitHub</li>
            <li>twitter</li>
            <li>Threads</li>
          </ul>
        </div>
      </div>
      <div>
        right div
        <div>
          <input type="text"></input> <input type="email"></input>
        </div>
        <div>
          <input type="text"></input>
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;