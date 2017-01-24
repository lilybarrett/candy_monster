Rails.application.routes.draw do
  root 'candies#index'

  resources :candies, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :candies, only: [:index, :update, :show]
    end
  end
end
