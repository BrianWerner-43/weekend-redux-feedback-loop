import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

//Reducers will go in this file


// Reducer for Feeeling componet
const feelingData = (state = '', action) => {
    if (action.type === 'ADD_FEELING') {
        const feelingInfo = action.payload
        return feelingInfo;
    } else if ( action.type ===  "CLEAR_INPUTS") {
        return '';
    }
     
    return state;
}

// Reducer for Understanding componet
const understandingData = (state = '', action) => {
    if (action.type === 'ADD_UNDERSTANDING') {
        const understandingInfo = action.payload
        return understandingInfo;
    } else if ( action.type ===  "CLEAR_INPUTS") {
        return '';
    }

    return state;
}

//Reducer for Supported function
const supportedData = (state = '', action) => {
    if (action.type === 'ADD_SUPPORTED') {
        const supportedInfo = action.payload
        return supportedInfo;
    } else if ( action.type ===  "CLEAR_INPUTS") {
        return '';
    }

    return state;
}


// Reducer for Comments function
const commentData = (state = '', action) => {
    if (action.type === 'ADD_COMMENTS') {
        const commentInfo = action.payload
        return commentInfo
    } else if ( action.type ===  "CLEAR_INPUTS") {
        return '';
    }

    return state;
}

// Review rating Reducer page 



const store = createStore(
    combineReducers({
        feelingData,
        understandingData,
        supportedData,
        commentData

    }),
    applyMiddleware(logger),
)

export default store;