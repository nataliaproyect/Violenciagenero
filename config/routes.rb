Rails.application.routes.draw do
  devise_for :users
  get 'home/index'

  resources :posts
  resources :images
  
  root to: "home#index"

  namespace 'api' do
    namespace 'v1' do
      post 'auth_user' => 'authentication#authenticate_user'
      resources :images
      post "sign_up" => 'registration#create'
    end
  end
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
