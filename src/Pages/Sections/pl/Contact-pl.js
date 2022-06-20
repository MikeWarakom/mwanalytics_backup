import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Result = () => {
  return (
      <p className="pl-2 text-sm md:text-l text-zinc-300">
          Twoja wiadomość została wysłana.
      </p>
  )
}

const verifier = process.env.REACT_APP_EMAILJS_API
const template = process.env.REACT_APP_EMAILJS_TEMPLATE
const service = process.env.REACT_APP_EMAILJS_SERVICE

const ContactEN = ({...otherProps}) => {

  const [result, showResult] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(service, template, form.current, verifier)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      form.current.reset();
      showResult(true);
      }
            
  return (
        <section id="contact" className="font-body flex flex-col justify-center w-full h-max">
          <h1 className="md:text-8xl text-7xl text-gray-800 md:text-right text-center font-body">
          Napisz
          </h1>
            <div className="flex justify-center text-3xl  pl-10 mt-20 mb-5 md:mt-5  w-full m-auto ">
              <form className="md:w-1/2 w-2/3" ref={form} onSubmit={sendEmail}>
                <label>  
                Imię i Nazwisko
                </label>
                <input className="  text-xl bg-transparent w-full h-8 mb-5" type="text" name="fullName" required />
                <label>
                Email
                </label>
                <input className="  text-xl bg-transparent w-full h-8 mb-5" type="text" name="email" required />
                <label>
                Wiadomość
                </label>
                <textarea rows="3" className="pt-2  text-xl bg-transparent w-full h-36 mb-5 form-control"name="message" required/>
                <div className="w-full text-center m-auto text-4xl ">
                    <button className="button transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
                        Wyślij
                    </button>
                    <h3>{result ? <Result/> : null }</h3>  
                </div>
              </form>                          
            </div>
        </section>
    );
  }


export default ContactEN;