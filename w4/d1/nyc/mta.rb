@n_line_stops   = ['Times Square', '34th', '28th-n', '23rd-n', 'Union Square', '8th']
@l_line_stops   = ['8th Ave', '6th Ave', 'Union Square', '3rd Ave', '1st Ave']
@six_line_stops = ['Grand Central', '33rd', '28th-six', '23rd-six', 'Union Square', 'Astor Place']

@mta = {
  n_line: @n_line_stops,
  l_line: @l_line_stops,
  six_line: @six_line_stops
}

def list_stops line
	puts 'Line stops: ' 
	@mta[line].each do |stop|
		puts stop
	end
end

def list_lines
	puts 'NYC MTA Lines: '
	puts 'N Line'
	puts 'L Line'
	puts 'Six Line'
end

def get_on line
	list_stops line
	print "Enter the stop you want to get on: "
	get_on = gets.delete "\n"
end

def get_off line
	list_stops line
	print "Enter the stop you want to get off: "
	get_off = gets.delete "\n"
end	

def user_line
	list_lines
	print "Enter the line you want to get on: "
	chosen_line_on = gets.chomp.downcase.gsub(' ', '_').to_sym
	on = get_on chosen_line_on
	list_lines
	print "Enter the line you want to get off: "
	chosen_line_off = gets.chomp.downcase.gsub(' ','_').to_sym
	off = get_off chosen_line_off
	num_stops chosen_line_on, on, chosen_line_off, off
end

def num_stops line_on, stop_on, line_off, stop_off
	total_stops = 0
	first_stops = 0
	second_stops = 0
	first_stops += (@mta[line_on].index('Union Square') - @mta[line_on].index(stop_on)).abs
	second_stops += (@mta[line_off].index(stop_off) - @mta[line_off].index('Union Square')).abs
	#check if lines are the same -- stop calculations are different
	if line_on == line_off
		total_stops = (first_stops - second_stops).abs
	else
		total_stops = first_stops + second_stops
	end
	puts "Your trip from the #{stop_on} station to the #{stop_off} station will be #{total_stops} stops long."
	#check if a transfer is necessary
	if line_on != line_off
		puts "You will have to make 1 transfer at Union Square to the #{line_off.to_s.gsub('_', ' ')}."	
	end
end

user_line