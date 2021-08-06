import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";
import { compose } from "redux";
import headerReducer from "../header/reducer";


let rootReducer = combineReducers({
  header: headerReducer,
});

type RootReducer = typeof rootReducer;                        // тут будет (state: GlobslState) => GlobalState, typeof после отработки определит такой тип: (state: GlobslState) => GlobalState для функции rootStore
export type RootReducerSate = ReturnType<RootReducer>         // тут мы вытащили тип GlobslState (то есть то что функуия возвращает) из типа редюсера

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunkMiddleWare)
));                                       // это для использования extension'а redux dev tools в Google Chrome

export default store;