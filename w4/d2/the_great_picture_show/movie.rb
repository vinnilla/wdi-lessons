class Movie

	def initialize title
		@title = title
		@class = Movie
	end

	#methods
	attr_reader :class, :title, :director

	def director= person
		if person.is_a? Person
			@director = person
		else
			return "Director can only be set to a Person object!"
		end
	end

end

class Person

	def initialize name, birth
		@name = name
		@birth_date = birth
	end

	#methods
	attr_reader :name, :birth_date
end

flick = Movie.new "Jaws"
p1 = Person.new "Steven Spielberg", DateTime.now
# p flick.class
# p flick.is_a? Movie
# p flick.title
# p flick.title.is_a? String

# p flick.director
flick.director = p1
# p flick.director.is_a? Person
p flick.director.name
p flick.director.birth_date.class
p flick.director.birth_date