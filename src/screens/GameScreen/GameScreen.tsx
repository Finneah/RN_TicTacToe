import {Button, Center, Heading, View} from 'native-base';
import React, {useContext} from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Board} from '../../components/Board/Board';
import {MainStackParamList} from '../../Navigation/MainStack';

import {PlayerEnum} from '../../types/Player';

import {GameStoreContext, useGameStore} from '../../store/game/game.store';
import {observer} from 'mobx-react-lite';
import {GameFinishedHeading} from '../../components/GameFinishedHeading/GameFinishedHeading';
import {PlayersTurnHeading} from '../../components/PlayersTurnHeading/PlayersTurnHeading';

type GameScreenProps = NativeStackScreenProps<MainStackParamList, 'Game'>;
export const GameScreen: React.FC<GameScreenProps> = observer(
    ({navigation}) => {
        const gameStore = useGameStore();

        return (
            <GameStoreContext.Provider value={gameStore}>
                <View
                    flex={1}
                    pt={5}
                    bg={
                        gameStore.game.playersturn === PlayerEnum.PLAYER_ONE
                            ? 'blue.100'
                            : 'orange.100'
                    }
                >
                    <Center mb={5} px={2}>
                        {gameStore.game.finished && (
                            <>
                                {gameStore.game.draw ? (
                                    <Heading>{`Draw! No one has won`}</Heading>
                                ) : (
                                    <GameFinishedHeading
                                        game={gameStore.game}
                                    />
                                )}

                                <Button
                                    variant={'ghost'}
                                    size={'lg'}
                                    onPress={() => {
                                        gameStore.restart();
                                    }}
                                >
                                    {'Restart'}
                                </Button>
                            </>
                        )}
                        {!gameStore.game.finished && !gameStore.game.draw && (
                            <PlayersTurnHeading game={gameStore.game} />
                        )}
                    </Center>

                    <Board game={gameStore.game} />
                </View>
            </GameStoreContext.Provider>
        );
    }
);
