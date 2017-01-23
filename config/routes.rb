Rails.application.routes.draw do
  root 'candies#index'

  resources :candies, only: [:index, :show]

  namespace :api do
    namespace :vi do
      resources :candies, only: [:index, :create, :destroy, :update]
    end
  end
end
