class Apartment

	def initialize unit, beds, baths, tenants=[]
		@unit = unit
		@num_beds = beds
		@num_baths = baths
		@tenants = tenants
		set_price
	end

	#methods
	attr_reader :unit, :num_beds, :num_baths, :tenants, :price

	def set_price
		@price = 1000*@num_beds + 500*@num_baths
	end

	def studio?
		return true if @num_beds == 1
		false
	end

	def move_in tenant
		if @tenants.length = @num_beds
			puts "We're full! #{tenant} can't move in!" 
		else
			@tenants << tenant
		end
	end

	def empty?
		return true if @tenants.length == 0
		false
	end

end

@apartment = Apartment.new 'B', 2, 1
p @apartment.studio?