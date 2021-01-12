import React from 'react'
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import FrameworkList from './FrameworkList';

// it毎にレンダリングされたcomponentを削除するために必要
afterEach(() => {
    cleanup();
})

describe('FrameworkListのrendering test', () => {
    it('should render no data when no props', () => {
        render(<FrameworkList />);
        expect(screen.getByText('No Data')).toBeInTheDocument();
    })
    it('propsにデータが渡されたとき', () => {
        const dummyData = [
            {
                id: 1,
                item: 'React dummy'
            },
            {
                id: 2,
                item: 'Angular dummy'
            },
            {
                id: 3,
                item: 'Vue dummy'
            }
        ];
        render(<FrameworkList frameworks={dummyData} />);
        const frameworkItems = screen.getAllByRole('listitem').map((ele) => ele.textContent);
        const dummyItems = dummyData.map((ele) => ele.item);
        expect(frameworkItems).toEqual(dummyItems);
        expect(screen.queryByText('No Data')).toBeNull();
    })
})