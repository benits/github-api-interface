import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NoSearch from '..';

describe('NoSearch', () => {
    
    beforeEach(() => {
        render(<NoSearch/>);
    });

    it('should render a h1 element', () => {

        const heading1 = screen.getByRole('heading', {level: 1});

        expect(heading1).toBeVisible();
    });

    it('should render a h1 element with the text "Nenhum usuário pesquisado"', () => {

        const heading1 = screen.getByText(/Nenhum usuario pesquisado/i);

        expect(heading1).toBeVisible();
    });
})