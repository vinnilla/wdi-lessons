# Heroes and Villains 

Do the following in `pry`.

Rewrite the following code using a hash called `vladamir_putins_brain`

```
vladamir_putins_brain = {
	name: "vladamir putin",
	launch_code: "a5Mjp257GHMGH23e5qxE",
	fav_hobby: "Riding ponies",
	prideful: true
}
```

- Use pry to return the string "Riding ponies"
- Use pry to return the string "a5Mjp257GHMGH23e5qxE"
- Use pry to add the key-value pair "obsessive_crush" => "Condoleezza Rice"
- Use pry to add the key-value pair :torture_count => 931


puts("#{name} loves #{fav_hobby}")

Rewrite the code below using a hash called `batman`

```
batman = {
	f_name: "Bruce",
	l_name: "Wayne",
	billionaire: true,
	alter_ego: "Batman"
}
	msg= "#{batman[:alter_ego]} is the secret identity of #{batman[:f_name]} #{batman[:l_name]}, an American #{batman[:billionaire] ? "billionaire, industrialist, and philanthropist" : "hobo"}."
	puts(msg)

```

Rewrite the following code using hashes and arrays

```
villains = ['The Penguin', 'The Joker', 'The Riddler']
sidekicks = [
	{f_name: "Jason",
	l_name: "Todd",
	alter_ego: "Robin"},
	{f_name: "Dick",
	l_name: "Grayson",
	alter_ego: "Robin"},
	{f_name: "Tim",
	l_name: "Drake",
	alter_ego: "Robin"}
]
origin = "Having witnessed the murder of his parents as a child, he swore revenge on #{villains[1]}, an oath tempered with a sense of justice with his best friend #{sidekicks[0][:f_name]} #{sidekicks[1][:l_name]} otherwise known as #{sidekicks[1][:alter_ego]}" 

puts(origin)
```

