import { defer, useLoaderData, Await } from 'react-router-dom';
import { Suspense } from 'react';

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

export const dataLoader = async () => {
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
};
/**
 *
 * @components IconThemeProvider - apply custom config to icon from "react-icons" library
 * @returns jsx
 */
function App() {
    const datas = useLoaderData();

    return (
        <Suspense
            fallback={() => (
                <div className="vw-100 vh-100 d-flex align-items-center justify-content-center">
                    <BarLoader color="#3646d6" />
                </div>
            )}
        >
            <Await resolve={datas} errorElement={<div>Error Loading</div>}>
                {(datas) => {
                    return (
                        <div className="container">
                            <IconThemeProvider>
                                <NavBar />
                                <Profile user={datas.user} />
                                <Skills />
                                <Project publicRepos={datas.publicRepos} />
                                <Contact />
                                <Footer />
                            </IconThemeProvider>
                        </div>
                    );
                }}
            </Await>
        </Suspense>
    );
}

export default App;
