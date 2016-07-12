#max
def max a,b=0
	return a if a>b
	b
end

p max 0

# #abbreviator
# def abbr string
# 	abbreviation = ''
# 	string.split(' ').each do |word|
# 		abbreviation += word[0].upcase
# 	end
# 	abbreviation
# end

# p abbr 'Hello there.'
# p abbr 'To be or not to be.'

#class
# class Item
# 	attr_accessor :item_name
# 	attr_reader :quantity
# 	attr_writer :owner

# 	@@store = "Target" #class variable -- shared among all classes

# 	def initialize(item_name, quantity, owner='Kedar') #constructor
# 		@item_name = item_name
# 		@quantity = quantity
# 		@owner = owner
# 	end

# 	def show #puts method
# 		puts @item_name
# 		puts @quantity
# 		puts @owner
# 	end
# end

class Movie

	def initialize title, actors, director #constructor
		@title = title
		@actors = actors
		@director = director
	end

	#class methods
	attr_reader :title, :actors, :director #getters
	attr_writer :actors

	def add_actor actor
		@actors << actor
	end

end