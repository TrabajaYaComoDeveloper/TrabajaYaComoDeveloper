// getUserInfo.test.ts
import { getUserInfo } from '../../src/fetchGithubUserInfo';

describe('getUserInfo', () => {
    it('fetches user info', async () => {
        const result = await getUserInfo();

        expect(result.data.public_repos).toBe(2);
    });
});