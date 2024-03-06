import { 
    GetResponseTypeFromEndpointMethod,
    GetResponseDataTypeFromEndpointMethod
} from "@octokit/types";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
});

type UserReposResponseData = GetResponseTypeFromEndpointMethod<typeof octokit.repos.listForAuthenticatedUser>;

export async function getUserRepositories(): Promise<UserReposResponseData> {
    try {
        const response = await octokit.repos.listForAuthenticatedUser({
            username: "TrabajaYaComoDeveloper",
        });

        return response;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

async function getData() {
    const data: UserReposResponseData = await getUserRepositories();
    console.log(data);
}

getData();
