# 	8 - Make a class of Shelter (you should be an expert by now)

class Shelter
# 
# 	9 - a) The Shelter class should have an initialize method.
# 	  	b) The initialize method should accept a name argument, and set it to @name.
# 	  	c) The shelter needs to have a record of the animals it has, and the clients it has too.
#          So, inside the initialize method let's set @animals to be an empty hash, and @clients
# 		   to an empty array. 
	def initialize name
		@name = name
		@animals = {}
		@clients = []
	end

# 	10 - a) Give the Shelter class a method called add_client
# 		 b) This method should accept a client as an argument, and add this to the
# 			shelter's array of clients
# 

	attr_reader :animals, :clients

	def add_client client 
		@clients << client
	end 
# 	11 - a) Give the Shelter class a method called add_animal
# 		 b) This method should accept an animal as an argument.
# 			We want to add the animal to the shelter's hash of animals. For record-keeping
# 			purposes, the 'key' of each animal should be a unique number (e.g. its object_id), while
# 			the 'value' of the animal should be the actual animal itself.
	def add_animal animal
		@animals[animal.object_id] = animal
	end
 
end