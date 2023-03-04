import AboutMeImg from '../assets/about-me.png'
import { BsArrowDownCircle } from 'react-icons/bs'
import SocialLink from '../components/SocialLink'

export default function Profile({ user }) {
    return (
        <div id="profile" className="my-5">
            <div className="row">
                <div className="col-lg-6">
                    <div className="w-100 my-3">
                        {user && (
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <div className="profile-img-container">
                                    <img
                                        src={user.avatar_url}
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
                            {user && (
                                <a
                                    href={user.cv_url}
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
    )
}
