
    json.extract! @book, :id, :title, :author, :description, :year
    json.coverUrl url_for(@book.cover)

