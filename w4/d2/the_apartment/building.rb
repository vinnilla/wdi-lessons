class Building

	def initialize address, floors
		@address = address
		@num_floors = floors
		@apartments = {}
	end

	#methods
	attr_accessor :apartments

	def add floor, apartment
		temp_object = {
			floor: floor,
			apartment: apartment
		}
		@apartments << temp_object
	end

	def floor num
		list = []
		@apartments.each do |apartment|
			if apartment[:floor] == num
				list << apartment[:apartment]
			end
		end
		list
	end

	def collect_rents 
	end

end