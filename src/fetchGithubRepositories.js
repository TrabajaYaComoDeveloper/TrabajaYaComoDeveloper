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
exports.getUserRepositories = void 0;
const rest_1 = require("@octokit/rest");
const octokit = new rest_1.Octokit({
    auth: process.env.GITHUB_TOKEN
});
function getUserRepositories() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield octokit.repos.listForAuthenticatedUser({
                username: "TrabajaYaComoDeveloper",
            });
            return response;
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    });
}
exports.getUserRepositories = getUserRepositories;
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield getUserRepositories();
        console.log(data);
    });
}
getData();
