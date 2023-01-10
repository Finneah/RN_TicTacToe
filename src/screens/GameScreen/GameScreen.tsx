import { Button, Center, Heading, View } from 'native-base';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Board } from '../../components/Board/Board';
import { MainStackParamList } from '../../Navigation/MainStack';
import { gameSlice } from '../../redux/game/game.slice';
import { RootState } from '../../redux/root/root.types';
import { Game } from '../../types/Game';
import { Player, PlayerEnum } from '../../types/Player';

type GameScreenProps = NativeStackScreenProps<MainStackParamList, 'Game'>;
export const GameScreen: React.FC<GameScreenProps> = ({navigation}) => {
    const dispatch = useDispatch();
    const players: Player[] | null = useSelector(
        (state: RootState) => state.players.data
    );
    const game: Game | null = useSelector(
        (state: RootState) => state.game.data
    );

    const handleRestartGame = () => {
        dispatch(gameSlice.actions.restart());
    };

    return (
        <View
            flex={1}
            pt={5}
            bg={
                game.playersturn === PlayerEnum.PLAYER_ONE
                    ? 'blue.100'
                    : 'orange.100'
            }
        >
            <Center mb={5} px={2}>
                {game.finished && (
                    <>
                        {game.draw ? (
                            <Heading>{`Draw! No one has won`}</Heading>
                        ) : (
                            <Heading>{`Gratulation, ${
                                players.find(
                                    (player) =>
                                        player.player === game.playersturn
                                )?.name
                            } won the game`}</Heading>
                        )}

                        <Button
                            variant={'ghost'}
                            size={'lg'}
                            onPress={handleRestartGame}
                        >
                            {'Restart'}
                        </Button>
                    </>
                )}
                {!game.finished && !game.draw && (
                    <Heading>{`It\'s ${
                        players.find(
                            (player) => player.player === game.playersturn
                        )?.name
                    }\'s turn`}</Heading>
                )}
            </Center>

            <Board game={game} />
        </View>
    );
};
