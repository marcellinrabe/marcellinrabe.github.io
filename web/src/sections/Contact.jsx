import React, { useRef, useState, useEffect } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import SocialLink from '../components/SocialLink';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { HashLoader } from 'react-spinners';
import { CgDanger, CgCheckO } from 'react-icons/cg';
import { EmptyFormError } from './error.type';

export default function Contact() {
    const form = useRef();

    const initialFormValues = {
        sender_email: '',
        sender_name: '',
        subject: '',
        message: '',
    };

    const initialState = {
        fullOpacity: false,
        firstError: {},
        formValues: initialFormValues,
        errors: {},
    };

    const [state, setState] = useState(initialState);

    const textChangeHandler = (event) => {
        const { name, value } = event.target;

        if (name in state.firstError) {
            applyValidation(event.target);
        }

        setState({
            ...state,
            formValues: {
                ...state.formValues,
                [name]: value,
                last: event.target,
            },
        });
    };

    const setErrorField = (name, value) => {
        let error = null;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (value.trim().length === 0) {
            error = CgDanger;
        } else if (
            name === 'sender_email' &&
            emailRegex.test(value) === false
        ) {
            error = CgDanger;
        }
        setState({ ...state, errors: { ...state.errors, [name]: error } });
    };

    const applyValidation = (target) => {
        const { name, value } = target;

        if (name in state.firstError) {
            setErrorField(name, value);
        }
    };

    const blurHandler = (event) => {
        const { name } = event.target;

        setState({
            ...state,
            firstError: {
                ...state.firstError,
                [name]: true,
                last: event.target,
            },
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        const { sender_name, sender_email, subject, message } = state.errors;

        try {
            if (state.formValues !== initialFormValues) {
                for (let errorField in {
                    sender_name,
                    sender_email,
                    subject,
                    message,
                }) {
                    const errorText = state.errors[errorField];

                    if (errorText !== null) {
                        throw new Error('Il y a un erreur');
                    }
                }

                setState({ ...state, fullOpacity: true });

                emailjs
                    .sendForm(
                        import.meta.env.VITE_EMAILJS_SERVICE_ID,
                        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                        form.current,
                        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
                    )
                    .then(() => {
                        form.current.reset();
                        setState(initialState);
                        toast('email envoyé');
                    });
            } else {
                setState({ ...state, fullOpacity: false });
                throw new EmptyFormError('empty field');
            }
        } catch (error) {
            if (error instanceof EmptyFormError) {
                // throw all error text firsError validation

                const allInput = document.querySelectorAll(
                    '#contact form input, #contact form textarea'
                );

                const allInputObject = Array.from(allInput).reduce(
                    (acc, curr) => {
                        acc[curr.name || curr.id] = true;
                        return acc;
                    },
                    {}
                );

                setState({
                    ...state,
                    firstError: {
                        ...state.firstError,
                        ...allInputObject,
                        allInOne: true,
                    },
                });
            }
        }
    };

    useEffect(() => {
        if (state.formValues.last) {
            applyValidation(state.formValues.last);
        }
    }, [state.formValues]);

    useEffect(() => {
        if (state.firstError.allInOne) {
            for (let errorField in state.firstError) {
                const tag =
                    document.querySelector(`input[name='${errorField}']`) &&
                    errorField !== 'allInOne'
                        ? document.querySelector(`input[name='${errorField}']`)
                        : document.querySelector(
                              `textarea[name='${errorField}']`
                          );
            }
        }
        if (state.firstError.last) {
            applyValidation(state.firstError.last);
        }
    }, [state.firstError]);

    return (
        <div id="contact" className="my-5">
            <div className="my-5">
                <h1 className="font-topic fs-1 text-center">Contact</h1>
            </div>
            <div className="row rounded-5 bg-sky rounded-5 p-3">
                <div className="col-md-6">
                    <div className="w-100 h-100 bg-code-bro"></div>
                </div>
                <div className="col-md-6 p-0 m-0 position-relative">
                    <Form
                        ref={form}
                        className="bg-white rounded-3 p-3 shadow-lg position-relative z-999"
                        onSubmit={sendEmail}
                        onBlur={blurHandler}
                    >
                        <div className="row">
                            <div className="w-full my-2">
                                <div className="row">
                                    <div className="col-6 position-relative">
                                        <FloatingLabel
                                            label="Adresse email"
                                            controlId="email"
                                        >
                                            <Form.Control
                                                type="email"
                                                name="sender_email"
                                                value={state.formValues.email}
                                                onChange={textChangeHandler}
                                                className="ps-4"
                                            />
                                        </FloatingLabel>
                                        <div className="position-absolute top-0 start-0 icon-danger">
                                            {'sender_email' in
                                                state.firstError &&
                                                (state.errors.sender_email !==
                                                null ? (
                                                    <CgDanger
                                                        size={16}
                                                        color={'red'}
                                                    />
                                                ) : (
                                                    <CgCheckO
                                                        size={16}
                                                        color={'#097969'}
                                                    />
                                                ))}
                                        </div>
                                    </div>
                                    <div className="col-6 position-relative">
                                        <FloatingLabel
                                            controlId="name"
                                            label="Nom"
                                        >
                                            <Form.Control
                                                name="sender_name"
                                                type="text"
                                                value={state.formValues.name}
                                                onChange={textChangeHandler}
                                                className="ps-4"
                                            />
                                        </FloatingLabel>
                                        <div className="position-absolute top-0 start-0 icon-danger">
                                            {'sender_name' in
                                                state.firstError &&
                                                (state.errors.sender_name !==
                                                null ? (
                                                    <CgDanger
                                                        size={16}
                                                        color={'red'}
                                                    />
                                                ) : (
                                                    <CgCheckO
                                                        size={16}
                                                        color={'#097969'}
                                                    />
                                                ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-2 position-relative">
                                <FloatingLabel
                                    label="Sujet"
                                    controlId="subject"
                                >
                                    <Form.Control
                                        name="subject"
                                        type="text"
                                        value={state.formValues.subject}
                                        onChange={textChangeHandler}
                                        className="ps-4"
                                    />
                                </FloatingLabel>
                                <div className="position-absolute top-0 start-0 icon-danger">
                                    {'subject' in state.firstError &&
                                        (state.errors.subject !== null ? (
                                            <CgDanger size={16} color={'red'} />
                                        ) : (
                                            <CgCheckO
                                                size={16}
                                                color={'#097969'}
                                            />
                                        ))}
                                </div>
                            </div>

                            <div className="my-2 position-relative">
                                <FloatingLabel
                                    controlId="message"
                                    label="Mes messages"
                                >
                                    <Form.Control
                                        as="textarea"
                                        name="message"
                                        style={{
                                            height: 200,
                                        }}
                                        value={state.formValues.message}
                                        onChange={textChangeHandler}
                                        className="ps-4"
                                    />
                                </FloatingLabel>
                                <div className="position-absolute top-0 start-0 icon-danger">
                                    {'message' in state.firstError &&
                                        (state.errors.message !== null ? (
                                            <CgDanger size={16} color={'red'} />
                                        ) : (
                                            <CgCheckO
                                                size={16}
                                                color={'#097969'}
                                            />
                                        ))}
                                </div>
                            </div>
                            <div className="my-2">
                                <Button
                                    className="w-100 font-title"
                                    variant="primary"
                                    type="submit"
                                >
                                    Envoyer
                                </Button>
                            </div>
                        </div>
                    </Form>
                    <div
                        className={`overlay ${
                            state.fullOpacity ? 'full-opacity' : ''
                        } d-flex justify-content-center align-items-center position-absolute top-0 h-100 w-100 rounded`}
                    >
                        <HashLoader color="#36d7b7" />
                    </div>
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
            <div className="d-flex flex-wrap gap-sm-2 my-1 align-items-center">
                <div
                    className=""
                    style={{
                        fontSize: 12,
                    }}
                >
                    <a href="https://storyset.com/web" target={'_blank'}>
                        Web illustrations by Storyset
                    </a>
                </div>
                <div
                    className=""
                    style={{
                        fontSize: 12,
                    }}
                >
                    <a
                        href="https://www.freepik.com/free-vector/sunset-sunrise-sky-with-pink-clouds-background_6198144.htm#query=cartoon%20sky&position=40&from_view=keyword&track=ais"
                        target={'_blank'}
                    >
                        Image by vectorpouch
                    </a>{' '}
                    on Freepik
                </div>
            </div>
            <div className="d-grid justify-content-end">
                <SocialLink />
            </div>
        </div>
    );
}
