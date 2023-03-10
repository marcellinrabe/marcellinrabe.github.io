import AboutMeImg from '../assets/about-me.png';
import { BsArrowDownCircle } from 'react-icons/bs';
import SocialLink from '../components/SocialLink';
import { useQuery } from 'react-query';
import ContentLoader from 'react-content-loader';

export default function Profile() {
    const API_URL = 'https://marcellinrabe-portfolio-server.onrender.com';

    const { isLoading, data } = useQuery('data', async () => {
        const serverForm = await fetch(`${API_URL}/user/me`);

        if (!serverForm.ok) throw Error('error when fetching user');

        return serverForm.json();
    });

    if (isLoading) {
        return (
            <ContentLoader viewBox="0 0 380 70">
                <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
                <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
            </ContentLoader>
        );
    }

    return (
        <div id="profile" className="my-5">
            <div className="row">
                <div className="col-lg-6">
                    <div className="w-100 my-3">
                        {data && (
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <div className="profile-img-container">
                                    <img
                                        src={data.avatar_url}
                                        className="rounded-circle avatar position-relative w-75 h-75"
                                        alt="avatar"
                                    />
                                </div>
                            </div>
                        )}
                        <div className="social-links mx-2">
                            <div className="fs-1 text-info my-2 font-topic align-self-start">
                                Développeur web junior
                            </div>
                            <SocialLink />
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div aria-label="img-size-related" className="w-100 h-100">
                        <img
                            src={AboutMeImg}
                            alt="about-me-json"
                            className="w-100 m-auto"
                        />
                        <div
                            className="text-center border border-dark border-2 p-2 my-3"
                            style={{
                                width: 'max-content',
                            }}
                        >
                            {data && (
                                <a
                                    href={data.cv_url}
                                    target="_blank"
                                    className="font-tite"
                                >
                                    Télécharger mon CV <BsArrowDownCircle />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
