import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import AOS from "aos";
import "aos/dist/aos.css";
import { init, sendForm } from "emailjs-com";
import "./Contact.css";
init("user_2ftAe7bPxBw5F9rxP2T8p");

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState("");
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const form = document.querySelector("#contact-form");

    sendForm("service_lxwmk6r", "template_6ljiams", "#contact-form").then(
      function (response) {
        setStatusMessage("Thank You, Message sent!");
        console.log("SUCCESS!", response.status, response.text);
        form.reset();
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };
  return (
    <div id="info" className="text-center container contact mt-5 pt-5" data-aos="zoom-in">
      <p className="text-info fw-bold">Whats Next?</p>
      <h1 className="text-white">Get In Touch</h1>
      <p className="text-white">
        I'd Love to hear from you . Whether you have a question or just want to
        say hi, fell free to drop a message. I'll try my best to get back to
        you!
      </p>
      <strong className="text-center text-success">{statusMessage}</strong>
      <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          name="name"
          className="p-2 text-gray rounded mt-5"
          id="inputID"
          placeholder="Your Name"
          {...register("name", { required: true })}
        />
        <br />
        {errors.name && (
          <span className="text-danger">Name field is required</span>
        )}
        <input
          name="email"
          type="email"
          className="p-2 text-white rounded"
          id="inputID"
          placeholder="Your Email"
          {...register("email", { required: true })}
        />
        <br />
        {errors.email && (
          <span className="text-danger">Email field is required</span>
        )}
        <textArea
          name="message"
          placeholder="Your Massage"
          id="inputID"
          className=" p-3 mt-3 text-white rounded"
          {...register("message", { required: true })}
        ></textArea>
        <br />
        {errors.message && (
          <span className="text-danger">Please Tell me something</span>
        )}{" "}
        <br />
        <input className="btn-buy py-1 mb-5 text-white" type="submit" />
      </form>
    </div>
  );
};

export default Contact;
