Rails.application.routes.draw do
  root to: "users#new"
  resources :users
  resources :tasks
  resource :session
  
  resources :transactions, only: [:create, :destroy]
  
end

