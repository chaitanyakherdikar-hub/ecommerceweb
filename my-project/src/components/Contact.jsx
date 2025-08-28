import React from "react";

const Contact = () => {
  return (
    <div className="contact-page" style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Contact Me</h1>
      <p>If you want to reach out, feel free to connect via:</p>

      <div className="contact-info" style={{ marginTop: "2rem" }}>
        <p>
          📞 Phone: <a href="tel:+917448244252">+91 12345 67890</a>
        </p>
        <p>
          📧 Email: <a href="mailto:chaitanyakherdikar@gmail.com">chaitanyakherdikar@gmail.com</a>
        </p>
        <p>
          📸 Instagram:{" "}
          <a href="https://www.instagram.com/The_Barred_Photographer" target="_blank" rel="noopener noreferrer">
            @The_Barred_Photographer
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
