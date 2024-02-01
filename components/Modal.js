import styles from "../styles/Modal.module.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function modal(props) {
  const [error, setError] = useState("");
  const [hasSend, setHasSend] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setHasSend("");
    emailjs
      .sendForm(
        "service_gy6o74q",
        "template_8lmdtin",
        form.current,
        "8E2wMpaVXXdBMw4zk"
      )
      .then(
        (result) => {
          setError("");
          setHasSend("Your message has been send !");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className={styles.formulaire}>
        <div className={styles.inputs}>
          <div className={styles.input}>
            <label className={styles.label}>Name</label>
            <input placeholder="Name" name="Name"  />
          </div>
          <div className={styles.input}>
            <label className={styles.label}>Family name</label>
            <input placeholder="Familyname" name="Familyname" />
          </div>
          <div className={styles.input}>
            <label className={styles.label}>Email address</label>
            <input
              type="email"
              placeholder="Email address"
              name="Email"
            />
          </div>
          <div className={styles.input}>
            <label className={styles.label}>Phone number</label>
            <input placeholder="Phone number" name="number" />
          </div>
          <div className={styles.msg}>
            <label className={styles.label}>Message</label>
            <textarea placeholder="Message" name="message" />
          </div>
        </div>
        <div className={styles.btns}>
          <button type="submit" value="Send" className={styles.btn}>
            Send
          </button>
          <button className={styles.btn} onClick={props.closeWindow}>
            Close
          </button>
        </div>
        <p>{hasSend}</p>
      </div>
    </form>
  );
}

export default modal;
