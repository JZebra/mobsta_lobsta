Rails.application.routes.draw do
  root to: "pages#root"
  get "splash", to: "pages#splash"
  get "dashboard", to: "pages#details"
  get "user", to: "users#current"
  
  resources :users
  resource :session, only: [:create, :new, :destroy]
  
  namespace :api, defaults: { format: :json } do
    resources :tasks
    resources :deals, only: [:create, :destroy]
    resources :categories, only: [:show, :index]
    resources :users, only: [] do
      resources :skills, except: [:index]
    end
    resources :skills, only: [:index]
    resources :availabilities, only: [:create, :destroy, :index, :show] do
      resources :availability_markers, only: [:create, :destroy, :index, :show]
    end
  end
  
end