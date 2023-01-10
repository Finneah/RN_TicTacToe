import { Center, HStack, VStack } from 'native-base';
import React from 'react';

import { Game } from '../../types/Game';
import { PlayerEnum } from '../../types/Player';
import { BoardCell } from '../BoardCell/BoardCell';
import { IconCircle } from '../IconCircle/IconCircle';
import { IconCross } from '../IconCross/IconCross';

type BoardProps = {
    game: Game;
};
export const Board: React.FC<BoardProps> = ({game}) => {
    // TODO
    const size = {
        sm: 50,
        md: 200,
        lg: 400,
        xl: 600
    };
    const rows = [1, 2, 3];
    return (
        <Center>
            <VStack bg={'white'} p={5}>
                {[1, 2, 3].map((col, columnIndex) => (
                    <HStack w={'100%'} key={`col_${columnIndex}`}>
                        {rows.map((row, rowIndex) => (
                            <BoardCell
                                key={`BoardCell_${columnIndex}.${rowIndex}`}
                                rowIndex={rowIndex}
                                columnIndex={columnIndex}
                                size={size}
                                lastRow={columnIndex === 2}
                            >
                                {game.board[`${columnIndex}${rowIndex}`] ? (
                                    game.board[`${columnIndex}${rowIndex}`] ===
                                    PlayerEnum.PLAYER_ONE ? (
                                        <IconCross />
                                    ) : (
                                        <IconCircle />
                                    )
                                ) : null}
                            </BoardCell>
                        ))}
                    </HStack>
                ))}
            </VStack>
        </Center>
    );
};
