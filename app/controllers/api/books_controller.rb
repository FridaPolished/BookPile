class Api::BooksController < ApplicationController

    def show
        @book = Book.find(params[:id])
        render :show 
    end
    
    def index
        @books = Book.all
        render :index
    end

    private
    def book_params
        params.require(:book).permit(
            :title,
            :author,
            :description,
            :year,
<<<<<<< HEAD
=======
            :image_url,
>>>>>>> 342fd451ef16267b507a998f32e6d2b734be83c3
            :bookshelf_id
        )
    end
end
