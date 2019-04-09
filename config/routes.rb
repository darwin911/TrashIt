Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  post "/users/login", to: 'users#login'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users do 
    resources :bins do
      resources :items
    end
  end
end
