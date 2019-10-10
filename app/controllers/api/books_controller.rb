class Api::BooksController < ApplicationController

    def show
        @book = Book.find(params[:id])
        render :show 
    end
    
    def index
        @books = Books.all
        render :index
    end

    private
    def book_params
        params.require(:book).permit(
            :title,
            :author,
            :description,
            :year,
            :image_url,
            :user_id,
            :bookshelf_id
        )
    end
end
