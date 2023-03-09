import React from 'react';
import { SiFacebook, SiGithub, SiLinkedin } from 'react-icons/si';

const datas = [
    {
        Component: SiLinkedin,
        href: 'https://www.linkedin.com/in/marcellinrabe/',
        color: '#0072b1',
    },
    {
        Component: SiGithub,
        href: 'https://www.github.com/marcellinrabe',
        color: '#333',
    },
    {
        Component: SiFacebook,
        href: 'https://www.facebook.com/rabemarcellin',
        color: '#1877f2',
    },
];

export default function SocialLink() {
    return (
        <ul className="social-link">
            {datas.map((social, index) => (
                <li key={index + social.href}>
                    <a href={social.href}>
                        {<social.Component color={social.color} />}
                    </a>
                </li>
            ))}
        </ul>
    );
}
