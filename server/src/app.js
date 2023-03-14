const express = require('express');
const { Octokit } = require('octokit');
const cors = require('cors');

// load variables from .env file
require('dotenv').config();

const GITHUB_API_TOKEN = process.env.GITHUB_API_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const PROJECT_DEFAULT_PREVIEW = process.env.PROJECT_DEFAULT_PREVIEW;
const CV_URL = process.env.CV_URL;

const octokit = new Octokit({
    auth: GITHUB_API_TOKEN,
});

const getImgPreview = async (repo_name, ref = 'main') => {
    const { data } = await octokit.request(
        'GET /repos/:username/:repo/contents/:path',
        {
            username: GITHUB_USERNAME,
            repo: repo_name,
            path: 'metadata.json',
            ref: ref,
        }
    );

    const decodedContent = Buffer.from(data.content, 'base64').toString(
        'utf-8'
    );
    const { img_preview } = JSON.parse(decodedContent);

    return img_preview;
};

const readOwnPublicRepos = async () => {
    const { data } = await octokit.rest.repos.listForAuthenticatedUser({
        visibility: 'public',
        affiliation: 'owner',
    });

    const deployedProject = data.filter((project) => project.homepage && true);

    const returnsAsync = deployedProject.map(async (repo) => {
        let img_preview = '';
        try {
            img_preview = await getImgPreview(repo.name);
        } catch (err) {
            img_preview = PROJECT_DEFAULT_PREVIEW;
        }

        const publicRepo = {
            id: repo.id,
            name: repo.name,
            desc: repo.description,
            github_url: repo.html_url,
            homepage: repo.homepage ? repo.homepage : null,
            img_preview: img_preview,
            language: repo.language,
            topics: repo.topics,
        };

        return publicRepo;
    });

    const returns = await Promise.all(returnsAsync);
    return returns;
};

const getUser = async () => {
    const { data } = await octokit.rest.users.getAuthenticated();

    return { ...data, cv_url: CV_URL };
};

app = express();

// allow all origins
app.use(cors());

app.get('/user/me', async (req, res) => {
    const user = await getUser();
    res.status(200).json(user);
});

app.get('/public-repos', async (req, res) => {
    const publicRepos = await readOwnPublicRepos();
    res.status(200).send(publicRepos);
});

module.exports = app;
