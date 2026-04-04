import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import movieReducer from "./movieReducer";
import movieDetailsReducer from "./movieDetailsReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    movies: movieReducer,
    movieDetails: movieDetailsReducer,
    auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
export default store;
