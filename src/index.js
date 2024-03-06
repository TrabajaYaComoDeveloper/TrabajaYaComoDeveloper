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
const fs_1 = require("fs");
const fetchGithubApi_1 = require("./fetchGithubApi");
const TOTAL_REPOSITORIES_PLACEHOLDER = '%{{total_repositories}}%';
function readReadmeFile() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('typescript migrated!');
        const filedata = yield fs_1.promises.readFile('./README.md.tpl', { encoding: 'utf-8' });
        const totalRepositories = yield (0, fetchGithubApi_1.getPublicRepositories)();
        const markdownReplaced = filedata.replace(TOTAL_REPOSITORIES_PLACEHOLDER, totalRepositories.toString());
        yield fs_1.promises.writeFile('./README.md', markdownReplaced);
        console.log('typescript migrated!');
    });
}
readReadmeFile();
