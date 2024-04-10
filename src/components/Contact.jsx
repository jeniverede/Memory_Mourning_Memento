import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import '../components-styles/ContactStyle.css';

export function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_wwyv5zh',
            'template_c7bsi1p',
            form.current,
            'HtmyPQfWiVNNlPvPF')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <>
            <section className='form_container'>
                <h2 className="secondary-text-bold-dark">Get in touch!</h2>
                <form className="form" ref={form} onSubmit={sendEmail}>
                    <label className="secondary-text-bold-accent">Name</label>
                    <input className="secondary-text-reg-dark" type="text" name="Name" />
                    <label className="secondary-text-bold-accent">Email</label>
                    <input className="secondary-text-reg-dark" type="email" name="Email" />
                    <label className="secondary-text-bold-accent">Message</label>
                    <textarea className="secondary-text-reg-dark" name="Message" />
                    <input type="submit" value="Send message" />
                </form>
            </section>
        </>
    );
}