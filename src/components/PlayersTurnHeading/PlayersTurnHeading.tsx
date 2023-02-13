import {Heading} from 'native-base';
import React from 'react';

import {
    PlayerStoreContext,
    usePlayerStore
} from '../../store/players/player.store';
import {observer} from 'mobx-react-lite';
import {Game} from '../../types/Game';

type PlayersTurnHeadingProps = {game: Game};

export const PlayersTurnHeading: React.FC<PlayersTurnHeadingProps> = observer(
    ({game}) => {
        const playersStore = usePlayerStore();

        return (
            <PlayerStoreContext.Provider value={playersStore}>
                <Heading>{`It\'s ${
                    playersStore.players.find(
                        (player) => player.player === game.playersturn
                    )?.name
                }\'s turn`}</Heading>
            </PlayerStoreContext.Provider>
        );
    }
);
