
    json.extract! @bookshelf, :id, :name
    json.userId @bookshelf.user_id  
    json.bookIds @bookshelf.books.ids


