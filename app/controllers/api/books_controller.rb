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
            :bookshelf_id
        )
    end
end
