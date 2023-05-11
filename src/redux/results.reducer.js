const initialState = {
    isLoading: false,
    players: [],
    error: null,
    standoff: false
};

export const resultsReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'SET_PLAYERS_LOADING':
            return {
                ...state,
                isLoading: true,
                error: null
            }

        case 'SET_PLAYERS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                players: action.payload,
                standoff: action.payload.every(item => item.score === 0)
            }

        case 'SET_PLAYERS_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: action.payload,
                standoff: false
            }

        default:
            return state;
    }
};