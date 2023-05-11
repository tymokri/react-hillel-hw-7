const initialState = {
    selectedLanguage: 'All',
    isLoading: false,
    repos: [],
    error: null,
    myParam: 'All'
};

export const popularReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'SET_MY_PARAM':
            return {
                ...state,
                myParam: action.payload.lang
            }

        case 'SET_SELECTED_LANGUAGE':
            return {
                ...state,
                selectedLanguage: action.payload
            }

        case 'GET_REPOS_LOADING':
            return {
                ...state,
                isLoading: true,
                error: null
            }

        case 'GET_REPOS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                repos: action.payload
            }

        case 'GET_REPOS_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state;
    }
};