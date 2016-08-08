# Welcome to Modeling School

![](http://www.amalgama-lab.com/pict/bands/songs/h/handsome_boy_modeling_school.jpg)

## Introduction

To practice modeling databases, you'll be tasked with drawing ERDs for a 
handful of hypothetical applications. Think about what models you would 
need and what tables you'd create, including the associated attributes 
and how they would related to other tables.

Work together to draw out diagrams for one of the apps below. Draw your 
diagrams on the wall, so snap photos of the drawings when you've 
finished for safe keeping.

Consider all different angles in each of these examples. What 
relationships exist? What entities are there? What objects and 
intangible ideas are necessary? How would you organize it?

Remember, for each ERD, to name:

- the tables,
- each table's "schema:" ie, its columns/attributes and their types,
- [the relationships between the tables, and their "cardinality"
  (1:1, 1:n, n:n)][notation]

## Exercise

Pick two of the following, design the tables and relationships, and draw 
their ERD:

1. **Library**: you are building an app that allows children to borrow 
   books from the library. Your app should keep track of who borrowed 
   which books and which books people currently have borrowed.
2. **Apartment Rentals**: you are building an app to facilitate the 
   rental process. We have many buildings, each with apartments that are 
   either available for rent or occupied. We have tenants that live in 
   our apartment buildings.
3. **Budget Airline**: you are building an app to manage bookings for an
   airline. The airline needs to keep track of flights, tickets sold
   on those flights, and the status of the flights and passengers.
4. **Doggy Day Care**: you are building an app to manage a doggy day care.
   This app needs to track owners and their pets: the owners have
   monthly payments for a set number of visits (10), but must also pay
   for any visits more than that in a given month. The pets need to
   have their vaccinations up-to-date, and any dietary or play
   restrictions imposed (including if they do not get along with any
   other pets).

#### Deliverables

An ERD diagram, using crows foot notation, of whatever app you choose. 
For example:

<p align="center">
  <img src ="https://www.edrawsoft.com/images/examples/entity-relationship-diagram.png">
</p>

> Note: this example has "Items" as placeholders for the attributes.

<!-- LINKS -->

[notation]: assets/example_erd.png

<!--

# Domain Modeling 2

For each of the following, read the domain, then model it into a problem with entities and relationships. Draw an ERD diagram. From your ERD diagram, design a database schema. For each one, create the SQL file you would use to create the tables.

###Travel Log
You are building an app to help you keep track of our travels. Allows you to write journal entries in various places along your way. Example of a place is Chicago, USA or Paris, France or Timbuktu, Mali. Each place has it's own section in your journal and you can go back and review all of your entries for a particular place after your trip.

###Photo Management App
A professional photographer needs a web app to help manage sharing the photographs that she takes with her clients. She often takes wedding photos, but also does couples and family photos. She keeps photos in an album for each event and shares those with her clients.

###Figure Skating
You are building an app to help with the Winter Olympics, specifically the figure skating event. Your app will keep track of the skaters and the scores they receive from each of the judges. 

###Snapchat
Instagram is SO last year. We're going to build a web app that allows us to add friends, and then to take Snapshots and send them to any number of our friends.

## Bonus

###College Class Management Software (Think Blackboard)
You are building software to help students and professors manage their classes. A student can be enrolled in several classes, and they have assignments and grades for each of those classes. A teacher also can teach multiple classes and teaches many students. Courses, students and teachers are limited to a university (no cross-university enrollment).

-----------

#ERDs & Database Schema Design

For each of the following

## ERDs - 2 Model

###Travel Log
You are building an app to help you keep track of our travels. Allows you to write journal entries in various places along your way. Example of a place is Chicago, USA or Paris, France or Timbuktu, Mali. Each place has it's own section in your journal and you can go back and review all of your entries for a particular place after your trip.

- Places, Journal Entries -- 1:*

###Fridge Managment App
You are building an app to help General Assembly manage their fridges. The app should allow you to keep inventory of all the food in a fridge, organize it, throw out food that's gone spoiled, etc.

- Fridge, Food Items -- 1:*

###Library
You are building an app that allows children to borrow books from the library. Your app should keep track of who borrowed which books and which books people currently have borrowed.

- Books, Borrowers -- *:*

## ERDs - 3+ Models

###Rental App
We are building an app to facilitate the rental process. We have many buildings, each with apartments that are either available for rent or occupied. We have tenants that live in our apartment buildings.

###Photo Management App
A professional photographer needs a web app to help manage sharing the photographs that she takes with her clients. She often takes wedding photos, but also does couples and family photos. She keeps photos in an album for each event and shares those with her clients.

- Clients, Photos, Events

###Figure Skating
You are building an app to help with the Winter Olympics, specifically the figure skating event. Your app will keep track of the skaters and the scores they receive from each of the judges. 

- Judges, Scores, Skaters

###Snapchat
Instagram is SO last year. We're going to build a web app that allows us to add friends, and then to take Snapshots and send them to any number of our friends.

- Snaps, Friends, Friendships

###College Class Management Software (Think Blackboard)
You are building software to help students and professors manage their classes. A student can be enrolled in several classes, and they have assignments and grades for each of those classes. A teacher also can teach multiple classes and teaches many students. Courses, students and teachers are limited to a university (no cross-university enrollment).
-->
