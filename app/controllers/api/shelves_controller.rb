class Api::ShelvesController < ApplicationController
  def create
    shelf = Shelf.new(book_id: params[:book_id], bookshelf_id: params[:bookshelf_id])
    
      if shelf.save
        @book = Book.find(params[:book_id])
        @bookshelves = @book.bookshelves.where('bookshelves.user_id = ?', current_user.id)
        render json: @bookshelves.ids
      else
        render json: shelf.errors.full_messages, status: 422
      end
    
  end

  def destroy
    shelf = Shelf.find_by(book_id: params[:book_id], bookshelf_id: params[:bookshelf_id])
      shelf.destroy
      render json: 'api/bookshelves/index'
  end

  private

  def shelf_params
    params.require(:shelf).permit(:book_id, :bookshelf_id)
  end
end
