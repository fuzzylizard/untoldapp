Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :stories, only: [:index, :create, :update, :destroy]
  end

  get  "site/", to: "site#index", as: "site"

  root "home#index"
end
