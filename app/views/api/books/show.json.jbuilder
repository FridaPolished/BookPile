json.book do 
    json.extract! @book, :id, :title, :author, :description, :year, :image_url
end