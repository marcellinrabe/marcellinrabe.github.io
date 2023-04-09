import {
    FaReact,
    FaNodeJs,
    FaLaravel,
    FaPhp,
    FaPython,
    FaSass,
    FaBootstrap,
    FaGit,
    FaTools,
} from 'react-icons/fa';
import {
    SiFastapi,
    SiCsswizardry,
    SiJavascript,
    SiTailwindcss,
    SiExpress,
    SiMysql,
    SiOracle,
    SiVisualstudiocode,
    SiPycharm,
    SiSqlite,
    SiTypescript,
    SiJquery,
    SiC,
    SiCplusplus,
} from 'react-icons/si';
import { SlScreenDesktop } from 'react-icons/sl';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { TbBrandReactNative, TbWorld, TbDatabase } from 'react-icons/tb';
import { AiOutlineApi } from 'react-icons/ai';

const skillsData = [
    {
        Logo: SiJavascript,
        name: 'Javascript',
        frequentlyUse: true,
        packagesRelatedLogo: [
            SiJavascript,
            FaReact,
            FaNodeJs,
            SiExpress,
            TbBrandReactNative,
            SiTypescript,
            SiJquery,
        ],
        skills: [
            'manipulation <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">DOM</span> et/ou avec <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">jQuery</span>',
            'création du site web Single Page Application avec <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">React</span>',
            'envoie mail côté client avec <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">EmailJS</span>',
            'intégration front-back en utilisant l\'API <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">Fetch</span> ou en utilisant <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">Axios</span>, ou procéder à l\'<span class="inline-block max-w-max bg-slate-200 px-2 rounded">AJAX</span> avec l\'object <span class="inline-block max-w-max bg-slate-200 px-2 rounded">XHR</span> à la main',
            'créer des animations CSS et/ou Javascript relativement complexe (ex: ParticleJS)',
            'création d\'API Rest en utilisant <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">Node.js</span> et <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">Express.js</span>',
            'programmation modulaire en ulisant les syntaxes de l\'<span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">import/export</span>',
            'programmation orientée objet(<span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">POO</span>) et typage fort avec <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">Typescript</span>',
        ],
        topics: [HiOutlineDevicePhoneMobile, TbWorld],
    },
    {
        Logo: FaPhp,
        name: 'PHP 7/8',
        frequentlyUse: true,
        packagesRelatedLogo: [FaPhp, FaLaravel],
        skills: [
            'création de site côté serveur',
            'programmation orientée objet(<span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">POO</span>) , utilisation des  <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">classes</span>, <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">interfaces</span>, ...',
            'conception de site suivant le design-pattern Model-View-Controller(<span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">MVC</span>)',
            'envoie mail côté serveur en utilisant le librairie php  <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">PHPMailer</span> suivant le protocole  <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">SMTP</span>',
            'création de site web avec Laravel 7/10, création d\' <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">API Rest</span> avec  <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">Laravel</span>',
            'utilisation de <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">Laravel</span> avec  <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">React</span>',
        ],
        topics: [TbWorld],
    },
    {
        Logo: SiCsswizardry,
        name: 'CSS3',
        frequentlyUse: true,
        packagesRelatedLogo: [
            SiCsswizardry,
            FaSass,
            FaBootstrap,
            SiTailwindcss,
        ],
        skills: [
            'utilisation préprocesseur css (<span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">sass</span>, <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">scss</span>)',
            'responsive design (<span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">media query</span>)',
            'méthodologie <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">BEM</span> (Block, Element, Modifier)',
            'utilisation des frameworks css <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">Bootstrap</span> et <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">Laravel</span> avec  <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">Tailwind css</span> avec React, Laravel, Vanilla JS',
            'création d\'animation en utilisant <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">@keyframes</span>, ou les bibliothèques d\'animation css tels que <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">aos</span>, <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">anime.css</span>, ...',
        ],
        topics: [TbWorld],
    },
    {
        Logo: FaPython,
        name: 'Créateur de script',
        frequentlyUse: false,
        packagesRelatedLogo: [FaPython, SiFastapi, SiC, SiCplusplus],
        skills: [
            "languages de script pour la résolution d'algorithme relativement complexe",
            'creation d\'application desktop avec une interface graphique <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">GUI</span> avec la libraire Python <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">Tkinter</span>',
            'creation d\'API Rest en utilisant la librarie Python <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">FastAPI</span>',
        ],
        topics: [SlScreenDesktop, AiOutlineApi],
    },
    {
        Logo: TbDatabase,
        name: 'Base des données',
        frequentlyUse: true,
        packagesRelatedLogo: [SiMysql, SiOracle, SiSqlite],
        skills: [
            'Système de Gestion de Base des Données Relationnelles (SGBDR) - <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">MySQL</span> | <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">Oracle</span> | <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">Sqlite</span> (pour les applications hors-ligne)',
            'Connexion à la base des données et manipulation via terminal Linux',
            'Utilisation des outils de gestion de base des données tels que <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">phpmyadmin</span>, <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">Heidisql</span>, <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">dbeaver</span>',
            'Utilisation des reqûetes SQL',
        ],
        topics: [AiOutlineApi, TbDatabase],
    },
    {
        Logo: FaTools,
        name: 'Outils de développement',
        frequentlyUse: false,
        packagesRelatedLogo: [FaGit, SiVisualstudiocode, SiPycharm],
        skills: [
            'Outils de versionnage de fichier : <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">Familles Git</span> (Git, Github, GitLab)',
            'IDE : <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">VS Code</span>, <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">Code::Blocks</span>, <span class="inline-block max-w-max bg-slate-200 px-2 my-1 rounded">PyCharm</span>',
        ],
        topics: [FaTools],
    },
];

export default skillsData;
