import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';
import allBooks from './allBooks'
import allHouses from './allHouses'
import singleBook from './singleBook'

const reducer = combineReducers({ allBooks, allHouses, singleBook })

const middleware = composeWithDevTools(applyMiddleware(
    thunkMiddleware.withExtraArgument({ axios }), 
    createLogger({ collapsed: true })
))

const store = createStore( reducer, middleware )

export default store
export * from './allBooks'
export * from './allHouses'
export * from './singleBook'