export const RECEIVE_BOOK = 'RECEIVE_BOOK';
export const RECEIVE_ALL_BOOKS = 'RECEIVE_ALL_BOOKS';
import * as BookAPIUtil from '../util/book_api_util';

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
        BookAPIUtil.fetchBooks().then(books => dispatch(receiveBooks(books)))
    )
}
export const fetchBook = (id) => dispatch => {
    return (
        BookAPIUtil.fetchBook(id).then(book => dispatch(receiveBook(book)))
    )
}

export const fetchBookBookshelves = (BookId) => dispatch => {
    return (
        BookAPIUtil.fetchBookBookshelves(BookId).then(bookshelfIds => dispatch(receiveBook({id: BookId, bookshelfIds: bookshelfIds})))
    )
}