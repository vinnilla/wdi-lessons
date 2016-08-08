# 	12 - this will be the main file that we actually execute.
# 		 a) Here, we should use "require_relative" to load the three files we made today.
# 			If we then load this file up in irb, we should have access to all our methods.
# 		 b) If you want, you can write some executable code here

require_relative "client.rb"
require_relative "animal.rb"
require_relative "shelter.rb"


# 	
shelter1 = Shelter.new("The Glue Factory")
doggy = Animal.new("Donald", "Terrier", 10, "male")
shelter1.add_animal(doggy)
# 				 
puts shelter1.animals
# 
# 		
# 		 FURTHER WORK: Write a text-based input menu that allows us to interact with the methods we wrote today.
# 		 (i.e. so something who doesn't know ruby can use our program) 