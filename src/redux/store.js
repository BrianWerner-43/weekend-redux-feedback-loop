import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

//Reducers will go in this file


// Reducer for Feeeling componet
const feelingData = (state = '', action) => {
    if (action.type === 'ADD_FEELING') {
        const feelingInfo = action.payload
        return feelingInfo;
    }
    return state;
}

// Reducer for Understanding componet

const store = createStore(
    combineReducers({
        feelingData

    }),
    applyMiddleware(logger),
)

export default store;