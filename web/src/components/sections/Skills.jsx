
import { MdFavorite } from 'react-icons/md';

import skillsData from '../../datas/skills';

const Card = ({ skill }) => {
    return (
        <div className="carousel carousel--card">
            <div className="flex justify-between mb-4">
                <div>
                    <skill.Logo size={100} className="text-center" />
                </div>
                <div>
                    <div className="flex items-center">
                        {skill.frequentlyUse && (
                            <MdFavorite size={24} className="text-red-500" />
                        )}
                        {skill.topics.map((Each, index) => (
                            <Each key={skill.name[index] + 'topic'} />
                        ))}
                    </div>
                </div>
            </div>
            <div className="md:w-96 md:h-56">
                <ul className="leading-7 list-disc pl-8 pr-2">
                    {skill.skills.map((each, index) => (
                        <li
                            key={index + each}
                            dangerouslySetInnerHTML={{ __html: each }}
                        />
                    ))}
                </ul>
            </div>
            <div className="border flex flex-wrap mt-4 justify-center gap-1 rounded-lg p-2 my-2">
                {skill.packagesRelatedLogo.map((Each, index) => (
                    <Each
                        className="text-gray-500"
                        key={
                            skill.packagesRelatedLogo.length +
                            skill.skills[index]
                        }
                    />
                ))}
            </div>
        </div>
    );
};

export default function Skillv2() {
    return (
           
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {skillsData.map((skill) => (
                    <Card skill={skill} key={skill.name} />
                ))}
            </div>
        </div>
    );
}
