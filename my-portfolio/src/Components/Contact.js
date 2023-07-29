import React, { useRef } from "react";
import TitleCard from "./TitleCard";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import ItemNameCard from "./ItemNameCard";
import {
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
  EMAIL_USER_API,
} from "../Utils/Data";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        form.current,
        EMAIL_USER_API
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("Email is Sent ! ✔");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div id="contact" className="bg-slate-50 py-32">
      <TitleCard title="GET IN TOUCH" subTitle="Contact" />
      <div className="flex justify-center pt-7 max-sm:flex-col max-sm:justify-center">
        <div
          id="address-container"
          className="flex  flex-col gap-5 m-4 w-1/4 max-w-[330px] max-sm:w-auto"
        >
          <div>
            <div className="flex cursor-text">
              <ItemNameCard name="ADDRESS" />
              <FontAwesomeIcon icon={faLocationDot} className="p-1 text-xl " />
            </div>
            <ul>
              <li>Espoir Satsukigaoka</li>
              <li>Satsukigaoka, Aoba 13-5</li>
              <li>Yokohama, Kanagawa</li>
            </ul>
          </div>
          <div id="contact">
            <ul>
              <li>
                <a href="tel:+817085368577">
                  <FontAwesomeIcon icon={faPhone} /> +81 70-8536-8577
                </a>
              </li>
              <li>
                <a href="mailto: abhikeshwale@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} /> abhikeshwale@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div id="social-nw">
            <ItemNameCard name="FOLLOW ME" />
            <div className="flex justify-start ">
              <ul className="flex justify-between gap-5 mr-3 ">
              <a href="https://www.linkedin.com/in/abhikesh-wale-59a371a9/">
                <li>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="hover:text-blue-900 cursor-pointer hover:scale-125 hover:font-bold duration-300  text-2xl"
                  />
                </li></a>
                <a href="https://github.com/abhikeshwale/portfolio">      <li>
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="hover:text-orange-500 hover:scale-125 hover:font-bold duration-300 cursor-pointer text-2xl"
                  />
                </li></a>
                <a href="https://www.instagram.com/abhikesh_wale/">   <li>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="hover:text-pink-600 hover:scale-125 hover:font-bold duration-300 cursor-pointer  text-2xl"
                  />
                </li></a>
                <a href="https://www.facebook.com/abhikesh.wale/">  <li>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="hover:text-blue-600 hover:scale-125 hover:font-bold duration-300 cursor-pointer  text-2xl"
                  />
                </li></a>
                <a href="https://twitter.com/home"> <li>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="hover:text-blue-600 hover:scale-125 hover:font-bold duration-300 cursor-pointer text-2xl"
                  />
                </li></a>
              </ul>
            </div>
          </div>
        </div>
        <div
          id="contact-container"
          className=" m-4 w-3/4 max-w-[990px] max-sm:w-auto  p-4 rounded-xl"
        >
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            onSubmit={(values, actions) => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }}
            validate={(values) => {
              const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
              const errors = {};
              if (!values.name) {
                errors.name = "Name Required";
              }
              if (!values.email || !emailRegex.test(values.email)) {
                errors.email = "Valid Email Required";
              }
              if (!values.message) {
                errors.message = "Message Required";
              }
              return errors;
            }}
          >
            {() => (
              <Form className="flex" onSubmit={sendEmail} ref={form}>
                <div className="flex flex-col justify-center gap-4 w-full">
                  <div className="flex justify-between gap-8">
                    <div className="w-1/2">
                      <Field
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name"
                        autoComplete="off"
                        className="border text-xl h-[50px] rounded-md p-2 w-[100%]"
                      />
                      <div className="text-red-500 text-sm italic">
                        <ErrorMessage name="name" />
                      </div>
                    </div>
                    <div className="w-1/2">
                      <Field
                        name="email"
                        placeholder="Email"
                        className="border text-xl h-[50px] rounded-md p-2 w-[100%]"
                      />
                      <div className="text-red-500 text-sm italic">
                        <ErrorMessage name="email" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <Field
                      name="message"
                      placeholder="Your Message..."
                      className="border text-xl rounded-md p-2 w-[100%] min-h-[150px]"
                    />
                    <div className="text-red-500 text-sm italic">
                      <ErrorMessage name="message" />
                    </div>
                  </div>
                  <div className="flex justify-center                  ">
                    <button
                      type="submit"
                      className="border m-1 p-2 text-white h-[45px] w-52 duration-500 rounded-full px-3 bg-emerald-400 hover:bg-emerald-500 hover:shadow-[0 5px 15px rgba(0,0,0,.15)] "
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;