# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

s1 = Student.create({name: "Harry", born_on: "July 31, 1980"})
s2 = Student.create({name: "Draco", born_on: "June 5, 1980"})

h1 = House.create({name: "Gryffindor"})
h2 = House.create({name: "Slytherin"})

sp1 = Spell.create({name: "Avada Kedavra"})
sp2 = Spell.create({name: "Accio"})
sp3 = Spell.create({name: "Expecto Patronum"})

