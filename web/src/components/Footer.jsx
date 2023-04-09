import React from 'react';
import SocialLink from './SocialLink';

export default function () {
    return (
        <div id="footer" className="container">
            <div className="my-5">
                <div className="site-details grid grid-cols-2 md:grid-cols-4 leading-8">
                    <div>
                        <span className="font-text-lg">Contacts</span>
                        <ul className="p-0 text-gray-600">
                            <li>034 93 946 98</li>
                            <li>marcellinr.rabe@gmail.com</li>
                        </ul>
                    </div>
                    <div>
                        <span className="font-text-lg">En recherche</span>
                        <ul className="p-0 text-gray-600">
                            <li>alternance</li>
                            <li>nouvelle opportunité</li>
                        </ul>
                    </div>
                    <div>
                        <span className="font-text-lg">Plateforme social</span>
                        <ul className="p-0 text-gray-600">
                            <li>Linkedin</li>
                            <li>Facebook</li>
                        </ul>
                    </div>
                </div>
                <div className="grid justify-center my-2">
                    <SocialLink />
                </div>
            </div>

            <div className="text-center my-3 text-gray">
                <span>
                    Copyright © 2023 RABE Marcellin. Tous droits réservés.
                </span>
            </div>
        </div>
    );
}
