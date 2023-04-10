/* Package components */
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import CodingImg from '../../assets/Coding-bro.png';
import { useQuery } from 'react-query';

export default function Contact() {
    const API_URL = 'https://marcellinrabe-portfolio-server.onrender.com';

    const { data } = useQuery('emaijs_config', async () => {
        const serverForm = await fetch(`${API_URL}/email/config`);

        if (!serverForm.ok)
            throw Error('error when fetching emailjs configuration data');

        return serverForm.json();
    });

    const form = useRef();

    const defaultInputs = {
        sender_email: '',
        sender_name: '',
        subject: '',
        message: '',
    };
    const defaultFormState = {
        sending: false,
        catchError: [],
        inputs: defaultInputs,
    };

    const [formState, setFormState] = useState(defaultFormState);

    const updateFormState = (
        attr,
        target = { name: '', value: '' },
        sending = true
    ) => {
        const { name, value } = target;

        switch (attr) {
            case 'reset':
                setFormState(defaultFormState);
                break;

            case 'form':
                setFormState({
                    ...formState,
                    inputs: {
                        ...formState.inputs,
                        [name]: value,
                    },
                });
                break;

            case 'catchError':
                setFormState({
                    ...formState,
                    catchError: [...new Set(formState.catchError.concat(name))],
                });
                break;

            case 'removeError':
                let catchError = formState.catchError;
                catchError = catchError.filter((error) => error !== name);

                setFormState({
                    ...formState,
                    catchError: catchError,
                });

                break;

            case 'sending':
                setFormState({ ...formState, sending: sending });
                break;
        }
    };

    const updateInput = (event) => {
        catchError(event);
        updateFormState('form', event.target);
    };

    const catchError = (event) => {
        const target = event.target;

        if (event.target.type != 'submit') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const not_conform =
                target.value.trim().length === 0 ||
                (target.name === 'sender_email' &&
                    emailRegex.test(target.value) === false);

            updateFormState(not_conform ? 'catchError' : 'removeError', target);
        }
    };

    const sendEmail = (event) => {
        event.preventDefault();

        try {
            if (
                formState.catchError.length !== 0 ||
                JSON.stringify(formState.inputs) ===
                    JSON.stringify(defaultInputs)
            ) {
                throw Error('error found!');
            }
            updateFormState('sending');

            emailjs
                .sendForm(
                    data.serviceID,
                    data.templateID,
                    form.current,
                    data.publicKey
                )
                .then(() => {
                    form.current.reset();
                    updateFormState('reset');
                    toast('Message envoyée');
                });
        } catch (error) {}
    };

    return (
        <div id="contact" className="container">
            <div className="grid lg:grid-cols-2 items-center">
                <div className="w-full">
                    <div className="w-full h-full container">
                        <img src={CodingImg} alt="coding" />
                    </div>
                </div>
                <div className="w-full relative">
                    <form ref={form} onSubmit={sendEmail} onBlur={catchError}>
                        <div className="grid gap-2">
                            <div className="w-full">
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="sender_email"
                                            name="sender_email"
                                            className={`block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none focus:outline-none focus:ring-0 peer ${
                                                formState.catchError.includes(
                                                    'sender_email'
                                                )
                                                    ? 'dark:text-white dark:border-red-500 border-red-600 dark:focus:border-red-500  focus:border-red-600'
                                                    : 'border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600'
                                            }`}
                                            placeholder=" "
                                            value={
                                                formState.inputs.sender_email
                                            }
                                            onChange={updateInput}
                                        />
                                        <label
                                            htmlFor="sender_email"
                                            className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 bg-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 ${
                                                formState.catchError.includes(
                                                    'sender_email'
                                                )
                                                    ? 'text-red-600 dark:text-red-500 dark:bg-gray-900'
                                                    : 'text-gray-500 dark:text-gray-400 dark:bg-gray-900 peer-focus:text-blue-600 peer-focus:dark:text-blue-500'
                                            }`}
                                        >
                                            Adresse email
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="sender_name"
                                            name="sender_name"
                                            className={`block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none focus:outline-none focus:ring-0 peer ${
                                                formState.catchError.includes(
                                                    'sender_name'
                                                )
                                                    ? 'dark:text-white dark:border-red-500 border-red-600 dark:focus:border-red-500  focus:border-red-600'
                                                    : 'border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600'
                                            }`}
                                            placeholder=" "
                                            value={formState.inputs.sender_name}
                                            onChange={updateInput}
                                        />
                                        <label
                                            htmlFor="sender_name"
                                            className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 bg-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 ${
                                                formState.catchError.includes(
                                                    'sender_name'
                                                )
                                                    ? 'text-red-600 dark:text-red-500 dark:bg-gray-900'
                                                    : 'text-gray-500 dark:text-gray-400 dark:bg-gray-900 peer-focus:text-blue-600 peer-focus:dark:text-blue-500'
                                            }`}
                                        >
                                            Nom
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className={`block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none focus:outline-none focus:ring-0 peer ${
                                        formState.catchError.includes('subject')
                                            ? 'dark:text-white dark:border-red-500 border-red-600 dark:focus:border-red-500  focus:border-red-600'
                                            : 'border-gray-300  dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600'
                                    }`}
                                    placeholder=" "
                                    value={formState.inputs.subject}
                                    onChange={updateInput}
                                />
                                <label
                                    htmlFor="subject"
                                    className={`absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 bg-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 ${
                                        formState.catchError.includes('subject')
                                            ? 'text-red-600 dark:text-red-500 dark:bg-gray-900'
                                            : 'text-gray-500 dark:text-gray-400 dark:bg-gray-900 peer-focus:text-blue-600 peer-focus:dark:text-blue-500'
                                    }`}
                                >
                                    Objet
                                </label>
                            </div>

                            <div className="relative">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Salut Marcellin,
                                    
..."
                                    value={formState.inputs.message}
                                    onChange={updateInput}
                                ></textarea>
                            </div>
                            <div className="my-2">
                                <button
                                    type="submit"
                                    className={`inline-flex items-center py-2.5 px-4 font-medium text-center text-white bg-gray-500 rounded focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-gray-800  disabled:opacity-50`}
                                    disabled={
                                        formState.catchError.length > 0
                                            ? true
                                            : false
                                    }
                                >
                                    {formState.sending && (
                                        <svg
                                            aria-hidden="true"
                                            role="status"
                                            class="inline w-4 h-4 mr-3 text-white animate-spin"
                                            viewBox="0 0 100 101"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="#E5E7EB"
                                            />
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    )}
                                    {formState.sending ? 'en cours' : 'Envoyer'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* freepik attribution for free-case use */}
            <div className="flex flex-wrap sm:gap-2 my-1 items-center">
                <div className="text-sm">
                    <a href="https://storyset.com/web" target={'_blank'}>
                        Web illustrations by Storyset
                    </a>
                </div>
            </div>
        </div>
    );
}
