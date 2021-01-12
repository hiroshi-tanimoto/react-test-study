import React from 'react'
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import RenderInput from './RenderInput';
import { isAsyncThunkAction } from '@reduxjs/toolkit';

// it毎にレンダリングされたcomponentを削除するために必要
afterEach(() => {
    cleanup();
})

// renderingのみのテスト
describe('RenderInput rendering test', () => {
    it('rendering test', () => {
        render(<RenderInput />)
        expect(screen.getByPlaceholderText('Enter')).toBeTruthy();
        expect(screen.getByRole('button')).toBeTruthy();
    })
})

// usereventのテスト
describe('input onchange event', () => {
    it('inputのonchangeのテスト', () => {
        render(<RenderInput />);
        const inputValue = screen.getByPlaceholderText('Enter');
        userEvent.type(inputValue, 'test');
        expect(inputValue.value).toBe('test')
    })
})

// button
describe('buttonクリック時', () => {
    it('関数が呼ばれるかのテストなので、空のモック関数を用意する(inputは空)', () => {
        const outputConsole = jest.fn();
        render(<RenderInput outputConsole={outputConsole} />);
        userEvent.click(screen.getByRole('button'));
        expect(outputConsole).not.toHaveBeenCalled();
    })
    it('関数が呼ばれるかのテストなので、空のモック関数を用意する(inputに文字あり)', () => {
        const outputConsole = jest.fn();
        render(<RenderInput outputConsole={outputConsole} />);
        const inputValue = screen.getByPlaceholderText('Enter');
        // inputに'test'を入力
        userEvent.type(inputValue, 'test');
        // buttonクリック
        userEvent.click(screen.getByRole('button'));
        expect(outputConsole).toHaveBeenCalledTimes(1);
    })
})