import { combineReducers } from 'redux';
import BookList from './BookList';
import ActiveBook from './ActiveBook';
import Counter from './Counter';

const rootReducer = combineReducers({
    books: BookList,
    activeBook: ActiveBook,
    counter: Counter
});

export default rootReducer;