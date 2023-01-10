import { PlayerEnum } from './Player';

export type Game = {
    turn: number;
    playersturn: PlayerEnum;
    board: {
        [x: string]: PlayerEnum;
    };
    finished: boolean;
};
