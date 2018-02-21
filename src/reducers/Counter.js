import { createAction, createReducer } from 'redux-act';

const initialState = 0;

export const counterPlus = createAction('increase counter');
export const counterMinus = createAction('decrease counter');
export const jumpTwo = createAction('jump two');
export const jumpMinusTwo = createAction('jump minus two');

export default createReducer({
    [counterPlus]: (state, value) => state + value,
    [counterMinus]: (state, value) => state == 0 ? state : state - value,
    [jumpTwo]: (state) => state + 2,
    [jumpMinusTwo]: (state) => ((state - 2) <= 0) ? 0 : state - 2
}, initialState)

/*
export default (state = 0, action) => {
    switch (action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state === 0 ? 0 : state - 1;
        default:
            return state;
    }
}*/