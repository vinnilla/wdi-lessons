class Tenant

	def initialize first, last, birth, gender
		@f_name = first
		@l_name = last
		@born_on = birth
		@gender = gender
	end

	#methods
	attr_accessor :occupation, :nickname

	def full_name
		@f_name + " '" + @nickname + "' " + @l_name
	end

end

@bill = Tenant.new 'Bill', 'Nye', 1966, 'male'
@bill.nickname = 'Science Guy'
p @bill