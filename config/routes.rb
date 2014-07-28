Rails.application.routes.draw do
  root to: "pages#root"
  get "splash", to: "pages#splash"
  get "details", to: "pages#details"
  get "user", to: "users#current"
  
  resources :users
  resource :session
  
  namespace :api, defaults: { format: :json } do
    resources :tasks
    resources :deals, only: [:create, :destroy]
    resources :availabilities do
      resources :availability_markers
    end
  end
  
end