import { FaGithub } from 'react-icons/fa';
import { SlScreenDesktop } from 'react-icons/sl';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { useQuery } from 'react-query';
import ContentLoader from 'react-content-loader';
import LineBreak from '../LineBreak';

export default function Project() {
    const API_URL = 'https://marcellinrabe-portfolio-server.onrender.com';

    const { isLoading, isSuccess, error, data } = useQuery(
        'public_repos',
        async () => {
            const serverForm = await fetch(`${API_URL}/public-repos/`);

            if (!serverForm.ok) throw Error('error when fetching public repos');

            return serverForm.json();
        }
    );

    return (
        <div id="project" className="relative container">
            <div className="my-2">datas from github</div>
            <div className="grid md:grid-cols-2 gap-4">
                {isLoading ? (
                    <ContentLoader viewBox="0 0 380 70">
                        <rect
                            x="0"
                            y="0"
                            rx="5"
                            ry="5"
                            width="70"
                            height="70"
                        />
                        <rect
                            x="80"
                            y="17"
                            rx="4"
                            ry="4"
                            width="300"
                            height="13"
                        />
                        <rect
                            x="80"
                            y="40"
                            rx="3"
                            ry="3"
                            width="250"
                            height="10"
                        />
                    </ContentLoader>
                ) : (
                    data.map((repo) => (
                        <div key={repo.id} className="h-[50vh]">
                            <div className="h-full w-full transition duration-300 ease-in-out hover:shadow-lg border rounded p-2 flex items-center justify-center">
                                <div>
                                    <div className="flex items-center pb-2 justify-between">
                                        <div className="font-text-lg">
                                            {repo.name}
                                        </div>
                                        <div>
                                            <a href={repo.github_url}>
                                                <FaGithub size={24} />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex bg-slate-200 p-2 rounded justify-center">
                                        <a href={repo.homepage}>
                                            {repo.homepage}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <LineBreak />
        </div>
    );
}
