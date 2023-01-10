import { Button, Center } from 'native-base';
import React, { ReactNode } from 'react';
import { Dimensions, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { gameSlice } from '../../redux/game/game.slice';
import { RootState } from '../../redux/root/root.types';
import { Game } from '../../types/Game';

type BoardCellProps = {
    rowIndex: number;
    columnIndex: number;

    size:
        | {
              sm: number;
              md: number;
              lg: number;
              xl: number;
          }
        | number;
    lastRow: boolean;
    hasBackground?: boolean;
    children?: ReactNode;
};
export const BoardCell: React.FC<BoardCellProps> = ({
    rowIndex,
    columnIndex,
    size,
    lastRow,
    hasBackground,
    children
}) => {
    const dispatch = useDispatch();
    const game: Game | null = useSelector(
        (state: RootState) => state.game.data
    );

    const handlePlay = (bordIndex: string) => {
        let board = {...game.board, [bordIndex]: game.playersturn};
        let g = {...game, board};

        dispatch(gameSlice.actions.play(g));
    };

    return (
        <Center
            bg={hasBackground ? 'green.300' : undefined}
            w={size}
            h={size}
            borderColor={'primary.400'}
            borderBottomWidth={lastRow ? undefined : 1}
            borderRightWidth={rowIndex !== 2 ? 1 : undefined}
        >
            {children || (
                <Button
                    disabled={
                        game.finished || game.board[`${columnIndex}${rowIndex}`]
                            ? true
                            : false
                    }
                    variant="ghost"
                    size={size}
                    onPress={() => handlePlay(`${columnIndex}${rowIndex}`)}
                />
            )}
        </Center>
    );
};
