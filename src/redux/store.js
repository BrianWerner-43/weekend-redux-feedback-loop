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
const understandingData = (state = '', action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
        const understandingInfo = action.payload
        return understandingData;
    }

    return state;
}

const store = createStore(
    combineReducers({
        feelingData,
        understandingData

    }),
    applyMiddleware(logger),
)

export default store;