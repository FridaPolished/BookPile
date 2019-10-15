class Api::BookshelvesController < ApplicationController

  def index
    # if params[:user_id]
    #   @bookshelves = Bookshelf.bookshelves_for_user(params[:user_id])
    #   render :index
    # end
    @bookshelves = current_user.bookshelves
    render :index
  end

  def show
    @bookshelf = Bookshelf.find(params[:id])

    if @bookshelf 
      render :show
    end
  end

  def create
    @bookshelf = Bookshelf.new(bookshelf_params)
    @bookshelf.user_id = current_user.id

    if @bookshelf.save
      render :show
    else
      render json: @bookshelf.errors.full_messages, status: 422
    end
  end
  
  def update
    @bookshelf = current_user.bookshelves.find(params[:id])
    
    if @bookshelf.update_attributes(bookshelf_params)
      render :show
    end
  end
  
  def destroy
    bookshelf = current_user.owned_bookshelves.find(params[:id])    
    bookshelf.destroy
    render :index
  end
  
  private

  def bookshelf_params
    params.require(:bookshelf).permit(:name)
  end
end
