import React, { useState } from 'react';
import { useForm } from '@formspree/react';
import '../styles/contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  // Esto te lo da formspree
  const [state, handleSubmit] = useForm('xoqbjpvd');

  // Ya sé que esto podría haberlo hecho
  // con la lib de formspree o alguna otra
  // Sinceramente quería probar de hacerlo yo jaja
  const handleEmailChange = () => {

  };
  
  return (
    <div>
      <h1 className='title'>Contacto</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input className='text-input' type='text' placeholder='Tu nombre' name='name' required autoComplete='false'/>
        <input className='text-input' type='mail' placeholder='Tu mail' name='email' required autoComplete='false'/>
        <textarea className='text-input' type='text' placeholder='Tu mensaje' name='mensaje' required />
        <button className='send-button' disabled={state.submitting}>Enviar</button>
      </form>
    </div>
  );
}

export default Contact;