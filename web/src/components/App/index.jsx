import { defer, useLoaderData, Await } from 'react-router-dom';
import { Suspense } from 'react';
import ContentLoader from 'react-content-loader';

import NavBar from '../NavBar';
import IconThemeProvider from '../../themes/IconsTheme';
import { Profile, Project, Skills, Contact } from '../../sections';
import './index.css';

import 'react-toastify/dist/ReactToastify.css';

import { BarLoader } from 'react-spinners';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

// aos library css
import 'aos/dist/aos.css';
import axios from 'axios';
import Footer from '../Footer';

export async function loader() {
    // Define the URL of your server's API endpoint
    const API_URL = 'https://marcellinrabe-portfolio-server.onrender.com';

    const [userFromServer, publicRepos] = await Promise.all([
        axios.get(`${API_URL}/user/me`).then((res) => res.data),
        axios.get(`${API_URL}/public-repos`).then((res) => res.data),
    ]);

    return defer({
        user: userFromServer,
        publicRepos: publicRepos,
    });
}
/**
 *
 * @components IconThemeProvider - apply custom config to icon from "react-icons" library
 * @returns jsx
 */
function App() {
    const datas = useLoaderData();

    return (
        <div className="container">
            <IconThemeProvider>
                <NavBar />
                <Suspense
                    fallback={
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
                    }
                >
                    <Await
                        resolve={datas.user}
                        errorElement={<div>Error Loading</div>}
                    >
                        {(user) => {
                            return <Profile user={user} />;
                        }}
                    </Await>
                </Suspense>
                <Skills />
                <Suspense
                    fallback={
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
                    }
                >
                    <Await
                        resolve={datas.publicRepos}
                        errorElement={<div>Error Loading</div>}
                    >
                        {(publicRepos) => <Project publicRepos={publicRepos} />}
                    </Await>
                </Suspense>

                <Contact />
                <Footer />
            </IconThemeProvider>
        </div>
    );
}

export default App;
