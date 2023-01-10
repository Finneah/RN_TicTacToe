import * as React from 'react';

import { RenderAPI } from '@testing-library/react-native';

import { render } from '../../../utils/test.utils';
import { BoardCell } from './BoardCell';

let screen: RenderAPI;

describe('BoardCell', () => {
    beforeEach(() => {
        screen = render(
            <BoardCell rowIndex={0} columnIndex={0} size={20} lastRow={false} />
        );
    });

    it('smoke test', () => {
        expect(screen.toJSON()).toBeTruthy();
    });
});
