#constant NAME
NAME = 'Vincent'
#local age
age = 21
#instance store
@store = 'GameStop'
#local array for shopping list
shopping_list = ['Monster Hunter 4', 'FFXV', 'No Man Sky', 'World of Goo']
#print any item in shopping list with more than 8 characters
# for item in shopping_list
# 	if item.length > 8
# 		puts item
# 	end
# end

shopping_list.each {|item| 
	if item.length>8 
		puts item
	end
}
