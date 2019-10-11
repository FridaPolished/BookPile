<<<<<<< HEAD

    json.extract! @book, :id, :title, :author, :description, :year
    json.coverUrl url_for(@book.cover)
=======
json.book do 
    json.extract! @book, :id, :title, :author, :description, :year, :image_url
end
>>>>>>> 342fd451ef16267b507a998f32e6d2b734be83c3
