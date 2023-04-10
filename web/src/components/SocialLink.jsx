import React from 'react';
import { SiFacebook, SiGithub, SiLinkedin } from 'react-icons/si';

const datas = [
    {
        Component: SiLinkedin,
        href: 'https://www.linkedin.com/in/marcellinrabe/',
    },
    {
        Component: SiGithub,
        href: 'https://www.github.com/marcellinrabe',
    },
    {
        Component: SiFacebook,
        href: 'https://www.facebook.com/marcellinr.rabe',
    },
];

export default function SocialLink() {
    return (
        <ul className="flex justify-center gap-2">
            {datas.map((social, index) => (
                <li key={index + social.href}>
                    <a href={social.href}>
                        {
                            <social.Component className="text-gray-500 hover:text-gray-800" />
                        }
                    </a>
                </li>
            ))}
        </ul>
    );
}
