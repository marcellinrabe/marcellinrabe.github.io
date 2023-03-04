const express = require('express')
const { Octokit } = require('octokit')
const cors = require('cors')

// load variables from .env file
require('dotenv').config()

const GITHUB_API_TOKEN = process.env.GITHUB_API_TOKEN
const GITHUB_USERNAME = process.env.GITHUB_USERNAME
const PROJECT_DEFAULT_PREVIEW = process.env.PROJECT_DEFAULT_PREVIEW
const CV_URL = process.env.CV_URL

const octokit = new Octokit({
    auth: GITHUB_API_TOKEN,
})

const projectDescription = async (repo) => {
    const { data } = await octokit.request(
        'GET /repos/:username/:repo/contents/project.desc.json',
        {
            username: GITHUB_USERNAME,
            repo: repo,
        }
    )

    const metadataString = Buffer.from(data.content, 'base64').toString()

    return JSON.parse(metadataString)
}

const readOwnPublicRepos = async () => {
    const { data } = await octokit.rest.repos.listForAuthenticatedUser({
        visibility: 'public',
        affiliation: 'owner',
    })

    const deployedProject = data.filter((project) => project.homepage && true)

    const returnsAsync = deployedProject.map(async (repo) => {
        const metadata = await projectDescription(repo.name)
        const img_preview =
            metadata.img_preview.trim().length === 0
                ? PROJECT_DEFAULT_PREVIEW
                : metadata.img_preview

        const publicRepo = {
            id: repo.id,
            name: repo.name,
            desc: repo.description,
            github_url: repo.html_url,
            homepage: repo.homepage ? repo.homepage : null,
            metadata: { ...metadata, img_preview: img_preview },
        }

        return publicRepo
    })

    const returns = await Promise.all(returnsAsync)
    return returns
}

const getUser = async () => {
    const { data } = await octokit.rest.users.getAuthenticated()

    return { ...data, cv_url: CV_URL }
}

// load variables from .env file
require('dotenv').config()
app = express()

// allow all origins
app.use(cors())

app.get('/user/me', async (req, res) => {
    const user = await getUser()
    res.status(200).json(user)
})

app.get('/public-repos', async (req, res) => {
    const publicRepos = await readOwnPublicRepos()
    res.status(200).send(publicRepos)
})

module.exports = app
