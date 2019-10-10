@books.each do |book|
    json.set! book.id do
        json.extract! book, :id, :title, :author, :description, :year, :image_url
    end
end