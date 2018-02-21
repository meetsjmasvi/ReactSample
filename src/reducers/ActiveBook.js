const ActiveBook = (state = null, action) => {
    switch(action.type){
        case 'SELECTED_BOOK':
            return action.payload;
        default:
            return state;
    }
}

export default ActiveBook;