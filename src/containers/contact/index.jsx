import React, { useState } from "react"; // Add destructuring to import useState
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";

// import 'react-toastify/dist/ReactToastify.css';
import "./styles.scss";

const Contact = () => {
  const messagevalues = { name: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(messagevalues); // Change useFormvalues to setFormValues

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value }); // Use spread operator to preserve other form values
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendDataToBackend();
  };

  const sendDataToBackend = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v2/message/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      if (!response.ok) {
        throw new Error("Failed to save data");
      } else {
        console.log("Data sent successfully");
        // toast('Message Sent');
        // Optionally show a success message or perform any other action here.
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };
const handleContact = () => {
//  toast("message received")
 alert("message received")
};
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form className="contact__content__form" onSubmit={handleSubmit}>
            {/* Rest of the JSX code */}
            <div className="contact__content__form__controlswrapper">
              <div>
                <input
                  required
                  name="name"
                  className="inputName"
                  type={"text"}
                  value={formValues.name}
                  onChange={handleChange}
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type={"text"}
                  value={formValues.email}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>
              <div>
                <textarea
                  required
                  name="message" // Change "description" to "message"
                  className="inputDescription"
                  type={"text"}
                  rows="5"
                  value={formValues.message}
                  onChange={handleChange}
                />
                <label htmlFor="message" className="descriptionLabel"> {/* Change "description" to "message" */}
                  Description
                </label>
              </div>
            </div>
            <button type="submit" onClick={handleContact}>Submit</button> 
          </form>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
