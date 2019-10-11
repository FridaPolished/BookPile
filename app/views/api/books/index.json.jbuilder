@books.each do |book|
    json.set! book.id do
        json.extract! book, :id, :title, :author, :description, :year
        json.coverUrl url_for(book.cover)
    end
end