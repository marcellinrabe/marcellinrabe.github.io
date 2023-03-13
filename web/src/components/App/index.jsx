/* Package components */
import { useQuery } from 'react-query';
import { useLoaderData } from 'react-router-dom';
import { ClimbingBoxLoader } from 'react-spinners';
import { useContext, useEffect, useState } from 'react';

/* Custom components */
import NavBar from '../NavBar';
import { Profile, Project, Skills, Contact } from '../sections';
import Footer from '../Footer';
import userContext from '../contexts/userContext';

/* style files */
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

// aos library css
import 'aos/dist/aos.css';

/* others */
import { API_URL } from '../../datas/constants';

const appLoader = async () => {
    const serverResponse = await fetch(`${API_URL}/user/me`);

    if (!serverResponse.ok) throw Error('error when fetching user');

    const userServer = await serverResponse.json();

    return userServer;
};
export { appLoader };

export default function App() {
    const [loading, setLoading] = useState(false);
    const { setUser } = useContext(userContext);
    const userServer = useLoaderData();

    const { isLoading, isSuccess, data } = useQuery(
        'user',
        () => {
            setLoading(true);
            return userServer;
        },
        {
            refetchOnWindowFocus: false,
        }
    );

    if (isSuccess) {
        // Wait at least one second after data had finished fetching to give more user experience when loading processes faster
        setUser(data);
        setTimeout(() => setLoading(false), 1000);
    }

    if (isLoading || loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100 vw-100 background-primary">
                <ClimbingBoxLoader color="#cc8" />
            </div>
        );
    }

    return (
        <div className="container">
            <NavBar />
            <Profile />
            <Skills />
            <Project />
            <Contact />
            <Footer />
        </div>
    );
}
