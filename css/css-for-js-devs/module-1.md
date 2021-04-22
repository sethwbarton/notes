#Module 1

## Built in Declarations and Inheritance

Each web browser comes with a built-in style sheet called the user-agent stylesheet. You can see what chrome's looks like 
by default [here](https://source.chromium.org/chromium/chromium/src/+/master:third_party/blink/renderer/core/html/resources/html.css).

There's a thing called a CSS reset, which is a copy pasta to completely do away with any user-agent styles. 

## Inheritance

Many properties (mostly typographical ones) will be inherited by children and grand-children html nodes. So watch out! 
It's tricky because not all properties will be inherited. 

The specific properties that he illustrated as being inherited were color, background-color, text-size, text-shadow. But things like
border are not inherited by children nodes. 

He makes a big point about how CSS inheritance is almost like JavaScript prototypal inheritance. It's a point I didn't 
completely understand, though. 

If you must have a property be inherited, there is always the inherit value, which will force that property to look up the DOM to the nearest parent with that property 
and use the value set there. 


## The Cascade

This is something I've wanted to know about for a loooong time. 

It all boils down to the cascade algorithm. 

When CSS looks for how to draw an element on the screen, it checks for any rules that apply to that element. If multiple rules apply, it will pick both of them.
If there are conflicts among the declarations within those rules, it picks the ones from the rule with the most specific selector.

Specificity is as follows: id selectors are more specific than class selectors are more specific than tag selectors. 

id -> class -> tag

## Directions

English has vertically oriented blocks (paragraphs) and horizontally oriented words. CSS is the same way with directions. 
It builds its sense of direction with a block direction (vertical) and an inline direction (horizontal). 

In summary, the two axes of the web page are block (up and down) and inline (left to right).

### Logical properties

Importantly, there are some languages that are not left-to-right. We can add inclusive styling for supporting these languages with certain logical properties. 

These include: `margin-block-start`, `margin-block-end`, `margin-inline-start`, and `margin-inline-end`. These do what they sound like. They are equivalent to 
`margin-left` `top`, `bottom` etc. except they will change which part of the text block receives the margin dependent on the language. Nice!

## The Box Model

"Can You Explain the Box Model?" - You ought to be able to answer this question with more than just the boring CSS answer by the end of this section!

The box model can be likened to a person in winter clothes. There are layers.

Four aspects make up the box model:
- Content: the person inside the coat
- Padding: The polyester stuffing inside the coat.
- Border: The material of the code. It has a thickness and a color and effects the person's appearance.
- Margin: The person's "personal space". If its covid times, they don't come within 6 feet of other people. 

### Box Sizing

So, the box model can actually get pretty complicated because it doesn't always interpret things like you might expect. For instance, 
what does it really mean for an element to have a width of 100%? 

Well, if you're not using the `box-sizing` property, things can get hairy here. Without `box-sizing`, the browser calculates the size of an element solely based on its content. 
So if you set `width: 100%` that means that the _content_ of the box will be 100% the width of its parent. But then if you've also specified padding and border, it will smash those on top
of the 100% figure so that your box ends up bigger than you expected. 

To clear the confusion, we have the `box-sizing: border-box` declaration, which changes the sizing calculations so that border and padding is included in the size of a box. Neat! 

We can assume that this property will be used everywhere in the rest of this course. And we'll be able to set it up globally as well. So when you start a new project, you just have to use this
and then everything automatically has that sizing. And unless you override it, it will inherit to every element. 

### A New Default

Whenever we start a new project, we can copy-paste this snippet to never have to remember to set the box sizing property for any element. 

```CSS
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

Note: `::before` and `::after` are pseudo-element selectors, which we'll learn about later. 

## Padding

Padding adds extra space to the inside of an element. Because it's on the inside of the element, the padding will also receive that elements background color if it has one. 

### Units

The most common units for padding are `px` `em` `rem`. A lot of people think pixels are bad for accessibility. 
That may be true for font size, but not so much for box model properties like margin, border, or padding. 

`px` could actually be the more accessible unit for the box model properties. You don't normally want padding to scale with text. 
People bump up their font size to make it easier to read. As long as there is sufficient space between elements, you're good. 
But using rems or ems for box model things actually ends up scrunching the text and could make it less usable! 

#### Unit Tradeoffs

 - `em`: The padding here will be relative to the font size of the element. Usually this isn't what you want. It can make things
line up all wonky. 

 - `rem`: Eh... still not great for things like padding. Because this still makes the padding scale to the user's preferred text size 
which could cause the padding to scrunch the text smaller, actually making it harder to use. 
   
- `%`: Using a percentage is doable with padding but the result is counter-intuitive. The exception to this is that padding percentages can be used
to preserve specific aspect rations - which we'll get to talking about later. 
  
### Shorthand Properties

It's a clock that always mirrors orthogonal missing values! 

If all 4 values are passed they get applied to: top, right, bottom, left. In that order. 

If fewer than 4 values are passed it 'fills in the gaps'. If you pass it two values, it mirrors the top to the bottom and the right to the left. If we send three values, 
we set top / right / bottom explicitly but mirror the right value to the left.

### Overwriting Values

If you want to pad 3 sides, you could do it two ways. 

````css
.box {
  padding: 48px 48px 0 48px;
}
````

```css
.box {
  padding: 48px;
  padding-bottom: 0;
}
```
The second way is arguably clearer. BUT! Be careful because if you were to put `padding-bottom: 0` before the first padding statement, it wouldn't have any effect! 
The overwrite has to happen after the general statement. I guess CSS reads top down? 

## Border

The only required field when describing a border is the style (like solid or dotted.)

```css
.not-good {
  /* 🙅‍♀️ Won't work – needs a style! */
  border: 2px pink;
}
.good {
  /* 🙆‍♀️ Will produce a black, 3px-thick border */
  border: solid;
}
```

If you don't specify a border color on the border declaration, it will use the font's color by default. 
If you wanted to specify that behavior explicitly, it could be done with the `currentColor` keyword. Current color is 
always a reference the the element's derived text color - whether set explicitly or inherited. You can use it anywhere a color may show up. 

Importantly, if you are using `box-sizing: border-box` the width of the border is calculated into the width of the element. Without it, 
a 300px wide element with a ten pixel border on each size becomes a 320px wide element. 

### Border Radius

The CSSWG keeps a list of mistakes they've made with CSS. One of those mistakes is: border-radius should have been corner-radius. 

The rationale behind calling this a mistake is that border-radius rounds out a container event if there isn't a border! 

`border-radius` behaves just like border. It puts that radius (usually specified in px) on each side and has the same clockwise behavior. 
You can also use percentages for border-radius. 50% will turn the shape into a circle or oval since each corner's redius is 50% the total width / height. 

Be prepared, because border-radius can get weird fast. 

There ar 8 styles of borders apprently: 

`solid` `dotted` `dashed` `double` `groove` `ridge` `inset` `outset`. Catch em' all!

### Outline

Outline is super similar to border. But... it doesn't add any size to the element. It also doesn't get a radius so it'll look ugly with curved borders. 

Outlines live outside the border on the edge of the element. 
They also have a special property called `outline-offset` which allows you to put a bit of a gab between the element and its outline. 

You can use this to create a double bordered effect. 

But don't ever specify `outline: none`. The rule is sometimes used to hide the black or blue ring that outlines an element when you select it 
with the keyboard but this will get rid of that and then keyboard users will have no idea which element on the page is in focus. 

If you _must_ get rid of outline, make sure to use the :focus pseudo-class so that you can add in something that will make it still visible for keyboard users. 

## Margin

### Negative Margin

Margin is the only box model property that supports negative numbers. The others will ignore negative numbers. 

A negative margin means you can pull the element outside of its parent. Negative margins could also pull an element's sibling closer. 

Margin isn't about changing the selected elements position. It's about changing the gap between elements.

### Automatic Margins

Margins have another trick, which is centering within a parent. If you specify a margin of auto, it will seek to fill the maximum available space with the margin. 
But! This only works for horizontal margin. If you set the top or bottom margin to auto it's the same as setting it to 0px in the default layout. 

This also only works on elements with an explicit width.















































