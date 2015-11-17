Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api do
    resources :cats
  end
  resources :users
  resource :session, only: [:create, :destroy, :new]
end
