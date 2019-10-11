@books.each do |book|
    json.set! book.id do
<<<<<<< HEAD
        json.extract! book, :id, :title, :author, :description, :year
        json.coverUrl url_for(book.cover)
=======
        json.extract! book, :id, :title, :author, :description, :year, :image_url
>>>>>>> 342fd451ef16267b507a998f32e6d2b734be83c3
    end
end