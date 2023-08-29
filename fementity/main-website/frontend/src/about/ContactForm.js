import React, { useState } from "react";
import { send } from "emailjs-com";

export default function ContactForm () {
    const [toSend, setToSend] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        message: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault(); /* prevents the page from refreshing after form submission */
        alert(`Form submitted successfully!`)
        /* send([SERVICE ID], [TEMPLATE ID], toSend, [User ID]) */
        send(
            'service_cdirtsj',
            'template_9jno68s',
            toSend,
            'R6E4YZWy9Y3rihUQo'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
    }

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value});
    };

    return (
        <div className="ContactForm">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                    <p>First Name</p>
                    <input 
                        type="text" 
                        id="firstName"
                        name="firstName"
                        value={toSend.firstName}
                        onChange={handleChange}
                        />
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                    <p>Last Name</p>
                    <input 
                        type="text" 
                        id="lastName"
                        name="lastName"
                        value={toSend.lastName}
                        onChange={handleChange}
                        />
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                    <p>Email Address</p>
                    <input 
                        type="email" 
                        id="emailAddress"
                        name="emailAddress"
                        value={toSend.emailAddress}
                        onChange={handleChange}
                        />
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                    <p>Your Message</p>
                    <textarea 
                        id="message"
                        name="message" 
                        rows={5}
                        value={toSend.message}
                        onChange={handleChange}
                        />
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </form>
        </div>
  );
};