Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'players/index'
      post 'players/create'
      delete 'players/:id', to 'players#destroy'
    end
  end

  root 'players#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
