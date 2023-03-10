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
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

/**
 *
 * @components IconThemeProvider - apply custom config to icon from "react-icons" library
 * @returns jsx
 */

const AppRouteProvider = () => (
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
);

export { AppRouteProvider };

function App() {
    return (
        <div className="container">
            <IconThemeProvider>
                <NavBar />
                <Profile />;
                <Skills />
                <Project />
                <Contact />
                <Footer />
            </IconThemeProvider>
        </div>
    );
}

export default App;
