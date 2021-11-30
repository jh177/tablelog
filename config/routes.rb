Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:create, :index, :show]
    resources :reservations, only: [:create, :index, :show, :update, :destroy]
    resources :reviews, only: [:create, :index, :show, :update, :destroy]
  end

  root "static_pages#root"
end
