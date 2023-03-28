// import {combineReducers,  createStore} from "redux";
// import projectsReducer from "./projectsReduser/projectsReducer";
//
//     let rootReducer = combineReducers({
//     projectsPage:projectsReducer,
//
//     });
//    export const store = createStore(rootReducer);
//
//
//
// // @ts-ignore
// window.store = store;
//
// export default store;


import {applyMiddleware, combineReducers, createStore} from 'redux'
import projectsReducer from "./projectsReduser/projectsReducer";
import thunkMiddleware from 'redux-thunk'


// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    projects: projectsReducer,

})
// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// определить автоматически тип всего объекта состояния


// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;
