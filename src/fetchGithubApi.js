"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPublicRepositories = void 0;
const octokit_1 = require("octokit");
const octokit = new octokit_1.Octokit({
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
function getPublicRepositories() {
    return __awaiter(this, void 0, void 0, function* () {
        return octokit.request('GET /users/TrabajaYaComoDeveloper', githubConfig)
            .then(response => handleResponseSuccess(response))
            .catch(err => {
            console.log(err);
            throw err;
        });
    });
}
exports.getPublicRepositories = getPublicRepositories;
function handleResponseSuccess(response) {
    console.log(response);
    return response.data.public_repos;
}
