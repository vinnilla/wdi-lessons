class ModelUno

	#constructor
	def initialize color="Light Blue", engine=150, luggage=false
		@color = color
		@engine = engine
		@luggage = luggage
		@seat_warmer = false
	end

	#methods
	attr_reader :color, :engine
	attr_accessor :front_cup_holder, :rear_cup_holder

	#check existence of luggage rack
	def luggage_rack?
		@luggage
	end

	#seat warmer methods
	def turn_seat_warmer_on
		@seat_warmer = true
	end
	def turn_seat_warmer_off
		@seat_warmer = false
	end
	def seat_warmer_on?
		@seat_warmer
	end

end

scooter = ModelUno.new
p scooter