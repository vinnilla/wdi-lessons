# The Great Picture Show

[![:image](assets/meow.gif)](https://en.wikipedia.org/wiki/Leo_the_Lion_(MGM))

### Instructions

For the following assignment you'll be shown code snippets from an 
imaginary program. For each part **write the real code** that would make
it work so that when you type all these into pry it runs!

Tonight's assignment will demonstrate the expected output of your code 
using code snippets and *introspection*. _**Introspection** is the ability
of a program to examine the type or properties of an object._

### Setup

1.  Do the work in your student folder for today, in a folder named
    **`the_great_picture_show`**.
1.  Put work in the appropriately named file:
    - When prompted to define a class, write the class definition inside
      of a file with the same name as the class. (**Example:** A `Unicorn` 
      class would be in a file named `unicorn.rb`)
1.  Save your changes using `git` often! At the very least, use 
    `git add .` and `git commit -m "..."` after you finish each part. 
    This means that whenever you submit your homework, you will send us 
    your most updated work!
1.  **[Timebox](http://en.wikipedia.org/wiki/Timeboxing)** the problems: 
    limit how much time you will devote to a problem before you move on!

### Completion

**Finish at least the first 3 parts of The Great Picture Show.**

As always: more is better; healthy living is best. Only do the bonus if
you have completed every single part. Do not expect to get the bonus 
finished EVER.

## Part 1

Define a class called `Movie` so that if you entered the following code 
it would result in the output below.

```rb
flick = Movie.new
```

> Wait, where do I write that?

**Remember! It's up to _you_ to figure out how to make the correct 
expected output.**

So maybe start by making `movie.rb`…

> OK!

Now imagine your code changed to give you the following error:

```rb
flick = Movie.new
#=> ArgumentError: wrong number of arguments (0 for 1)
```

> Uh oh! How could I have gotten that error?

What if I told you `Movie.new` took `title` as an argument?

> OK so I'll define a class called `Movie` that takes `title` when I 
> initialize it?

**Well done!** That's how this lab works.

## Part 2

Imagine you've instantiated an *instance* of a class `Movie` with the 
title "Jaws" and assigned it to a variable `flick`.

For the following code to work, ***what would you have to write?***

```rb
flick = Movie.new("Jaws")
flick.class              #=> Movie
flick.is_a? Movie        #=> true
flick.title              #=> "Jaws"
flick.title.is_a? String #=> true
```

## Part 3

Imagine we could call `Movie#director`:

```rb
flick = Movie.new("Jaws")
flick.director #=> nil
flick.director = "Steven Spielberg" # >> "Director can only be set to a Person object!"
flick.director #=> still nil!
```

> Oh come on! A Person object?!

For the above code to work, ***what would you have to write?***

## Part 4

Imagine you made that `Person` class!

```rb
p1 = Person.new
```

Then we could try reassigning again!

```
flick.director = p1
flick.director.is_a? Person #=> true
```

For the above code to work, ***what would you have to write?***

## Part 5

But THEN what if you got this error?

```rb
p1 = Person.new
#=> ArgumentError: wrong number of arguments (0 for 2)
```

People usually have a `name` and a `birth_date` right?

> ಠ_ಠ

For the above code to work (ie, to raise an error), ***what would you have to write?***

## Part 6

Ok. So if we got a `Movie` class and a `Person` class down we should be 
able to do some of the following

```rb
p1 = Person.new("Steven Spielberg", Date.parse("December 18, 1946"))
flick.director = p1
flick.director.name             #=> "Steven Spielberg"
flick.director.birth_date.class #=> Date
flick.director.birth_date       #=> 1946-12-18
```

For the above code to work, ***what would you have to write?***

## Part 7

Let's take a break from that for a second. What would we need to create 
the following code?

```rb
s = Score.new(0.45)
s.to_s #=> "45%"
s.reviewed_by.class #=> NilClass
```

> Oh `Score#reviewed_by` returns nil. I'll just assign it to a Person

```rb
s.reviewed_by = Person.new("Roger Ebert", Date.parse("June 18, 1942"))
# >> Oops! Reviewer should be a Critic Object!
s.reviewed_by #=> nil
```

Are critics people?

> …

```rb
Critic.public_instance_methods.include?(:name)       #=> true
Critic.public_instance_methods.include?(:birth_date) #=> true
```

Well, it *reminds* me of a Person class.

> But does it bleed?

```rb
Critic.ancestors.include?(Person) #=> true
```

For the above code to work, ***what would you have to write?***

## Part 8

They're hard and fast now! Write the necessary code to make the below
work. Create a new `Movie` with the title `"Back to the Future"`.

```rb
bttf = Movie.new("Back to the Future")
```

Imagine we created an instance of a Script class with the following 
readers and writers:

```rb
script = Script.new
script.writer = Person.new("Robert Zemeckis", Date.parse("May 14, 1952"))
script.plot   = "A young man is accidentally sent 30 years into the past "   + \
                "in a time-traveling DeLorean invented by his friend, "      + \
                "Dr. Emmett Brown, and must make sure his high-school-aged " + \
                "parents unite in order to save his own existence."
```

Now add a script to the movie. Once you've added the script, you
should be able to run:

```rb
bttf.script.class        #=> Script
bttf.script.writer.class #=> Person
bttf.script.plot.class   #=> String
```

For the above code to work, ***what would you have to write?***

## Part 9

The producers decided to wring all the money they could out of this
movie, and did the following:

```rb
bttf.to_novelization.is_a? String #=> true
bttf.to_novelization 
#=> "Back to the Future! by Robert Zemeckis. A young man is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his friend, Dr. Emmett Brown, and must make sure his high-school-age parents unite in order to save his own existence. THE END"
```

> Better than the movie!

For the above code to work, ***what would you have to write?***

![:image](https://31.media.tumblr.com/tumblr_m60mv5CTcO1qciafbo1_500.gif)

## OR IS IT?!

Write code that would make the following examples work!

```rb
r = Rating.new("PG")
r.message = "Some material may not be suitable for children"
r.minimum_age = 13

p1 = Person.new("Gary", Date.parse("January 2, 2002"))
p2 = Person.new("Barry", Date.parse("January 2, 1949"))
p1.age #=> 12
p2.age #=> 65

r.suitable_for?(p1) #=> false
r.suitable_for?(p2) #=> true
```

And finally, *spoiler* alert!

```rb
m = Movie.new("Star Wars")
r = Rating.new("PG")
m.rating = r

d1 = Person.new("George Lucas", Date.parse("May 14, 1944"))
m.director = d1

m.script = Script.new
m.script.writer = d1
m.script.plot = "A boy becomes a man in space!"

s1 = Score.new(0.45)
s2 = Score.new(1)
s1.reviewed_by = Critic.new("Roger Ebert", Date.parse("June 18, 1942"))
s2.reviewed_by = Critic.new("Gene Siskel", Date.parse("September 9, 1943"))

m.scores.push(s1, s2)
```
