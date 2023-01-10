import { Center, HStack, VStack } from 'native-base';
import React from 'react';
import { Platform } from 'react-native';

import { Game } from '../../types/Game';
import { PlayerEnum } from '../../types/Player';
import { BoardCell } from '../BoardCell/BoardCell';
import { IconCircle } from '../IconCircle/IconCircle';
import { IconCross } from '../IconCross/IconCross';

type BoardProps = {
    game: Game;
};
export const Board: React.FC<BoardProps> = ({game}) => {
    const size = {
        sm: 10,
        md: 50,
        lg: 200,
        xl: 200
    };

    return (
        <Center p={5}>
            <VStack bg={'white'} p={5}>
                {[1, 2, 3].map((col, columnIndex) => (
                    <HStack w={'100%'} key={`col_${columnIndex}`}>
                        {[1, 2, 3].map((row, rowIndex) => (
                            <BoardCell
                                hasBackground={game.winCondition?.includes(
                                    `${columnIndex}${rowIndex}`
                                )}
                                key={`BoardCell_${columnIndex}.${rowIndex}`}
                                rowIndex={rowIndex}
                                columnIndex={columnIndex}
                                size={Platform.OS === 'web' ? size : 20}
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
