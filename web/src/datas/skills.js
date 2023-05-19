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
            'manipulation DOM',
            'conception Single Page Application',
            'envoie mail côté client',
            "création d'interface de programmation (<i>API</i>) , intégration",
            'programmation utilisant les structures avancées : programmation modulaire / POO / programmation typée avec typescript',
        ],
        topics: [HiOutlineDevicePhoneMobile, TbWorld],
    },
    {
        Logo: FaPhp,
        name: 'PHP 7/8',
        frequentlyUse: true,
        packagesRelatedLogo: [FaPhp, FaLaravel],
        skills: [
            ' React / Laravel',
            'programmation modulaire / programmation orientée objet',
            'adoption design-pattern Model-View-Controller (<i>MVC</i>)',
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
            'responsive design',
            'préprocesseur css : <i>sass</i> , <i>scss</i>',
            'méthodologie  BEM (Block, Element, Modifier)',
            'utilisation des frameworks <i>Bootstrap</i> , <i>Tailwind css</>',
        ],
        topics: [TbWorld],
    },
    {
        Logo: FaPython,
        name: 'Créateur de script',
        frequentlyUse: false,
        packagesRelatedLogo: [FaPython, SiFastapi, SiC, SiCplusplus],
        skills: [
            'preference pour les scripts et data programming',
            'interface graphique',
            "creation d'API Rest",
        ],
        topics: [SlScreenDesktop, AiOutlineApi],
    },
    {
        Logo: TbDatabase,
        name: 'Base des données',
        frequentlyUse: true,
        packagesRelatedLogo: [SiMysql, SiOracle, SiSqlite],
        skills: [
            'Gestion de Base des Données Relationnelles (SGBDR) ',
            '<i>MongoDB</i>',
        ],
        topics: [AiOutlineApi, TbDatabase],
    },
    {
        Logo: FaTools,
        name: 'Outils de développement',
        frequentlyUse: false,
        packagesRelatedLogo: [FaGit, SiVisualstudiocode, SiPycharm],
        skills: [
            'Versionnage de fichier : <i>Familles Git</i>',
            'IDE : <i>VS Code</i>, <i>Code::Blocks</i>, <i>PyCharm</i>',
        ],
        topics: [FaTools],
    },
];

export default skillsData;
