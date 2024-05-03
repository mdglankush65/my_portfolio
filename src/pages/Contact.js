import React from 'react';
import emailjs from 'emailjs-com';
import resumeUrl from '../images/Ankush_Resume.pdf'

const styles = {
    card: {
        marginTop: '100px',
        width: '80%',
        border: '0px',
        // backgroundColor: 'transparent',
        filter: 'opacity(0.95)',
        borderRadius: '15px',
    },
    box: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    show: {
        display: 'block'
    },
    hide:
    {
        display: 'none'
    },

};

const USER_ID = 'service_l831cun';
const TEMPLATE_ID = 'template_ti2ucqn';

emailjs.init('pJdwLmGYesp4biek0');

export default function Contact() {
    function helper(e) {
        // Wait for the DOM to fully load before executing the script
        document.addEventListener('DOMContentLoaded', function () {

            // Function to check if an email is valid
            function isValidEmail(email) {
                const regex = /.+@.+\..+/;
                return regex.test(email);
            }

            // Event listener for the 'Send Message' button click
            const sendButton = document.querySelector('.btn-dark.mt-2'); // Adjust the selector as needed
            sendButton.addEventListener('click', function () {
                const formControls = document.querySelectorAll('.form-control');
                let allValid = true;
                let emailValid = true;

                // Selectors for various elements
                const emailInput = document.getElementById('email');
                const validFeedback = document.querySelector('.valid');
                const sendMessage = document.getElementById('sendmessage');
                const formCard = document.getElementById('formcard');

                // Iterate through each form control to validate
                formControls.forEach((control) => {
                    if (!control.value) {
                        allValid = false;
                        control.className = 'form-control is-invalid';
                    } else if (emailInput && !isValidEmail(emailInput.value)) {
                        emailValid = false;
                        emailInput.className = 'form-control is-invalid';
                        if (validFeedback) validFeedback.textContent = 'Invalid Email 👎';
                    } else {
                        control.className = 'form-control is-valid';
                    }
                });

                // Display feedback based on the form validation
                if (allValid && emailValid) {
                    if (validFeedback) validFeedback.textContent = '';
                    if (sendMessage) sendMessage.style.display = "block";
                    if (formCard) formCard.style.display = 'none';
                } else if (!allValid) {
                    if (validFeedback) validFeedback.textContent = 'Form Incomplete 😔';
                } else if (!emailValid) {
                    if (validFeedback) validFeedback.textContent = 'Please check the email field.';
                    formControls.forEach((control) => {
                        control.className = 'form-control is-valid';
                    });
                    if (emailInput) emailInput.className = 'form-control is-invalid';
                }
            });
        });

    }
    function handleSubmit(event) {
        event.preventDefault();
        emailjs.sendForm(USER_ID, TEMPLATE_ID, event.target)
            .then((result) => {
                // Handle successful form submission
                console.log(result.text);
                setTimeout(() => {
                    window.location.href = "/react-portfolio"; // redirect after 5 seconds
                }, 5000); 
            }, (error) => {
                // Handle form submission error
                console.log(error.text);
            });
    }
    return (
        <div id='contact'>
            <section style={styles.card} className='card mx-auto mb-5 bg-none rounded-lg'>

                <div style={styles.box}>
                    <div className="col-lg-6 d-flex align-items-stretch">
                        <div className="info-wrap p-4 w-100 infobackground mx-auto my-auto">
                            <div className="dbox w-100 d-flex align-items-start">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-map-marker"></span>
                                </div>
                                <div className="text pl-4">
                                    <p><span>Address:</span>New Vidya Nagar, Bhiwani, Haryana(127021)</p>
                                </div>
                            </div>
                            <div className="dbox w-100 d-flex align-items-start">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-phone"></span>
                                </div>
                                <div className="text pl-4">
                                    <p><span>Phone:</span> <a href="tel:8307874565">+91-8307874565</a></p>
                                </div>
                            </div>
                            <div className="dbox w-100 d-flex align-items-start">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-paper-plane"></span>
                                </div>
                                <div className="text pl-4">
                                    <p><span>Email:</span> <a href="mailto:mdglankush565@gmail.com">mdglankush565@gmail.com</a></p>
                                </div>
                            </div>
                            <div className="dbox w-100 d-flex align-items-start">
                                <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-globe"></span>
                                </div>
                                <div className="text pl-4">
                                    <p><span>Resume:</span> <a href={resumeUrl} rel='noreferrer' target="_blank" download="Ankush_Resume.pdf"> Resume</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="containerBox bg-white text-center">
                        <h1 className='text-center'>Contact</h1>
                        <div className="row">
                        </div>
                        <div style={styles.hide} id="sendmessage">Your message has been sent. Thank you!</div>
                        <div className="row">
                            <div className=" mx-auto" id='formcard'>
                                <div className="form">
                                    {/* <div id="errormessage"></div> */}
                                    <form onSubmit={handleSubmit} method="post" role="form" className="contactForm">
                                        <div className="form-group">
                                            <input type="text" name="from_name" className="form-control mb-1" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" required />
                                            <div className="validation"></div>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control mb-1" name="from_email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" required />
                                            <div className="validation"></div>
                                        </div>
                                        <div className="form-group">
                                            <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please leave a messege" placeholder="Message" required></textarea>
                                            <div className="validation"></div>
                                        </div>
                                        <div className="text-center">
                                            <button onClick={helper} className="btn btn-dark mt-2">
                                                Send Message
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div></div>
            </section>
        </div>

    );
}