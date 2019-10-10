export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS';


export const receiveBooks = (books) => {
    return ({
        type: RECEIVE_ALL_BOOKS,
        books: books
    })
};
export const receiveBook = (book) => {
    return ({
        type: RECEIVE_BOOK,
        book: book
    })
};

export const fetchBooks = () => dispatch => {
    return (
        fetchBooks().then(books => dispatch(receiveBooks(books)))
    )
}
export const fetchBook = (id) => dispatch => {
    return (
        fetchBooks(id).then(book => dispatch(receiveBooks(book)))
    )
}