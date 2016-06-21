#### Setup

To practice with CSS selectors, create a new HTML document called `practice.html` and paste the following inside the  `<body>`.

```html
  <h1>Heading</h1>
  <p>This is a paragraph element</p>

  <div>This is a DIV</div>
  <div class="crazy">This is another DIV</div>
  <div class="crazy super-cool">
    <p>This is a paragraph inside of the third DIV</p>
  </div>

  <p id="comments-title">Comments</p>
  <ul>
    <li>Comment One</li>
    <li class="super-cool">Comment Two</li>
    <li>Comment Three</li>
  </ul>
```

Next, create a new stylesheet called `practice.css` and include it with a `link` tag

Add the following

```css
body {
  font-family: "Lucida Grande";
}

h1 {
  text-align: center;
}
```

Now it's time to learn about the different types of CSS selectors...


#### Basic Selectors

##### *element* Selector

This is how we could select all `<h1>` and `<h2>` tags:

```css
h1, h2 { ... }
```

**PRACTICE:<br>- Set the margin on the `<body>` element to 15 pixels on all four sides<br>- Set the text color of all `<div>` elements to blue.**

##### *ID* Selector

We select an element that matches the value of an `id` attribute by prefixing it with `#`:

```css
#id-name { ... }
```

>Note: **id**'s on elements should always be unique.

**PRACTICE:<br>- Set the size of the font to 28px on the `<p>` element with an `id="comments-title"`**

##### *class* Selector

Selects elements that match one of the values of the *class* attribute - yes, the *class* attribute accepts multiple space separated values!

To target elements with a given class, or classes, we prefix the name of the class with a period:

```css
.my-class { ... }  /* Target all elements having the class of "my-class" */
span.my-class { ... }  /* Target all <span class="my-class"> elements */
li.item.special { ... }  /* Target all <li class="item special"> elements */
```

**PRACTICE:<br>- Set the border of the `<li>` with a class of `super-cool` to be solid, 2px in width and red in color.**

##### *attribute* Selector

Selects elements based upon its attributes.

Less common, but if you come across square brackets in a selector, you'll know what they are for!

```css
[style] { ... }  /* Matches elements that have a 'style' attribute */
a[href="#about"] { ... }  /* Targets anchor tags with an 'href' set to "#about" */
```

#### Combinators

Combinators provide a powerful way to select elements based upon their relationship to other elements.

The most common combinator is the **descendant selector**.

We use the _descendant selector_ to target elements **nested** within another element, regardless of the depth of the nesting.

A _descendant selector_ is defined by using a space between two other selectors:

```css
/* This will match all <span> tags nested anywhere within a <h3> tag having a class of "sub-title" */
h3.sub-title span { ... }
```

**PRACTICE:<br>- Using a _descendant selector_, set the background color of the `<p>` tag with the text of "This is a paragraph inside of the third DIV" to yellow.**

##### There are three additional combinators:

These are not quite as common but can come in handy...

- The **child selector** (`>`)

  The _child selector_ is similar to the _descendant selector_, except that it only matches elements that are **direct** children, that is, nested only one-level deep:

  ```css
  /* Selects all <p> tags that are direct children of a <div> */
  div > p {...}
  ```
  
- The **adjacent sibling selector** (`+`)

  ```css
  div + p {...}
  ```

   Would select `<p>` tags only if they were preceded immediately by a `<div>` at the same level (sibling).

- The **general sibling selector** (`~`)

  Similar to the _adjacent sibling selector_, except that it targets **all** siblings, not just the adjacent one:

  ```css
  div.my-class ~ p {...}
  ```

  Would target all `<p>` tags that are siblings following a `<div>` with a class of "my-class".
  
**Questions?**

#### Specificity

*Specificity* is the means by which a browser decides which CSS rule gets applied when there is a conflict.  For example:

```css
.my-class {
    color: blue;
}

div {
    color: red;
}

<div class="my-class">What color am I?</div>
```

A conflict exists because the `<div>` matches both CSS selector rules.

**? - What color will the `<div>` in the above example be?**

The selector with the **highest** *Specificity* wins based upon this list of increasing specificity:

- Universal (*) selector
- Type (element) selectors
- Class selectors
- Attributes selectors
- Pseudo-classes
- ID selectors
- Inline styles

There is an exception to the concept of *specificity* known as the **!important** declaration.  Use of *!important* is not recommended because it can make debugging CSS more difficult than it already is.

#### Pseudo-classes

Pseudo-classes (along with pseudo-elements) let you style elements not just based upon their class, type, id or position in the document, but also their state. For example, whether an `<input type="checkbox">` is checked or not.

Some common pseudo-classes are `:active`, `:disabled`, `:empty`, `:first-child`, `:nth-child`, `:nth-of-type`, `:focus`, `:hover`, and many more!

We can also chain pseudo-classes for extra good fun time!  `li:nth-child(3):hover`

**PRACTICE:<br>- Use the `:hover` pseudo-class to change the cursor to the little hand-pointer when it's over any of the `<li>` elements.<br>- Use the `::first-letter` pseudo-element to set the size of the "C" in "Comments" to be 60px.**

Here's a link to learn more about [pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/pseudo-classes) and [pseudo-elements](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements).

