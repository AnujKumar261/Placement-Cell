import React from 'react';
import emailjs from 'emailjs-com';

const Notification = () => {
    const sendEmail = () => {
        emailjs.sendForm(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            '#contact-form',
            'YOUR_USER_ID'
        )
        .then((result) => {
            console.log(result.text);
            alert('Email sent successfully!');
        }, (error) => {
            console.log(error.text);
            alert('Failed to send email. Please try again later.');
        });
    };

    return (
        <div style={{
            backgroundColor: '#e6dcdc',
            padding: '40px 20px',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <h1 style={{
                color: '#333',
                fontSize: '36px',
                marginBottom: '30px',
                fontWeight: 'bold',
            }}>
                Contact Us
            </h1>
            <div style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                padding: '30px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                width: '100%',
                maxWidth: '500px',
            }}>
                <form id="contact-form">
                    <div style={{ marginBottom: '20px' }}>
                        <label
                            htmlFor="name"
                            style={{
                                fontSize: '16px',
                                fontWeight: 'bold',
                                color: '#555',
                                display: 'block',
                                marginBottom: '2px'  // Added 2px margin here
                            }}
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your Name"
                            style={{
                                width: '100%',
                                padding: '10px',
                                fontSize: '16px',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                outline: 'none',
                                boxSizing: 'border-box',
                                transition: 'border-color 0.3s ease',
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label
                            htmlFor="email"
                            style={{
                                fontSize: '16px',
                                fontWeight: 'bold',
                                color: '#555',
                                display: 'block',
                                marginBottom: '2px'  // Added 2px margin here
                            }}
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your Email"
                            style={{
                                width: '100%',
                                padding: '10px',
                                fontSize: '16px',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                outline: 'none',
                                boxSizing: 'border-box',
                                transition: 'border-color 0.3s ease',
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label
                            htmlFor="contact-number"
                            style={{
                                fontSize: '16px',
                                fontWeight: 'bold',
                                color: '#555',
                                display: 'block',
                                marginBottom: '2px'  // Added 2px margin here
                            }}
                        >
                            Contact Number
                        </label>
                        <input
                            type="text"
                            id="contact-number"
                            name="contact-number"
                            placeholder="Enter your Contact number"
                            style={{
                                width: '100%',
                                padding: '10px',
                                fontSize: '16px',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                outline: 'none',
                                boxSizing: 'border-box',
                                transition: 'border-color 0.3s ease',
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label
                            htmlFor="subject"
                            style={{
                                fontSize: '16px',
                                fontWeight: 'bold',
                                color: '#555',
                                display: 'block',
                                marginBottom: '2px'  // Added 2px margin here
                            }}
                        >
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Enter your Subject"
                            style={{
                                width: '100%',
                                padding: '10px',
                                fontSize: '16px',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                outline: 'none',
                                boxSizing: 'border-box',
                                transition: 'border-color 0.3s ease',
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label
                            htmlFor="message"
                            style={{
                                fontSize: '16px',
                                fontWeight: 'bold',
                                color: '#555',
                                display: 'block',
                                marginBottom: '2px'  // Added 2px margin here
                            }}
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Enter your Message"
                            cols="31"
                            rows="4"
                            style={{
                                width: '100%',
                                padding: '10px',
                                fontSize: '16px',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                outline: 'none',
                                boxSizing: 'border-box',
                                transition: 'border-color 0.3s ease',
                            }}
                        ></textarea>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <button
                            type="button"
                            style={{
                                width: '100%',
                                fontSize: '18px',
                                backgroundColor: '#4CAF50',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s ease',
                            }}
                            onMouseEnter={(e) => (e.target.style.backgroundColor = '#45a049')}
                            onMouseLeave={(e) => (e.target.style.backgroundColor = '#4CAF50')}
                            onClick={sendEmail}
                        >
                            Send Email
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Notification;
