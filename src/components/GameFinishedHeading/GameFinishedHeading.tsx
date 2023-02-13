import {Heading} from 'native-base';
import React from 'react';

import {
    PlayerStoreContext,
    usePlayerStore
} from '../../store/players/player.store';
import {observer} from 'mobx-react-lite';
import {Game} from '../../types/Game';

type GameFinishedHeadingProps = {game: Game};

export const GameFinishedHeading: React.FC<GameFinishedHeadingProps> = observer(
    ({game}) => {
        const playersStore = usePlayerStore();

        return (
            <PlayerStoreContext.Provider value={playersStore}>
                <Heading>{`Gratulation, ${
                    playersStore.players.find(
                        (player) => player.player === game.playersturn
                    )?.name
                } won the game`}</Heading>
            </PlayerStoreContext.Provider>
        );
    }
);
