import { defer, useLoaderData, Await, useNavigation } from 'react-router-dom'
import { Suspense } from 'react'

import NavBar from '../NavBar'
import IconThemeProvider from '../../themes/IconsTheme'
import { Profile, Project, Skills, Contact } from '../../sections'
import './index.css'
import { BarLoader } from 'react-spinners'

// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'

// aos library css
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'

export const dataLoader = async () => {
    const [userFromServer, publicRepos] = await Promise.all([
        fetch('http://localhost:7000/user/me/').then((res) => res.json()),
        fetch('http://localhost:7000/public-repos/').then((res) => res.json()),
    ])

    return defer({
        user: userFromServer,
        publicRepos: publicRepos,
    })
}
/**
 *
 * @components IconThemeProvider - apply custom config to icon from "react-icons" library
 * @returns jsx
 */
function App() {
    const datas = (async () => await useLoaderData())()

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (datas) {
            setTimeout(() => setIsLoading(false), 2000)
        }
    }, [datas])

    if (isLoading) {
        return (
            <div className="vw-100 vh-100 d-flex align-items-center justify-content-center">
                <BarLoader color="#3646d6" />
            </div>
        )
    }

    return (
        <Suspense
            fallback={() => {
                setTimeout(() => {
                    return (
                        <div className="vw-100 vh-100 d-flex align-items-center justify-content-center">
                            <BarLoader color="#3646d6" />
                        </div>
                    )
                }, 2000)
            }}
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
                            </IconThemeProvider>
                        </div>
                    )
                }}
            </Await>
        </Suspense>
    )
}

export default App
