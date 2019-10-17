    json.bookshelf do
        json.extract! @bookshelf, :id, :name
        json.userId @bookshelf.user_id  
        json.bookIds @bookshelf.books.ids
        
    end

    json.books do
        @bookshelf.books.each do |book|
            json.set! book.id do
                json.extract! book, :id, :title, :author, :description, :year
                json.coverUrl url_for(book.cover)
            end
        end
    end

    
