import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Header from '..';

describe('Header', () => {
    it('should render "Digite o username para pesquisa..."', () => {
        render(<Header/>);
        
        const inputSearch = screen.getByPlaceholderText(/Digite o username para pesquisa.../i);
        expect(inputSearch).toBeVisible();
    });

    it('should render a button with a name "Buscar"', () => {
        render(<Header/>);

        const button = screen.getByRole('button', {name: 'Buscar'});

        expect(button).toBeVisible();
    });
})