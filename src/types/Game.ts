import { PlayerEnum } from './Player';

export type Game = {
    turn: number;
    playersturn: PlayerEnum;
    board: Board;
    finished: boolean;
    draw?: boolean;
};

export type Board = {
    [x: string]: PlayerEnum;
};
