Rails.application.routes.draw do
  root to: "pages#root"
  get "splash", to: "pages#splash"
  
  resources :users
  resource :session
  
  namespace :api, defaults: { format: :json } do
    resources :tasks
    resources :deals, only: [:create, :destroy]    
  end
  
end