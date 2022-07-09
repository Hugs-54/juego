import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from './Navigation';
import Footer from './Footer';
import emailjs from '@emailjs/browser';
import Popup from 'reactjs-popup';

const Contact = () => {

    const [last_name, setLastName] = useState();
    const [first_name, setFirstName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_e01f3mo", "template_nvaeqxe", form.current, "Ls4q2d2xbRHaXMIvW")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <Helmet>
                <title>Ju&Go | Contact</title>
            </Helmet>
            <Navigation />
            <div className='divAll'>
                <div className='divTitle'>
                    <h1 className='titleContact'>Vous avez une question, une demande ou vous souhaitez rentrer en relation avec nous ?</h1>
                    <h1 className='titleContact'>Contactez-nous via le formulaire ci-dessous.</h1>
                </div>
                <div className='divContact'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='divInfo'>
                            <div className='divInline'>
                                <h2>Nom</h2>
                                <h2 className='labelStar'>*</h2>
                            </div>
                            <input placeholder='Nom' className='inputInfo' type="text" name="last_name"
                                onChange={(e) => setLastName(e.target.value)} />
                        </div>

                        <div className='divInfo'>
                            <div className='divInline'>
                                <h2>Prénom</h2>
                                <h2 className='labelStar'>*</h2>
                            </div>
                            <input placeholder='Prénom' className='inputInfo' type="text" name="first_name"
                                onChange={(e) => setFirstName(e.target.value)} />
                        </div>

                        <div className='divInfo'>
                            <div className='divInline'>
                                <h2>Adresse email</h2>
                                <h2 className='labelStar'>*</h2>
                            </div>
                            <input placeholder='Email' className='inputInfo' type="email" name="user_email"
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className='divInfo'>
                            <div className='divInline'>
                                <h2>Objet du message</h2>
                                <h2 className='labelStar'>*</h2>
                            </div>
                            <input placeholder='Objet' className='inputInfo' type="text" name="subject"
                                onChange={(e) => setSubject(e.target.value)} />
                            {/*<select name="subject">
                                <option value="">----</option>
                                <option value="Question">Question</option>
                                <option value="Mise en relation">Mise en relation</option>
                                <option value="Autre demande">Autre demande</option>
                            </select>*/}
                        </div>

                        <div className='divInfo'>
                            <div className='divInline'>
                                <h2>Message</h2>
                                <h2 className='labelStar'>*</h2>
                            </div>
                            <textarea placeholder='Renseignez votre message ici.' name="message"
                                onChange={(e) => setMessage(e.target.value)} />
                        </div>

                        <div className='divInfo'>
                            <label className='labelStar'>*champs obligatoires</label>
                        </div>

                        <div className='divButton'>
                            <Popup trigger={
                                <button className='sendButton' type="submit" value="Envoyer"
                                    disabled={!last_name || !first_name || !email || !subject || !message}
                                >Envoyer</button>} closeOnDocumentClick modal>
                                <div className='boxConfirmation'>Votre message a bien été envoyé.</div>
                            </Popup>
                        </div>
                    </form>
                </div >
            </div>
            <Footer />
        </div >
    );
};

export default Contact;