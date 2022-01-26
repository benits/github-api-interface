/* import * as useGitHub from '../../../hooks/github-hooks' */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Profile from '..';

import { setupServer } from 'msw/node';
import { rest } from 'msw';


/* jest.spyOn(useGitHub, 'githubState').mockImplementation(() => {
    return {
        user: {
            avatar: "http://someaddress.com"
        }
    }
}); */


const server = setupServer(
    rest.get(`https://api.github.com/users/username}`, (req, res, ctx) => {
    return res(
        ctx.json({
            user: {
                avatar: "http://someaddress.com"
            }
        })
    )
}));

beforeAll(() => server.listen());


afterAll(() => server.close());
afterEach(() => server.resetHandlers);



describe('Profile', () => {
    it('should find an img', async() => {
        render(<Profile/>)
        const img = await screen.findByRole('img');

        expect(img).toHaveAttribute('src', 'http://someaddress.com');
    })
})