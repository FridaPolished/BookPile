export const fetchBooks = () => (
    $.ajax({
        method: 'GET',
        url: '/api/books'
    })
)
export const fetchBook = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/books/${id}`
    })
)

export const fetchBookBookshelves = (bookId) => (
    $.ajax({
        method: 'GET',
        url: `api/books/${bookId}/bookshelves`
    })
)