import { FaGithub } from 'react-icons/fa'
import { SlScreenDesktop } from 'react-icons/sl'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

export default function Project({ publicRepos }) {
    return (
        <div id="project" className="my-5 position-relative">
            <div className="z-999 position-relative">
                <div className="my-5">
                    <h1 className="font-topic fs-1 text-center">
                        Réalisations
                    </h1>
                </div>
                <ResponsiveMasonry columnsCountBreakPoints={{ 320: 2, 992: 3 }}>
                    <Masonry className="gap-3">
                        {publicRepos.map((repo) => (
                            <div
                                data-aos="zoom-in-up"
                                data-aos-once="true"
                                key={repo.id}
                                className="w-100 rounded border border-2 my-2 p-1 bg-white position-relative"
                            >
                                <div className="w-100">
                                    <img
                                        src={repo.metadata.img_preview}
                                        alt="img"
                                        className="w-100 h-100 rounded"
                                    />
                                </div>
                                <div className="position-absolute rounded top-0 start-0 px-2 overlay h-100 text-light">
                                    <div className="d-flex align-items-center h-100">
                                        <div>
                                            <div>
                                                <h3 className="fw-bold font-title text-center fs-5">
                                                    {repo.name}
                                                </h3>
                                            </div>
                                            <div className="flex-grow-1">
                                                <p>{repo.desc}</p>
                                            </div>
                                            <ul className="d-flex p-0 justify-content-around gap-2">
                                                <li>
                                                    <a href={repo.homepage}>
                                                        <SlScreenDesktop />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href={repo.github_url}>
                                                        <FaGithub />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </div>
    )
}
