Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create] do
    end
    # resources :shelves, only: [:create, :destroy]
    resources :bookshelves, only: [:show, :index, :create, :update, :destroy] do
      resources :books, only: [:index] do
        resources :shelves, only: [:create]
        delete 'shelves', to: 'shelves#destroy'
      end
    end
    resource :session, only: [:create, :destroy]
    resources :books, only: [:show, :index] do
      resources :bookshelves, only: [:index]
    end

  end 


  root "static_pages#root"
end
