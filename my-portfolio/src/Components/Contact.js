import React from "react";
import TitleCard from "./TitleCard";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faPaperPlane,
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

const Contact = () => {
  const handleSubmit = () => {
    console.log("submitting form");
  };
  return (
    <div id="contact">
      <TitleCard title="GET IN TOUCH" subTitle="Contact" />
      <div className="flex justify-center  max-sm:flex-col max-sm:justify-center">
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
                <li>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="hover:text-blue-900 cursor-pointer hover:animate-pulse text-2xl"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="hover:text-orange-500 cursor-pointer hover:animate-pulse text-2xl"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="hover:text-pink-600 cursor-pointer hover:animate-pulse text-2xl"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="hover:text-blue-600 cursor-pointer hover:animate-pulse text-2xl"
                  />
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="hover:text-blue-600 cursor-pointer text-2xl"
                  />
                </li>
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
              <Form className="flex">
                <div className="flex flex-col justify-center gap-4 w-full">
                  <div className="flex justify-between gap-8">
                    <div className="w-1/2">
                      <Field
                        name="name"
                        placeholder="Name"
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
                      component="textarea"
                      className="border text-xl rounded-md p-2 w-[100%] min-h-[150px]"
                    />
                    <div className="text-red-500 text-sm italic">
                      <ErrorMessage name="message" />
                    </div>
                  </div>
                  <div className="flex justify-center                  ">
                    <button
                      type="submit"
                      onSubmit={handleSubmit}
                      className="border m-1 p-2 hover:scale-110 duration-75 rounded-full px-3 border-orange-400 hover:border-2 hover:bg-orange-300 hover:border-orange-600 "
                      >
                      Send Message
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        className="hover:animate-bounce"
                      />
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contact;