export const RECEIVE_ALL_BOOKSHELVES = "RECEIVE_ALL_BOOKSHELVES";
export const RECEIVE_BOOKSHELF = "RECEIVE_BOOKSHELF";

import * as ApiUtil from '../util/bookshelf_api_util';


export const receiveAllBookshelves = (payload) => {
  return ({
    type: RECEIVE_ALL_BOOKSHELVES,
    bookshelves: payload.bookshelves,
    books: payload.books
  })
};

export const receiveBookshelf = (payload) => {
  return ({
    type: RECEIVE_BOOKSHELF,
    bookshelf: payload.bookshelf,
    books: payload.books,
  })
};

export const fetchBookshelves = () => dispatch => (
  ApiUtil.fetchBookshelves().then(bookshelves => dispatch(receiveAllBookshelves(bookshelves)))
)

export const fetchBookshelf = (id) => dispatch => (
  ApiUtil.fetchBookshelf(id).then(bookshelf => dispatch(receiveBookshelf(bookshelf)))
)

export const createBookshelf = (bookshelf) => dispatch => (
  ApiUtil.createBookshelf(bookshelf).then(bookshelf => dispatch(receiveBookshelf(bookshelf)))
)

export const updateBookshelf = (bookshelf) => dispatch => (
  ApiUtil.updateBookshelf(bookshelf).then(bookshelf => dispatch(receiveBookshelf(bookshelf)))
);

export const deleteBookshelf = (bookshelf) => dispatch => (
  ApiUtil.deleteBookshelf(bookshelf).then(bookshelves => dispatch(receiveAllBookshelves(bookshelves)))
)

export const addBook = (shelfInfo) => dispatch => (
  ApiUtil.addBook(shelfInfo).then(bookshelf => dispatch(receiveBookshelf(bookshelf)))
);

export const deleteBook = (id) => dispatch => (
  ApiUtil.deleteBook(id).then(bookshelf => dispatch(receiveBookshelf(bookshelf)))
)

