import {fetchPopularRepos} from "../service/API";
import {getReposFailure, getReposLoading, getReposSuccess} from "./popular.actions";

export const getRepos = (selectedLanguage) => (dispatch) => {
    dispatch(getReposLoading());

    fetchPopularRepos(selectedLanguage)
        .then(data => {
            dispatch(getReposSuccess(data));
        })
        .catch(error => {
            dispatch(getReposFailure(error));
        });
};