import {createStore, combineReducers, applyMiddleware} from 'redux';
import { reducer } from 'redux-form';
import {createStackNavigator} from "react-navigation";
import {
  createNavigationReducer,
  createReactNavigationReduxMiddleware,
  createReduxContainer
} from "react-navigation-redux-helpers";
import {connect} from "react-redux";
import React from 'react';

import ItemList from "../components/item/ItemList";
import Item from "../components/item/Item";
import NewItem from "../components/createItem/NewItem";

// Note: createReactNavigationReduxMiddleware must be run before createReduxContainer
const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
);

const AppNavigator = createStackNavigator({
  ItemList: {screen: ItemList},
  Item: {screen: Item},
  NewItem: {screen: NewItem}
});

const navReducer = createNavigationReducer(AppNavigator);
const appReducer = combineReducers({
  nav: navReducer,
  form: reducer
});


const App = createReduxContainer(AppNavigator);
const mapStateToProps = (state) => ({
  state: state.nav,
});

export const AppNavigationState = connect(mapStateToProps)(App);

export const store = createStore(
    appReducer,
    applyMiddleware(middleware),
);

