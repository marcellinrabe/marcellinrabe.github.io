import {
    FaReact,
    FaNodeJs,
    FaLaravel,
    FaHtml5,
    FaPhp,
    FaPython,
    FaSass,
    FaBootstrap,
    FaGit,
} from 'react-icons/fa'
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
} from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

export default [
    {
        title: 'Client-side',
        skillNode: [
            {
                Component: FaReact,
                color: '#61DBFB',
            },
            {
                Component: FaHtml5,
                color: '#F06529',
            },
            {
                Component: SiCsswizardry,
                color: '#264de4',
            },
            {
                Component: SiJavascript,
                color: '#F0DB4F',
            },
            {
                Component: FaSass,
                color: '#CD6799',
            },
            {
                Component: FaBootstrap,
                color: '#563d7c',
            },
            {
                Component: SiTailwindcss,
                color: '#8465c9',
            },
        ],
    },
    {
        title: 'Server-side / Script',
        skillNode: [
            { Component: FaPhp, color: '#8993be' },
            {
                Component: FaLaravel,
                color: '#fb503b',
            },
            { Component: FaPython, color: '#f9b233' },
        ],
    },
    {
        title: 'API',
        skillNode: [
            { Component: SiFastapi, color: '#808080' },
            {
                Component: FaNodeJs,
                color: '#68a063',
            },
            {
                Component: SiExpress,
                color: '#68a063',
            },
            {
                Component: FaLaravel,
                color: '#fb503b',
            },
        ],
    },
    {
        title: 'Mobile / Desktop',
        skillNode: [
            {
                Component: TbBrandReactNative,
                color: '#f0f',
            },
            {
                Component: FaPython,
                color: '#f9b233',
            },
            {
                Component: 'Tkinter',
                backgroundColor: '#f9b233',
                color: '#306998',
            },
        ],
    },
    {
        title: 'Database / CMS',
        skillNode: [
            {
                Component: SiMysql,
                color: '#00758F',
            },
            {
                Component: SiOracle,
                color: '#F80102',
            },
            {
                Component: 'Sanity',
                color: 'white',
                backgroundColor: 'red',
            },
            {
                Component: SiSqlite,
                color: '#add8e6',
            },
        ],
    },
    {
        title: 'Tools',
        skillNode: [
            {
                Component: FaGit,
                color: '#000',
            },
            {
                Component: SiVisualstudiocode,
                color: '#0078d7',
            },
            {
                Component: SiPycharm,
                color: 'black',
            },
        ],
    },
]
