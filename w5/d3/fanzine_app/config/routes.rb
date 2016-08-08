Rails.application.routes.draw do
  root "homes#homepage"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
 	get "/homes/homepage" => "homes#homepage"
 	get "/homes/info" => "homes#information"
 	get "/homes/about" => "homes#about"

end
