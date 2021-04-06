#Module 1

## Built in Declarations and Inheritance

Each web browser comes with a built-in style sheet called the user-agent stylesheet. You can see what chrome's looks like 
by default [here](https://source.chromium.org/chromium/chromium/src/+/master:third_party/blink/renderer/core/html/resources/html.css).

There's a thing called a CSS reset, which is a copy pasta to completely do away with any user-agent styles. 

## Inheritance

Many properties (mostly typographical ones) will be inerited by children and grand-children html nodes. So watch out! 
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

English has veritcally oriented blocks (paragraphs) and horizontally oriented words. CSS is the same way with directions. 
It builds it's sense of direction with a block direction (vertical) and an inline direction (horizontal). 

In summary, the two axes of the web page are block (up and down) and inline (left to right).

### Logical properties

Importantly, there are some languages that are not left-to-right. We can add inclusive styling for supporting these languages with certain logical properties. 

These include: `margin-block-start`, `margin-block-end`, `margin-inline-start`, and `margin-inline-end`. These do what they sound like. They are equivalent to 
`margin-left` `top`, `bottom` etc. except they will change which part of the text block receives the margin dependent on the language. Nice!

## The Box Model

"Can You Explain the Box Model?" - You ought to be able to answer this question with more than just the boring CSS answer by the end of this section!

The box model can be likened to a person in winter clothes. There's layers.

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
and then everything automatically has that sizing. And unless you overrride it, it will inherit to every element. 

### A New Default

Whenever we start a new proejct, we can copy paste this snippet to never have to remember to set the box sizing property for any element. 

```CSS
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

Note: `::before` and `::after` are pseudo-element selectors, which we'll learn about later. 

