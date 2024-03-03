const { read } = require('fs')
const fs = require('fs').promises
const { getPublicRepositories } = require('./fetchGithubApi.js')

const TOTAL_REPOSITORIES_PLACEHOLDER = '%{{total_repositories}}%'

async function readReadmeFile() {
    const filedata = await fs.readFile('./README.md.tpl', { encoding: 'utf-8' })    
    const markdownReplaced = filedata
        .replace(TOTAL_REPOSITORIES_PLACEHOLDER, await getPublicRepositories())
    
    await fs.writeFile('./README.md', markdownReplaced)
}

readReadmeFile()