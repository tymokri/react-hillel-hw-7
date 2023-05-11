import {goBattle} from "../service/API";
import {setPlayersLoading, setPlayersSuccess, setPlayersFailure, setStandoff} from "./results.actions";

export const setPlayers = (players) => (dispatch) => {
    dispatch(setPlayersLoading());

    goBattle(players)
        .then(data => {
            dispatch(setPlayersSuccess(data));
            dispatch(setStandoff(players.every(item => item.score === 0)));
        })
        .catch(error => {
            dispatch(setPlayersFailure(error));
        });
};