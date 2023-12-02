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
        return understandingInfo;
    }

    return state;
}

//Reducer for Supported function
const supportedData = (state = '', action) => {
    if (action.type === 'ADD_SUPPORTED') {
        const supportedInfo = action.payload
        return supportedInfo;
    }

    return state;
}

const store = createStore(
    combineReducers({
        feelingData,
        understandingData,
        supportedData

    }),
    applyMiddleware(logger),
)

export default store;