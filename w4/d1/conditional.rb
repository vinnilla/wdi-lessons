num = 1

#equal, less than, greater than 2
if num == 2
	puts 'equals 2'
elsif num > 2
	puts 'greater than 2'
else
	puts 'less than 2'
end

#even or odd
if num.even?
	puts 'even'
else
	puts 'odd'
end

#initializing weather if weather does not have value	
weather = 'sunny'
weather ||= 'cloudy'
puts weather

#admin authorization
@user = {password: 'admin', is_admin: true}
params = {password: 'admin'}

if @user[:password] == params[:password] and @user[:is_admin] == true
	puts 'Here are your admin privileges'
elsif @user[:password] != params[:password]
	puts 'Authorization failed: Bad Password'
elsif !@user[:is_admin]
	puts 'Authorization failed: User is not an admin'
end