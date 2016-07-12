@guest_list = []
@guest_list << {name: 'Vincent', age: 21}
@guest_list << {name: 'Gary', age: 18}
@guest_list << {name: 'Will', age: 27}
@guest_list << {name: 'Christine', age: 24}
@guest_list << {name: 'Kendrick', age: 8}

def of_age person
	return true if person[:age] > 21
	return false
end

def number_of_drinks
	underage = 0
	ofage = 0
	@guest_list.each do |person|
		if of_age(person)
			ofage += 1
		else
			underage += 1
		end
	end
	puts "#{ofage} people get wristbands and #{underage} people get the dreaded underage 'x'"
	puts "#{ofage*4} drinks are needed."
end
number_of_drinks

def list_of_names
	can_drink = 'Can drink: '
	cannot_drink = "Can't drink: " 
	@guest_list.each do |person|
		if of_age(person)
			can_drink += person[:name] + ' '
		else
			cannot_drink += person[:name] + ' '
		end
	end
	puts can_drink
	puts cannot_drink
end
list_of_names

def add_guest
	print "Please enter your name: "
	name = gets.delete "\n"
	print "Please enter your age: "
	age = gets.to_i
	@guest_list << {name: name, age: age}
end

add_guest
puts @guest_list