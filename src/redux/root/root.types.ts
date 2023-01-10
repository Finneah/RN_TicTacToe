import { GameSliceState } from '../game/game.types';
import { PlayersSliceState } from '../players/players.types';

export type RootState = {
    players: PlayersSliceState;
    game: GameSliceState;
};
