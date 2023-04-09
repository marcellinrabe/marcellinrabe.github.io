/* Package components */
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { HashLoader } from 'react-spinners';
import { CgDanger, CgCheckO } from 'react-icons/cg';
import CodingImg from '../../assets/Coding-bro.png';

/* Custom components */

import SocialLink from '../SocialLink';

export default function Contact() {
    return (
        <div id="contact" className="container">
            <div className="grid lg:grid-cols-2 items-center">
                <div className="w-full">
                    <div className="w-full h-full container">
                        <img src={CodingImg} alt="coding" />
                    </div>
                </div>
                <div className="w-full relative">
                    <form>
                        <div className="grid gap-2">
                            <div className="w-full">
                                <div className="grid grid-cols-2 gap-2">
                                    <div class="relative">
                                        <input
                                            type="text"
                                            id="sender_email"
                                            name="sender_email"
                                            className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                        />
                                        <label
                                            htmlFor="sender_email"
                                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                        >
                                            Adresse email
                                        </label>
                                    </div>
                                    <div class="relative">
                                        <input
                                            type="text"
                                            id="sender_name"
                                            name="sender_name"
                                            className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                        />
                                        <label
                                            htmlFor="sender_name"
                                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                        >
                                            Nom
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="relative">
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="block px-2.5 pb-1.5 pt-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                />
                                <label
                                    htmlFor="subject"
                                    className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                                >
                                    Objet
                                </label>
                            </div>

                            <div className="relative">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Salut Marcellin,
..."
                                ></textarea>
                            </div>
                            <div className="my-2">
                                <button
                                    type="submit"
                                    class="inline-flex items-center py-2.5 px-4 font-medium text-center text-white bg-gray-500 rounded focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-gray-800"
                                >
                                    Envoyer
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
