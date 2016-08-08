Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "weather/all"
  get "weather/:id" => "weather#get"
  post "weather/create"

end
