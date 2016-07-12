# dreams = ['scary', 'funny', 'woah', 'heavy', 'anxious', 'super-powered']

# #prepend actually to dreams with 's'
# new_dreams = []
# dreams.each do |dream|
# 	if dream.include? 's'
# 		new_dreams << 'actually ' + dream
# 	else
# 		new_dreams << dream
# 	end
# end

# p new_dreams

# #sort actually dreams to the front of the array
# sorted_new_dreams = new_dreams.sort

# #collect dreams that have actually in them
# actually_sorted_new_dreams = []
# sorted_new_dreams.each do |dream|
# 	if dream.include? 'actually'
# 		actually_sorted_new_dreams << dream
# 	end
# end

# #count number of actually dreams
# p actually_sorted_new_dreams.count


#hash
dream = {
	type: 'scary',
	duration: 2,
}