export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS';
<<<<<<< HEAD
import * as BookAPIUtil from '../util/book_api_util';
=======

>>>>>>> 342fd451ef16267b507a998f32e6d2b734be83c3

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
<<<<<<< HEAD
        BookAPIUtil.fetchBooks().then(books => dispatch(receiveBooks(books)))
=======
        fetchBooks().then(books => dispatch(receiveBooks(books)))
>>>>>>> 342fd451ef16267b507a998f32e6d2b734be83c3
    )
}
export const fetchBook = (id) => dispatch => {
    return (
<<<<<<< HEAD
        BookAPIUtil.fetchBook(id).then(book => dispatch(receiveBook(book)))
=======
        fetchBooks(id).then(book => dispatch(receiveBooks(book)))
>>>>>>> 342fd451ef16267b507a998f32e6d2b734be83c3
    )
}