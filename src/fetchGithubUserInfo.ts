import { 
    GetResponseTypeFromEndpointMethod,
    GetResponseDataTypeFromEndpointMethod
} from "@octokit/types";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
});

type UserReposResponseData = GetResponseTypeFromEndpointMethod<typeof octokit.users.getByUsername>;

export async function getUserInfo(): Promise<UserReposResponseData> {
    return octokit.users.getByUsername({
        username: "TrabajaYaComoDeveloper",
    }).then(response => {
        return response;
    }).catch(error => {
        console.error(error);
        throw error;
    });
};

async function getData() {
    const response: UserReposResponseData = await getUserInfo();
    console.log(response.data.public_repos);
}

getData();
