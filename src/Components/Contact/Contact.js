import React from 'react';
import styled from "styled-components";

const ContactsForm = styled.div`
    width: 100vw;
    height: 100vh;
    margin-top: 5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Oswald, sans-serif;


    h2 {
        font-size: 3vh;
        color: #33beb3;
        text-align: center;
    }

    .form-group {
        margin-bottom: 2vw;
    }

    .btn-primary {
        margin-top: 2vw;
        font-weight: bold;
        background-color: #33beb3;

        &:hover {
            background-color: #ffa100;
        }
    }

    form {
        width: 50%;
        height: 100%;
    
       @media(max-width: 1200px) {
            width: 70%;
        }
    }

    @media(max-width: 1200px) {
        margin-top: 20vh;
    }

    @media(max-width: 480px) {
        margin-top: 8vh;
    }
`;
const Contact = () => {
    return (
        <ContactsForm>
            <form>
                <fieldset>
                    <legend>Contacts</legend>
                    <div className="card-header bg-transparent border-0 text-center"><h3>Get In Touch</h3></div>
                    <h2>We'd love to hear your thoughts and be in touch with us</h2>
                    <div className="form-group">
                        <label className="mb-0">Your name<span className="text-danger">*</span></label>
                        <input name="name" type="text" className="form-control" placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <label className="mb-0">Your email<span className="text-danger">*</span></label>
                        <input name="email" type="email" className="form-control" placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <label className="mb-0">Your contact number (Optional)</label>
                        <input name="contact" type="text" className="form-control" placeholder="Contact"/>
                    </div>
                    <div className="form-group">
                        <label className="mb-0">Message<span className="text-danger">*</span></label>
                        <textarea name="message" type="text" className="form-control" placeholder="Message"/>
                    </div>
                    <p className="text-center mb-0">
                        <input type="submit" className="btn btn-primary w-100" value="SEND"/></p>
                </fieldset>
            </form>
        </ContactsForm>
    );
};

export default Contact;