Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create] do
      resources :shelves, only: [:create, :destroy]
    end
    resources :bookshelves, only: [:show, :index, :create, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :books, only: [:show, :index]
  end 


  root "static_pages#root"
end
