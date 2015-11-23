Rails.application.routes.draw do
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :cats do
      resources :vaccines
    end
    resource :session
    resources :users
  end

  resources :users, only: [:new, :create]
  resources :cats, only: [:show]
  resource :session, only: [:create, :destroy, :new]
end
