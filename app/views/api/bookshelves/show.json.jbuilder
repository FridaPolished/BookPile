json.set! @bookshelf.id do
      json.extract! @bookshelf, :id, :name
      json.userId @bookshelf.user_id
      
        json.bookIds do
            @bookshelf.books.each do |book|
                book.id
            end
        end
end
