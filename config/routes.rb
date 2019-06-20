Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :stories, only: [:index, :create, :update, :destroy]
  end

  get  "site/", to: "site#index", as: "site"

  root "app#index"
end
