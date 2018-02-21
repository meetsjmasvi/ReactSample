const SelectBook = (book) => {
    console.log(book);
    return {
        type: 'SELECTED_BOOK',
        payload: book
    }
}

export default SelectBook;