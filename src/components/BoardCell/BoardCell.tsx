import {observer} from 'mobx-react-lite';
import {Button, Center} from 'native-base';
import React, {ReactNode} from 'react';

import {GameStoreContext, useGameStore} from '../../store/game/game.store';

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

export const BoardCell: React.FC<BoardCellProps> = observer(
    ({rowIndex, columnIndex, size, lastRow, hasBackground, children}) => {
        const gameStore = useGameStore();

        return (
            <GameStoreContext.Provider value={gameStore}>
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
                                gameStore.game.finished ||
                                gameStore.game.board[
                                    `${columnIndex}${rowIndex}`
                                ]
                                    ? true
                                    : false
                            }
                            variant="ghost"
                            size={size}
                            onPress={() => {
                                let board = {
                                    ...gameStore.game.board,
                                    [`${columnIndex}${rowIndex}`]:
                                        gameStore.game.playersturn
                                };
                                let newGame = {...gameStore.game, board};

                                gameStore.play(newGame);
                            }}
                        />
                    )}
                </Center>
            </GameStoreContext.Provider>
        );
    }
);
