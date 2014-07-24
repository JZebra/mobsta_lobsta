Rails.application.routes.draw do
  root to: "pages#root"
  
  namespace :api, defaults: { format: :json } do
    resources :tasks
    resources :users
    resource :session
    resources :transactions, only: [:create, :destroy]    
  end
  
 
  
end