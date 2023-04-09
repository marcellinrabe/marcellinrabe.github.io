import React, { useEffect } from 'react';
import skillsData from '../../datas/skills';

import AOS from 'aos';
import { MdFavorite } from 'react-icons/md';
import LineBreak from '../LineBreak';

const Card = ({ skill }) => {
    return (
        <>
            <div className="grid md:flex flex-wrap">
                <div className="w-full md:w-1/4 md:flex-none">
                    <div className="w-full h-full flex items-center justify-center">
                        <div>
                            <div className="w-100 flex justify-center">
                                <skill.Logo
                                    size={100}
                                    className="text-center"
                                />
                            </div>
                            <div className="border flex flex-wrap gap-1 rounded-lg p-2 my-2">
                                {skill.packagesRelatedLogo.map(
                                    (Each, index) => (
                                        <Each
                                            className="text-gray-500"
                                            key={index ** index}
                                        />
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full font-title flex-auto md:w-1/2 ">
                    <div className="flex justify-between">
                        <div className="text-gray-500">{skill.name}</div>
                        <div className="flex items-center">
                            {skill.frequentlyUse && <MdFavorite size={24} />}
                            {skill.topics.map((Each, index) => (
                                <Each key={index + index * index} />
                            ))}
                        </div>{' '}
                    </div>
                    <div className="border-l-2 border-gray-500">
                        <ul className="leading-7 list-disc">
                            {skill.skills.map((each, index) => (
                                <li
                                    key={index}
                                    dangerouslySetInnerHTML={{ __html: each }}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <LineBreak />
        </>
    );
};

export default function () {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div id="skills" className="relative flex items-center justify-center">
            <div className="container">
                {skillsData.map((each, index) => (
                    <Card skill={each} key={index + index ** 1000} />
                ))}
            </div>
        </div>
    );
}
