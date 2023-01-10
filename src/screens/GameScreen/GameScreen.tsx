import { Button, Center, Heading, Icon, IconButton, View } from 'native-base';
import React, { useEffect } from 'react';
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
            pt={10}
            bg={
                game.playersturn === PlayerEnum.PLAYER_ONE
                    ? 'blue.100'
                    : 'emerald.100'
            }
        >
            <Center mb={10}>
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

                        <Button size={'lg'} onPress={handleRestartGame}>
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
