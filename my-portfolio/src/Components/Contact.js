import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center items-center border border-red-900">
          <h1 className="text-8xl opacity-5 relative">GET IN TOUCH</h1>
          <p className="absolute mt-6 mb-6 text-4xl ">Contact</p>
          <span className="border absolute mt-10    border-teal-500 w-20"></span>
        </div>

        <div>
          left
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          right
          <form>
            <h1>SEND ME A NOTE</h1>
            <div>
              <input></input>
            </div>
            <button> </button>
          </form>
        </div>
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