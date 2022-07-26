import React, { useState } from "react";
import useSiteMetadata from '../../../hooks/useSiteMetadata';
import FormInput from "../../utils/FormInput";
import SubmitButton from '../../utils/SubmitButton';
import { ContactContainer, ContactForm } from "./Contact.styles";

const Contact = () => {

    const { email, phoneNum } = useSiteMetadata();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [showErrors, setShowErrors] = useState(false); 

    const inputs = [
        {
            name: 'imie',
            type: 'text',
            placeholder: 'Twoje imię...',
            errorMessage: 'To pole jest wymagane.',
            label: 'Twoje imię',
            required: true,
            maxLength: '50',
        },
        {
            name: 'numer',
            type: 'tel',
            placeholder: 'Twój nr. telefonu...',
            errorMessage: 'Proszę podać poprawny numer telefonu.',
            label: 'Twój nr. telefonu',
            pattern: '^[0-9]{9}$',
            required: true,
            maxLength: '9',
        },
        {
            name: 'email',
            type: 'email',
            placeholder: 'Twój email...',
            errorMessage: 'Proszę podać poprawny adres email.',
            label: 'Twój email',
            required: true,
            maxLength: '50',
        },
        {
            name: 'tytul',
            type: 'text',
            placeholder: 'Tytuł wiadomości...',
            errorMessage: 'To pole jest wymagane.',
            label: 'Tytuł wiadomości',
            required: true,
            maxLength: '50',
        },
        {
            name: 'wiadomosc',
            placeholder: 'Twoja wiadomość...',
            errorMessage: 'To pole jest wymagane.',
            label: 'Twoja wiadomość',
            required: true,
            maxLength: '1000',
            as: 'textarea',
        }
    ];

    const handleSubmit = async e => {
        e.preventDefault();
        if(loading || success) return;
        setLoading(true);
        const formData = new FormData(e.target);
        try{
            await fetch(process.env.GATSBY_CONTACT_ENDPOINT, {
                method: 'post',
                body: formData,
                mode: 'no-cors'
            });
            setSuccess(true);
        }
        catch(error){
            console.error(error);
        }
        setLoading(false);
    }

    const handleButtonClick = e => {
        setShowErrors(true);
    }

    return(
        <ContactContainer id='kontakt'>
            <div>
                <h2>Skontaktuj się!</h2>
                <p>Jeżeli chcesz skorzystać z naszych usług bądź dowiedzieć się więcej na ich temat, skontaktuj się z nami!</p>
                <p>Wykorzystaj formularz by podać nam jak najwięcej informacji, a my odezwiemy się do Ciebie mailowo lub telefonicznie.</p>
                <address>
                    <p>{email}</p>
                    <p>{phoneNum}</p>
                </address>
            </div>
            <ContactForm onInvalid={e => e.preventDefault()} onSubmit={handleSubmit}>
                {inputs.map(input => {
                    const { name } = input;
                    return(
                        <FormInput showError={showErrors} key={name} {...input} />
                    )
                })}
                <SubmitButton onClick={handleButtonClick} disabled={loading} type='submit'>
                    {success ? 'Dziękujemy za wiadomość!' : (
                        <>
                            Wyślij wiadomość
                            <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 10.3785V20.7568L2.46486 19.719C3.76216 19.2001 9.14595 16.9298 14.4649 14.7244C19.7189 12.519 24 10.5731 24 10.3785C24 10.1839 19.7189 8.23792 14.4649 6.03251C9.14595 3.82711 3.76216 1.55684 2.46486 1.03792L0 7.82013e-05V10.3785ZM10.7676 6.61629C15.1784 8.43251 18.8108 10.1839 18.8108 10.3785C18.8108 10.7028 10.1838 14.4001 2.78919 17.319C2.20541 17.5785 1.94595 16.8649 1.94595 15.0487C1.94595 12.519 2.07568 12.3244 4.41081 11.7406C5.70811 11.3514 7.2 11.0271 7.65405 11.0271C8.04324 11.0271 8.43243 10.7028 8.43243 10.3785C8.43243 9.98927 8.04324 9.72981 7.65405 9.72981C7.2 9.72981 5.70811 9.40548 4.41081 9.0163C2.07568 8.43251 1.94595 8.23792 1.94595 5.83792C1.94595 4.41089 2.14054 3.24332 2.33514 3.24332C2.52973 3.24332 6.29189 4.73521 10.7676 6.61629Z" fill="currentColor"/>
                            </svg>
                        </>
                    )}
                </SubmitButton>
            </ContactForm>
        </ContactContainer>
    )
}

export default Contact;