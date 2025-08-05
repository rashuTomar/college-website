import React from "react";
import "./Contact.css";
import msg from "../assets/msg_icon.png";
import email from "../assets/email_icon.png";
import phone from "../assets/phone_icon.png";
import location from "../assets/location_icon.png";
import arrow from '../assets/white-arrow.png'

export default function Contact() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7ebce132-ea64-490f-9908-41c1fe4a4f29");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
};
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, non. Nisi
          iusto nulla corrupti modi accusamus veritatis. Sed magnam totam alias.
          Amet accusamus dignissimos iure quisquam dolor architecto pariatur
          incidunt!
        </p>
        <ul>
          <li>
            {" "}
            <img src={email} alt="" />
            info@abes.ac.in
          </li>
          <li>
            {" "}
            <img src={phone} alt="" />
            +91xxxxxxxxx
          </li>
          <li>
            {" "}
            <img src={location} alt="" />
            19th KM Stone NH-09 Ghaziabad (UP) PIN - 201009
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label htmlFor="">Your name</label>
            <input type="text" name="name"  placeholder="Enter your name" required/>

            <label htmlFor="">Phone Number</label>
            <input type="tel" name="phone"  placeholder="Enter your mobile no." required/>

            <label htmlFor="">Write your messages here</label>
            <textarea name="message" rows="6" placeholder="Enter yout text "  required></textarea>

            <button type="submit" className="btn dark-btn submit">Submit Now <img src={arrow} alt="" /></button>

        </form>
        <span> {result}</span>

      </div>
    </div>
  );
}
