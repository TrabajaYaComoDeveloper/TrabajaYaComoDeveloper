import { promises as fs } from 'fs';
import { getPublicRepositories } from './fetchGithubApi';

const TOTAL_REPOSITORIES_PLACEHOLDER = '%{{total_repositories}}%';

async function readReadmeFile(): Promise<void> {
    console.log('typescript migrated!');
    const filedata: string = await fs.readFile('./README.md.tpl', { encoding: 'utf-8' });
    const totalRepositories = await getPublicRepositories();
    const markdownReplaced: string = filedata.replace(TOTAL_REPOSITORIES_PLACEHOLDER, totalRepositories.toString());

    await fs.writeFile('./README.md', markdownReplaced);
    console.log('typescript migrated!');
}

readReadmeFile();