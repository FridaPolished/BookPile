class Api::ShelvesController < ApplicationController
  def create
    shelf = Shelf.new(shelf_params)
    if shelf.user_id = current_user.id
      if shelf.save
        render json: 'api/bookshelves/show'
      else
        json: shelf.errors.full_messages, status: 422
      end
    end
  end

  def destroy
    shelf = Shelf.find(params[:id])
    if shelf.user_id = current_user.id
      shelf.destroy
      render json: 'api/bookshelves/index'
    end
  end

  private

  def shelf_params
    params.require(:shelf).permit(:book_id, :bookshelf_id)
  end
end
