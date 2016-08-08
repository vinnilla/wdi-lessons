# Super Boring Corporate Databases

<img src='assets/sbc_database.png' alt="sbc databases" height="400px" />

## Mongoose Modeling After Hours

The boss catches you right before you leave your homey cubicle for your 
cubicle-like home.

**She needs you to make a few Mongoose models** - she wants to see what 
they look like, but you can't understand why you're writing them beyond 
that.

All she's giving you is the basic fields of what she wants made - 
**can you have it on her desk by tomorrow?!**

### Assignment

For each of the below scenarios, create a file `resource_seeds.js` that
defines:

- a schema, and
- a model

The file then connects to MongoDB and inserts at least 3 documents for 
the resource.

Finally, the file prints out the state of the collection in MongoDB.

For example, for the resource "W2 Forms":

```bash
$ node w2_forms_seeds.js
#=> Creating W2 Forms...
#=>
#=> The database now has the forms:
#=> [{name: "Bob", deductions: 1}, {name: "Sarah", deductions: 3}, ...]
```

#### Coffee Mugs

> So there I am, draining my daily Sencha, about to leave, when I get a 
> new i-903d7 on my desk from Geoff! 
> 
> Like, I'm trying to get my calm on! I already got enough e47 forms 
> coming outta my shirt! And this collar's starched - Geoff is literally 
> killing me.
> 
> *Humpdays* amiryte!?

Your boss Barb was very specific on the Mugs. You know she's a very 
serious lady, too. 

She needs all the "coffee holders" kept track of by 4 different fields:

- Color
- Material
- Volume
- Handle

See if you can make sense of these fields and create a model out of 
them. 

#### Printers

> Printers are like the coolest. *100% Hellatite.*
> 
> I don't need ink in my skin - just on my paperwork.

All the printers are different, and Barb needs you to keep track of 
their differences - unfortunately, she was a bit more vague on this one…

- Color or Black and White?
- When was it purchased
- Ink type
- Model Number
- Scanner
- Hi-Res Photo Printing
- Average Lifespan of Ink Cartridges
- How long since Ink Cartridge has been changed 

#### Business Card Rolodex

> I went with Source Code Pro Bold on my square eggshell cards, but the 
> rounded font really clashes with the symmetrical shape.
> 
> *Jeez* I look like such a rebel now - I doubt I'll get that promotion…

Barb is generally an exacting boss, which you love! Her instructions are 
always so clear!

Unfortunately, today isn't every day. After giving you the Mugs and 
Printers assignment, she leaves, but quickly pops in her head, and drops 
a few photos on your desk. She said:

"Oh ya, we need to keep track of the business cards. Build a rolodex 
thing, too."

It's up to you to figure out how to store these business cards:

<img src="http://www.printworks-online.com/images/products/businesscard-panda.jpg" alt="business card 1" height="250px" />

<img src="http://www.rockdesign.com/upload/card/h/2/black-business-cards-1.jpg" alt="business card 2" height="250px" />

<img src="http://www.webdesignbooth.com/images/qr-code-business-cards/wind-waker---moo-business-cards.jpg" alt="business card 3" height="250px" />

<img src="http://www.psia-e.org/wp-content/uploads/2013/09/BusinessCards.jpg" alt="business card 4" height="250px" />

<img src="http://www.davidairey.com/images/cards/david-airey-business-card-3.jpg" alt="business card 5" height="250px" />

> Any questions on File Maker Pro, I go to Kedar. 
> 
> He's my File Maker *Bro*!
> 
> Lol, right?…
