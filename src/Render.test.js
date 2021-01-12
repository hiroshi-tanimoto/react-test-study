import React from 'react'
import { render, screen } from '@testing-library/react'
import Render from './Render';

describe('Rendering', () => {
    it('Render component test', () => {
        render(<Render />);

        // htmlタグのrole一覧：https://github.com/A11yance/aria-query
        // jestのMatcher一覧：https://jestjs.io/docs/ja/expect
        // testing-libralyのカスタムMatcher一覧：https://github.com/testing-library/jest-dom

        // screen.debug();
        // screen.debug( screen.getByRole('heading') );
        expect(screen.getByRole('heading')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
        expect(screen.getAllByRole('button')[0]).toBeTruthy();
        expect(screen.getAllByRole('button')[1]).toBeTruthy();
        // screen.debug(screen.getByText('Udemy'));
        expect(screen.getByText('Udemy')).toBeTruthy();
        expect(screen.queryByText('Udemy1')).toBeNull();

        expect(screen.getByTestId('udemy')).toBeTruthy();
    })
})