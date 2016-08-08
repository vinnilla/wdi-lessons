class WeatherController < ApplicationController
	protect_from_forgery :except => :create
	def all
		@weathers = Weather.all
		render json: @weathers
	end

	def get
		@weather = Weather.find(params[:id])
		render json: @weather
	end

	def create
		city = params[:city]
		temperature = params[:temperature]
		#date = Date.parse(params[:date])
		Weather.create(city: city, temperature: temperature)
		render json: {msg: "Weather inserted successfully"}
	end

end
