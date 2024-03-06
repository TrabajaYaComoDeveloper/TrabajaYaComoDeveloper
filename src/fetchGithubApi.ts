import { Octokit } from 'octokit';

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
});

const githubConfig = {
    username: 'TrabajaYaComoDeveloper',
    headers: {
        'X-GitHub-Api-Version': '2022-11-28'
    },
    sort: 'created',
    per_page: 10    
};

export async function getPublicRepositories(): Promise<number> {
    return octokit.request('GET /users/TrabajaYaComoDeveloper', githubConfig)
        .then(response => handleResponseSuccess(response))
        .catch(err => {
            console.log(err);
            throw err;
        });
}

function handleResponseSuccess(response: any): number {
    console.log(response);
    return response.data.public_repos;
}
