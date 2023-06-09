const initialState = {
    playerOneName: '',
    playerOneImage: null,
    playerTwoName: '',
    playerTwoImage: null,
};

export const battleReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'SET_PLAYER_DATA':
            return {
                ...state,
                [`${action.payload.id}Name`]: action.payload.value,
                [`${action.payload.id}Image`]: `https://github.com/${action.payload.value}.png?size=200`
            }

        case 'RESET_PLAYER_DATA':
            return {
                ...state,
                [`${action.payload}Name`]: '',
                [`${action.payload}Image`]: null
            }

        default:
            return state;
    }
};