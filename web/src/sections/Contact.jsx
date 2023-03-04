import React, { useRef } from 'react'
import { Form, FloatingLabel, Button } from 'react-bootstrap'
import SocialLink from '../components/SocialLink'

export default function Contact() {
    const form = useRef()

    return (
        <div id="contact" className="my-5">
            <div className="my-5">
                <h1 className="font-topic fs-1 text-center">Contact</h1>
            </div>
            <div className="row rounded-5 bg-sky rounded-5 p-3">
                <div className="col-md-6">
                    <div className="w-100 h-100 bg-code-bro"></div>
                </div>
                <div className="col-md-6 p-0 m-0">
                    <Form className="bg-white rounded-3 p-3 shadow-lg">
                        <div className="row">
                            <div className="w-full my-2">
                                <div className="row">
                                    <div className="col-6">
                                        <FloatingLabel
                                            label="Adresse email"
                                            controlId="email"
                                        >
                                            <Form.Control
                                                type="email"
                                                name="sender_email"
                                                placeholder="marcellinr.rabe@gmail.com"
                                            />
                                        </FloatingLabel>
                                    </div>
                                    <div className="col-6">
                                        <FloatingLabel
                                            controlId="name"
                                            label="Nom"
                                        >
                                            <Form.Control
                                                name="sender_name"
                                                type="text"
                                                placeholder="nom"
                                            />
                                        </FloatingLabel>
                                    </div>
                                </div>
                            </div>
                            <div className="my-2">
                                <FloatingLabel
                                    label="Sujet"
                                    controlId="subject"
                                >
                                    <Form.Control
                                        name="sender_email"
                                        type="text"
                                        placeholder="sujet"
                                    />
                                </FloatingLabel>
                            </div>

                            <div className="my-2">
                                <FloatingLabel
                                    controlId="message"
                                    label="Mes messages"
                                >
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{
                                            height: 200,
                                        }}
                                    />
                                </FloatingLabel>
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
                </div>
            </div>
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
    )
}
