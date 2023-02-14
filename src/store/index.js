import {createStore, applyMiddleware, combineReducers} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import reduxLogger from "redux-logger"
import thunk from "redux-thunk";
import testSlice from "./testSlice";


// const reducers = combineReducers({
//     // place your separate reducers here, for example:
//     // students: studentReducer,
// })

// function configureStore() {
//     // return createStore(########, applyMiddleware(thunk));
//     return createStore(reducers, applyMiddleware(thunk))
// }

const store = configureStore({
    reducer: {
        test: testSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(reduxLogger)
})

export default store