import { promises as fsPromises} from "fs"
import { getPublicRepositories } from './fetchGithubApi.js'

const TOTAL_REPOSITORIES_PLACEHOLDER = '%{{total_repositories}}%'

const readReadmeFile = async ()=> {
    const filedata = await fsPromises.readFile('./README.md.tpl', { encoding: 'utf-8' })    
    const markdownReplaced = filedata
        .replace(TOTAL_REPOSITORIES_PLACEHOLDER, await getPublicRepositories())
    
    await fsPromises.writeFile('./README.md', markdownReplaced)
}

readReadmeFile()