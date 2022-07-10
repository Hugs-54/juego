import React, { useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import Navigation from './Navigation';
import Footer from './Footer';
import emailjs from '@emailjs/browser';
import Popup from 'reactjs-popup';
import validator from 'validator'

const Contact = () => {

    const [last_name, setLastName] = useState();
    const [first_name, setFirstName] = useState();
    const [email, setEmail] = useState();
    const [emailIsCorrect, setEmailIsCorrect] = useState();
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

    const validateEmail = (e) => {
        var email = e

        if (validator.isEmail(email)) {
            setEmailIsCorrect(true)
            setEmail(email)
        } else {
            setEmailIsCorrect(false)
        }
    }

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
                            <Popup trigger={
                                <input placeholder='Email' className='inputInfo' type="email" name="user_email"
                                    onChange={(e) => validateEmail(e.target.value)} />}
                                on="focus">
                                <SpanEmailCorrect emailIsCorrect={emailIsCorrect} />
                            </Popup>
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

                        <div className='divInfo'>
                            <SpanInfoLastName last_name={last_name} />
                            <SpanInfoFirstName first_name={first_name} />
                            <SpanInfoEmail emailIsCorrect={emailIsCorrect} />
                            <SpanInfoObjet subject={subject} />
                            <SpanInfoMessage message={message} />
                        </div>

                        <div className='divButton'>
                            <Popup trigger={
                                <button className='sendButton' type="submit" value="Envoyer"
                                    disabled={!last_name || !first_name || !email || !subject || !message || !emailIsCorrect}
                                >Envoyer</button>} closeOnDocumentClick modal>
                                <div className='boxConfirmation'>Votre message a bien été envoyé.</div>
                            </Popup>
                        </div>
                    </form>
                </div >
            </div >
            <Footer />
        </div >
    );
};

const SpanEmailCorrect = (props) => {
    if (props.emailIsCorrect) {
        return (
            <div>
                <span className='spanEmailCorrect'>
                    L'adresse email est correcte.
                </span>
            </div>
        );
    } else {
        return (
            <div>
                <span className='spanEmailIncorrect'>
                    L'adresse email est incorrecte.
                </span>
            </div>
        );
    }

};

const SpanInfoLastName = (props) => {
    if (!props.last_name) {
        return (
            <div>
                <span className='spanInfoMsg'>Le nom doit être renseigné.</span>
            </div>
        )
    }
};

const SpanInfoFirstName = (props) => {
    if (!props.first_name) {
        return (
            <div>
                <span className='spanInfoMsg'>Le prénom doit être renseigné.</span>
            </div>
        )
    }
};

const SpanInfoEmail = (props) => {
    if (!props.emailIsCorrect) {
        return (
            <div>
                <span className='spanInfoMsg'>L'adresse email est incorrecte ou non renseignée.</span>
            </div>
        )
    }
};

const SpanInfoObjet = (props) => {
    if (!props.subject) {
        return (
            <div>
                <span className='spanInfoMsg'>L'objet du message doit être renseigné.</span>
            </div>
        )
    }
};

const SpanInfoMessage = (props) => {
    if (!props.message) {
        return (
            <div>
                <span className='spanInfoMsg'>Le message doit être renseigné.</span>
            </div>
        )
    }
};

export default Contact;