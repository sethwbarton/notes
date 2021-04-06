## Anatomy of a Style Rule

```CSS
.error-text {
    color: red;
}
```

This whole thing represents a rule. 
The `.error-text` is the selector.
`color` is the property and `color: red;` is a declaration.
There can also be units, like px, rem, em. 

## Media Queries

These use the `@media` syntax. It's like an `if` statement in JavaScript. 

```CSS
@media (condition) {
 /* CSS that gets rendered if the condition is true. */
}
```
It sounds like there are a lot of "conditions" you can put here, but the two we 
learned about were `max-width` and `min-width`.

`max-width: 300px` is true so long as the screen is  smaller than 300px. 
`min-width: 3001px` is true so long as the screen is bigger than 301 pixels.
(The width is inclusive here. So a 300px-wide-screen would make the first one true.)

Another useful tip here is the rule `display: none` which just removes the selected
element completely from the rendering process. You won't see an element with this rule. 

Importantly, properties used in media queries are different than those in a regular rule. 
For instance, you can't query `font-size`. 

## Selectors

These come is different levels of complexity in a way. 
The most straightforward target just a single type of element. 

```CSS
/*Turn all the links red.*/
a {
    color: red
}
```
There also class selectors which start with a `.[className]` and then ID selectors
which start with `#[className]`

> I also learned about the "label" HTML element while reading this section. 
> From MDN:
> >The `<label>` element represents a caption for an item in a user interface.
> 
> There are big advantages to using labels with input fields and associated them 
> together by giving the input an `id` and the label a corresponding `for`. 
> It makes things a lot easier for screen readers. It also makes it so that clicking the label 
> also activates the input - which could be handy for touchscreens. 

### Pseudo-classes

`[class, id, or element type]:hover` is an example of a pseudo-class - which is simply a selector modifier. 
It applies the declarations when a certain state is met. There are tons of these. 

`:focus` applies its declarations when the selected item is the focus on the page. This is useful for people
who can't use a mouse and need to navigate with the keyboard. 

`:checked` applies to checkboxes and radio buttons that are filled in. 

### Combinators

#### The Descendant Combinator

```CSS
    nav a {
     /*style declarations go here.*/
    }
```

This selector (just two types with a space) selects all of type `a` that are 
any descendant of a type `nav`. It doesn't matter how deeply the `a`'s are nested. 

I experimented a bit, and it seems you can also have multiple parents. The last element type
in the list is what will get effected. 

So the selector `nav a p` would only apply to paragraph elements that are descendants of
both a `nav` and an `a`. 

#### The Child Combinator

If we want to get more specific we can also use a selector like `.main-list > li`
which only selects `li` elements that are 1st order children of elements with the `.main-list` class. 

Also, what a cool name for a selector. 

### Multiple Selectors

If you want to apply the same declarations to multiple elements you can  
use a comma. 

`input, textarea` applies its declarations to all  input and textarea elements. 

Importantly, if any of the selectors of invalid, the rule won't be applied. 
This matters when you're dealing with browser differences where one breaking 
selector could cause other, seemingly unassociated parts of the page to break as well. 

## Color

Most people use hex numbers, but we're using HSL during the course. 

HSL stands for hue, saturation, lightness. 

- Hue is a number given in degrees which represents a degree on the color wheel. 
- Saturation is how much white is mixed in with the color. (0% being totally white) 
- Lightness is how much black is mixed in with the color.  (0% being completely dark) 
- You can also send an `alpha` parameter which controls the opacity. This parameter is the last parameter, 
and should be sent post-fixed to a forward slash. It's a number between 0 and 1.
  
`hsl(340deg 100% 50% / 1)` is 340 degrees on the wheel, fully saturated, 
half bright, and fully opaque. 

## Units

The most popular unit is the pixel. And it's not necessarily a bad unit. 
The big exception to using pixels is typography. 

### Ems

The `em` unit is a relative unit, equal to the size of the font in the current element. 
They don't get used a whole lot because a tweak to font size can suddenly lead to 
spacing differences in the descendant elements. 

### Rems

Now this is where it's at in typography land. 
`rem` is like `em` but it's the fonts size of the root element, the `html` tag. 
You'll want to use `rem` when it comes to setting font sizes because that allows people
to change their user style preferences (font-size being the important one here)
and then your app's font size with scale with their preferences rather than having them zoom in to the 
page manually. 

Do it like this: 
```CSS
p {
  font-size: 1rem;
}
```

### Percentages

These are normally used with width or height as a way to consume a portion of the available space. 
(This is all relative to its immediate parent)

### Summary of unit rules

- Use `rem` when specifying font sizes. 
- Use `px` when it comes to specifying sizes of boxes on the screen. 
- Use `%` if you want a box to be a relative size. 
- Use `em` when you want something to scale directly with font size of that element. 

## Typography

`font-family` tells you which font to use. It's a family because each font
has multiple versions, or character sets, for things like thin, regular, bold, or italic.

Families come in three different styles: 

- Serif (with the serif)
- Sans-serif (without the serif)
- Monospace (each letter takes the same amount of horizontal space). 

If all you do is provide a font-family attribute, the OS picks the font for that page. 

Or, you can pick a custom font, usually downloaded from a CDN. 

Like so: 
```HTML
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```
```CSS
font-family: 'Roboto', sans-serif;
```

This last snippet selects the Roboto font from google, but if that's not available or if it's still loading, it allows the OS to just 
use the default sans-serif font. This is called a 'font-stack'. 

### Bold Text

This is accomplished with the `font-weight` property. This property takes a number from 1 to 1000, 
but we normally use segments of 100. 500 being normal text. 

You can also use keywords 'bold' but the browser creates its own bold font. 
And it usually doesn't look good. So you'll want to make sure you have all the weights you need in the CDN. 

### Italic Text

It's the same story as bold. You can do 
`font-style: italic` and the browser will suplly its own italic text, but it's
better to have downloaded your own which will get used if it's there. 

### Underlined Text

Don't use underlines for visual effect because that means a link! If you want to remove an
underline though, you can use `text-decoration: none`

### Alignment

Use `text-align` for aligning the text center, left, or right. 

### Transforms

```CSS
p {
    /* RENDER WITH ALL CAPS */
    text-transform: uppercase;
    /* Capitalize The First Letter Of Every Word */
    text-transform: capitalize;   
}
```
These transforms are useful because with them you don't have to ruin the proper
formatting of the text by capitalizing things that shouldn't be just to get a 
visual effect.

### Spacing

- `letter-spacing: 6px;` puts 6 pixels between each letter. 
- `line-height: 2` means the lines should be twice as tall as normal. You could also
pass a unit here, but without the unit it becomes relative.
  
## Browser Debugging

- A crossed out declaration means that's not taking effect. 
- You can click on `:hov` to change an elements state in the debugger. 
- Hold shift and click on a color in the tools to change the color type you read. 
- If you click on the color you'll get a color wheel as well as a contrast ratio. 
- The ratio should be 4.5 for small text, 3 for large text. 
- Firefox will tell you why a declaration doesn't take effect (sometimes).

Phew! That's a lot of material to cover. I think I'm going to get a quizlet link here soon. 

Well would you look at that!? I actually did it. Here's a link to a quizlet set that goes through most of this material: https://quizlet.com/_9nwrfo?x=1qqt&i=27237f
